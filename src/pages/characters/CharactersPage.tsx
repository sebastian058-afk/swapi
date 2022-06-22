import Box from '@mui/material/Box';
import { AlertBar } from '../../components/ui/feedback/AlertBar';
import { useQuery as query } from 'react-query';
import WhiteCircularProgress from '../../components/ui/WhiteCircularPRogress';
import CardsContainer from '../../components/ui/flex/CardContainer';
import ProgressContainer from '../../components/ui/flex/ProgressContainer';
import { SearchBar } from '../../components/ui/searchbar/SearchBar';
import { useState } from 'react';
import { CharacterCard } from '../../components/cards/CharacterCard';

export const CharactersPage = () => {

    const { isLoading, error, data } = query('characters', () =>
        fetch('https://swapi.dev/api/people').then(res =>
            res.json()
        )
    )

    if (error instanceof Error) {
        console.log(error)
    }

    let characters: any[] = data?.results;

    let [searchQuery, setSearchQuery] = useState<string>('');

    return (
        <>
            {
                isLoading ?
                    <ProgressContainer>
                        <Box>
                            <WhiteCircularProgress />
                        </Box>
                    </ProgressContainer>
                    :
                    <>
                        <SearchBar handleChange={(event: any) => setSearchQuery(event?.target?.value)} />
                        <CardsContainer>
                            {
                                characters?.filter((character: any) => {
                                    if (!searchQuery) {
                                        return character
                                    } else if (character?.name.toLowerCase().includes(searchQuery?.toLowerCase())) {
                                        return character
                                    }
                                }).map(({ name, url }: any) => {
                                    const id = url?.substr(29)
                                    return (
                                        <CharacterCard name={name} id={id} />
                                    )
                                })
                            }
                        </CardsContainer>
                    </>
            }

            {
                error && <AlertBar errorLabel={`An error has ocurred: ${error}`} />
            }
        </>
    )
}

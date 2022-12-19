import { CardContent, CardMedia, Typography } from '@mui/material';
import { BackButton } from "../ui/back button/BackButton";
import { useQuery as query } from 'react-query';
import { Character } from '../../pages/characters/characterType';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from "@mui/material/Link";
import { HomePlanetModal } from '../modals/HomePlanetModal';
import Grid from '@mui/material/Grid';
import { DataTable } from '../tables/DataTable';
import { Link as RouterLink } from 'react-router-dom';
import { Film } from '../../pages/films/filmType';



const createData = (
    data?: string,
    value?: string | string[] | number | number[] | React.ReactElement[] | React.ReactElement) => {
    return { data, value };
};

export const CharacterDetailsCard = ({
    name,
    films,
    homeworld,
    birth_year,
    height, gender,
    mass,
    skin_color,
    hair_color,
    eye_color
}: Character) => {

    const [relatedFilms, setRelatedFilms] = useState<Film[]>([]);

    const getRelatedFilms = async () => {
        try {
            const result = await Promise.all(
                films?.map((film: string) =>
                    axios.get(film).then((res) => res?.data)
                )
            );
            setRelatedFilms(result as any);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getRelatedFilms();
    });

    const { error, data: homePlanet } = query('homeworld', () => axios.get(homeworld).then(res => res?.data))

    const [openHomePlanetModal, setOpenHomePlanetModal] = useState<boolean>(false)

    if (error instanceof Error) {
        console.error(error)
    }

    const handleOpenHomePlanet = () => setOpenHomePlanetModal(true)

    const handleCloseHomePlanet = () => setOpenHomePlanetModal(false)

    const rows = [
        createData('Name', name),
        createData('Birth year', birth_year),
        createData('Height', height),
        createData('Gender', gender),
        createData('Mass', mass),
        createData('Skin color', skin_color),
        createData('Hair color', hair_color),
        createData('Eye color', eye_color),
        createData("Related films",
            (relatedFilms?.map(((film: Film) => {
                return (
                    <Typography>
                        <RouterLink key={film?.title} to={`/films/${film?.url?.substring(28)}`}>{film?.title}</RouterLink>
                    </Typography>)
            })))
        ),
        createData('Homeworld', (<Link sx={{ cursor: 'pointer' }} onClick={handleOpenHomePlanet}>{homePlanet?.name}</Link>)),
    ];

    return (
        <>
            <BackButton />
            <Grid container spacing={0} display="flex" alignItems="center" p={10}>
                <Grid item xs={12} md={6} >
                    <CardMedia
                        component="img"
                        image={`/images/${name}.jpg`}
                        alt={name}
                        height={'100%'}
                    />
                </Grid>
                <Grid item xs={12} md={6} >
                    <CardContent sx={{ p: 0 }}>
                        <DataTable rows={rows} />
                    </CardContent>
                </Grid>
            </Grid>
            <HomePlanetModal closeHomePlanetModal={handleCloseHomePlanet} homePlanet={homePlanet} openHomePlanetModal={openHomePlanetModal} />
        </>
    )
}

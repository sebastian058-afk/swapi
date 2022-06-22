import styled from "@emotion/styled";
import { CardContent, CardMedia } from "@mui/material";
import { CharacterTable } from "../tables/CharacterTable";
import { BackButton } from "../ui/back button/BackButton";
import CustomCard from "../ui/feedback/CustomCard";
import { InvalidCharacterCard } from "./InvalidCharacterCard";

const CustomCharacterDetailsCard = styled(CustomCard)`
  display: flex;
  justify-content: end;
  flex-direction: row;
  margin: 50px 200px;
  :hover{
      opacity: 100%;
  }
`;

interface CharacterDetailCardProps {
    name: string,
    birth_year: string,
    height: string,
    gender: string,
    mass: string,
    skin_color: string,
    hair_color: string,
    eye_color: string,
}

const createData = (
    characterData: string,
    value: string,
) => {
    return { characterData, value };
}

export const CharacterDetailsCard = ({
    name,
    birth_year,
    height, gender,
    mass,
    skin_color,
    hair_color,
    eye_color
}: CharacterDetailCardProps) => {
    const rows = [
        createData('Name', name),
        createData('Birth year', birth_year),
        createData('Height', height),
        createData('Gender', gender),
        createData('Mass', mass),
        createData('Skin color', skin_color),
        createData('Hair color', hair_color),
        createData('Eye color', eye_color),
    ];

    return (
        <>
            {
                !name ?
                    <InvalidCharacterCard/>
                    :
                    <CustomCharacterDetailsCard key={name}>
                        <BackButton />
                        <CardMedia
                            component="img"
                            image={`/images/${name}.jpg`}
                            alt={name}
                        />
                        <CardContent sx={{ width: 2000 }}>
                            <CharacterTable rows={rows} />
                        </CardContent>
                    </CustomCharacterDetailsCard>
            }
        </>
    )
}

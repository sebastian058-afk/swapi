import styled from "@emotion/styled";
import { Grid, CardMedia, CardContent } from "@mui/material";
import { BackButton } from "../ui/back button/BackButton";
import CustomCard from "../ui/feedback/CustomCard";
import { Film } from "../../pages/films/filmType";
import axios from "axios";
import { useState, useEffect } from "react";
import { Character } from "../../pages/characters/characterType";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { DataTable } from "../tables/DataTable";

const CustomFilmDetailsCard = styled(CustomCard)`
  margin: 50px 20px;
  :hover {
    opacity: 100%;
  }
`;

const createData = (
    data?: string,
    value?: string | string[] | number | number[] | React.ReactElement[] | React.ReactElement) => {
    return { data, value };
};

export const FilmDetailsCard = ({
    characters,
    director,
    episode_id,
    opening_crawl,
    producer,
    release_date,
    title,
}: Film) => {

    const { filmId } = useParams();
    const [people, setPeople] = useState<Character[]>([]);

    const getFilmCharacters = async () => {
        try {
            const result = await Promise.all(
                characters.map((character) =>
                    axios.get(character).then((res) => res?.data)
                )
            );
            setPeople(result as any);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getFilmCharacters();
    });

    const rows = [
        createData("Title", title),
        createData("Release Date", release_date),
        createData("Episode Number", episode_id),
        createData("Director", director),
        createData("Producer", producer),
        createData("Opening Crawl", opening_crawl),
        createData("Characters",
            (people?.map(((person: Character) => {
                return (
                    <Typography>
                        <Link key={person?.url} to={`/films/${filmId}/characters/${person?.url?.substring(29)}`}>{person?.name}</Link>
                    </Typography>)
            })))
        )
    ];

    return (
        <CustomFilmDetailsCard>
            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{
                        textAlign: { xs: "-webkit-center" },
                    }}
                >
                    <BackButton />
                    <CardMedia
                        component="img"
                        image={`/images/${title}.jpg`}
                        alt={title}
                        sx={{
                            width: { xs: "400px", md: "100%" },
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={9}>
                    <>
                        <CardContent sx={{ width: "100%", height: "100%", padding: 0 }}>
                            <DataTable rows={rows} />
                        </CardContent>
                    </>
                </Grid>
            </Grid>
        </CustomFilmDetailsCard>
    );
};

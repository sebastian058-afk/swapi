import { useState, useEffect } from "react";
import { useQuery as query } from "react-query";
import { SearchBar } from "../../components/ui/searchbar/SearchBar";
import { Film } from "./filmType";
import { CardsLayout } from "../../layout/CardsLayout";
import { MenuCard } from "../../components/cards";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import axios from "axios";

export const FilmsPage = () => {
    const { isLoading, error, data } = query("movies", () =>
        axios.get("https://swapi.dev/api/films").then((res) => res.data.results)
    );

    if (error instanceof Error) {
        console.error(error);
    }

    const [films, setFilms] = useState<Film[]>([]);

    useEffect(() => {
        setFilms(data);
    }, [data]);

    const [searchQuery, setSearchQuery] = useState<string>("");

    const sortFilmsByEpisode = () => {
        return data.sort((a: Film, b: Film) => {
            if (a?.episode_id < b?.episode_id) {
                return -1;
            }
        })
    }

    return (
        <CardsLayout isLoading={isLoading} error={error}>
            <>
                <SearchBar
                    title="Search Film"
                    handleChange={(event: any) => setSearchQuery(event?.target?.value)}
                />
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                    sx={{ mt: 2, mb: 2 }}
                >
                    <Grid item>
                        <Button
                            sx={{ width: "250px" }}
                            variant="contained"
                            onClick={sortFilmsByEpisode}
                        >
                            Sort by Release Date
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            sx={{ width: "250px" }}
                            variant="contained"
                        >
                            Sort by Episode
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: 5, mb: 5 }}
                >
                    {films
                        ?.filter((film: Film) => {
                            if (!searchQuery) {
                                return film;
                            } else if (
                                film?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
                            ) {
                                return film;
                            }
                        })
                        .map(
                            ({
                                title,
                                url,
                                director,
                                producer,
                                release_date,
                                episode_id,
                            }: Film) => {
                                const id = url?.substr(28);
                                return (
                                    <MenuCard
                                        name={title}
                                        id={id}
                                        key={title}
                                        director={director}
                                        producer={producer}
                                        releaseDate={release_date}
                                        episodeId={episode_id}
                                    />
                                );
                            }
                        )}
                </Grid>
            </>
        </CardsLayout>
    );
};

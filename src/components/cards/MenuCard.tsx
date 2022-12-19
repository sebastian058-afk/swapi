import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import CustomCard from "../ui/feedback/CustomCard"
import styled from '@emotion/styled';

interface CharacterCardProps {
    name?: string,
    id?: string,
    releaseDate?: string,
    director?: string,
    producer?: string,
    episodeId?: number,
}

const Span = styled.span`
    font-weight: 400
`

export const MenuCard = ({name, id, releaseDate, director, producer, episodeId}: CharacterCardProps) => {
    return (
        <CustomCard key={name} sx={{ width: 500, margin: 1, borderRadius: 3}}>
            <Link to={`${id}`}>
                <CardMedia
                    component="img"
                    height="450"
                    image={`images/${name}.jpg`}
                    alt={name}
                    sx={{ cursor: 'pointer' }}
                />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h1" sx={{color: 'black', fontSize: '35px', fontWeight: '500'}}>
                    {name}
                </Typography>
                <Typography gutterBottom variant="h5" sx={{fontWeight: '100'}}>
                    Episode {episodeId?.toString()}
                </Typography>
                <Typography gutterBottom variant="h6" sx={{fontWeight: '100'}}>
                    Released on <Span>{releaseDate}</Span>
                </Typography>
                <Typography gutterBottom variant="h6" sx={{fontWeight: '100'}}>
                    Directed by <Span >{director}</Span> & Produced by <Span>{producer}</Span>
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'end'}}>
                <Button size="large">
                    <Link to={`${id}`}>
                        See details
                    </Link>
                </Button>
            </CardActions>
        </CustomCard>
    )
}

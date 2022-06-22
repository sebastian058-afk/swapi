import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import CustomCard from "../ui/feedback/CustomCard"

interface CharacterCardProps {
    name: string,
    id: string,
}

export const CharacterCard = ({name, id}: CharacterCardProps) => {
    return (
        <CustomCard key={name} sx={{ width: 300, margin: 1 }}>
            <Link to={`${id}`}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`images/${name}.jpg`}
                    alt={name}
                    sx={{ cursor: 'pointer' }}
                />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link to={`${id}`}>
                        See details
                    </Link>
                </Button>
            </CardActions>
        </CustomCard>
    )
}

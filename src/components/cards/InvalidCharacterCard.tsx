import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const InvalidCharacterCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          This character doesn't exist
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Try looking for a different one
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="characters">
          <Button size="small">Go back to character list</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

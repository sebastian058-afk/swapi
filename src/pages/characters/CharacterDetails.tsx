import { Link, useParams } from "react-router-dom";
import { useQuery as query } from 'react-query';
import { Button, CardContent, CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ProgressContainer from "../../components/ui/flex/ProgressContainer";
import { Box } from "@mui/system";
import WhiteCircularProgress from "../../components/ui/WhiteCircularPRogress";
import { AlertBar } from "../../components/ui/feedback/AlertBar";
import { CharacterDetailsCard } from "../../components/cards/CharacterDetailsCard";

const CharacterDetails = () => {
  const { characterId } = useParams();

  const { isLoading, error, data } = query('character', () =>
    fetch(`https://swapi.dev/api/people/${characterId}`).then(res =>
      res.json()
    )
  )

  if (error instanceof Error) {
    console.log(error)
  }

  return (
    <>
      {
        isLoading ? <ProgressContainer>
          <Box>
            <WhiteCircularProgress />
          </Box>
        </ProgressContainer>
          :
          <CharacterDetailsCard {...data} />
      }
      {
        error && <AlertBar errorLabel={`An error has ocurred: ${error}`} />
      }
    </>
  )
}

export default CharacterDetails;

import { useParams } from "react-router-dom";
import { useQuery as query } from 'react-query';
import { CharacterDetailsCard } from "../../components/cards";
import { CardsLayout } from "../../layout/CardsLayout";

export const CharacterDetails = () => {
  const { characterId } = useParams();

  const { isLoading, error, data } = query('character', () =>
    fetch(`https://swapi.dev/api/people/${characterId}`).then(res =>
      res.json()
    )
  )

  if (error instanceof Error) {
    console.error(error)
  }

  return (
    <CardsLayout isLoading={isLoading} error={error}>
      <CharacterDetailsCard {...data} />
    </CardsLayout>
  )
}

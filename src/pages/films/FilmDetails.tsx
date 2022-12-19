import { useParams } from "react-router-dom";
import { useQuery as query } from 'react-query';
import { CardsLayout } from "../../layout/CardsLayout";
import { FilmDetailsCard } from '../../components/cards/FilmDetailsCard';

export const FilmDetails = () => {
  const { filmId } = useParams();

  const { isLoading, error, data } = query('character', () =>
    fetch(`https://swapi.dev/api/films/${filmId}`).then(res =>
      res.json()
    )
  )

  if (error instanceof Error) {
    console.error(error)
  }

  return (
    <CardsLayout isLoading={isLoading} error={error}>
      <FilmDetailsCard {...data} />
    </CardsLayout>
  )
}
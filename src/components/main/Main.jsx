import './Main.css';
import { Movie } from './movie/Movie';
export const Main = ({ data, isLoading, hasError }) => {
  return (
    <main>
      {isLoading && <h2>Se incarca filmele</h2>}
      {hasError && <h2>Eroare la incarcare</h2>}
      {data &&
        data.results.map(film => {
          return <Movie movie={film} />;
        })}
    </main>
  );
};

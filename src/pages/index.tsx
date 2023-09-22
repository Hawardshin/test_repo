import Link from 'next/link';
import Seo from '../../components/Seo';
import {useRouter} from 'next/router';
interface my_movies {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
}

export default function Home({results}: {results: Array<my_movies>}) {
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className='container'>
      <Seo title='Home' />
      {results?.map((movie: my_movies) => (
        <>
          <div className='movie' key={movie.id}>
            <Link href={`/movies/${movie.original_title}`} key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </Link>
            <h4 onClick={() => onClick(movie.id, movie.original_title)}>
              {movie.original_title}
            </h4>
          </div>
        </>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps() {
  const {results} = await (
    await fetch('http://localhost:3000/api/movies')
  ).json();
  return {
    props: {
      results
    }
  };
}

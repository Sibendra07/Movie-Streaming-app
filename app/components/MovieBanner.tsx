
// app/components/MovieBanner.tsx
import { Movie } from '../../types';

interface MovieBannerProps {
  movie: Movie;
}

export default function MovieBanner({ movie }: MovieBannerProps) {
  return (
    <div className="relative h-[70vh]">
      <div 
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {movie.title}
            </h1>
            <p className="text-lg text-gray-200 mb-4 max-w-2xl">
              {movie.overview}
            </p>
            <div className="flex gap-4">
              <span className="bg-yellow-400 text-black px-4 py-1 rounded-full">
                IMDB: {movie.vote_average.toFixed(1)}
              </span>
              <span className="bg-white/20 text-white px-4 py-1 rounded-full">
                Released: {new Date(movie.release_date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

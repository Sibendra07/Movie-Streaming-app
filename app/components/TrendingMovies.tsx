// app/components/TrendingMovies.tsx
import Image from 'next/image';

export default function TrendingMovies({ movies }: { movies: any[] }) {
  if (!movies?.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <div key={movie.id} className="group">
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm mb-2">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-xs">
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="text-gray-300 text-xs">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
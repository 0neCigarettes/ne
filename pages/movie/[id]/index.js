import Image from "next/image";
import Meta from "../../../components/Meta";
import apiService from "../../../services/api_service";

const Movie = ({ movie }) => {
	return (
		<div className="container max-w-4xl mx-auto pt-6">
			<Meta title={movie.title} />
			<div className="px-3">
				<Image
					src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
					width={1000}
					height={600}
					className="rounded-md"
					alt={movie.title}
				/>
				<h1 className="font-bold text-xl my-2">{movie.title}</h1>
				<p className="text-gray-600 text-sm mt-4">{movie.overview}</p>
				<p className="mt-5 text-gray-600 text-sm">
					Genres:{" "}
					<span className="font-bold">
						{movie.genres.map((genre) => genre.name).join(", ")}
					</span>
				</p>
				<p className="text-gray-600 text-sm">
					Release Date: <span className="font-bold">{movie.release_date}</span>
				</p>
			</div>
		</div>
	);
};

export async function getStaticProps(context) {
	const { id } = context.params;
	const response = await apiService.id(id);
	const movie = response.data;

	return {
		props: { movie },
	};
}

export async function getStaticPaths() {
	const response = await apiService.getPopularMovies();
	const movies = response.data.results;

	const ids = movies.map((movie) => movie.id);
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
}

export default Movie;


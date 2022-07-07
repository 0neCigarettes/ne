import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";
import apiService from "../services/api_service";

export default function Home({ movies }) {
	return (
		<div className="bg-gray-700">
			<Hero />
			<PopularMovie movies={movies.results} />
		</div>
	);
}

export async function getStaticProps() {
	const response = await apiService.getPopularMovies();
	const movies = response.data;

	return {
		props: { movies },
	};
}


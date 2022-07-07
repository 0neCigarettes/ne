import Api from "./base_api";

const api_token = "api_key=671d738ef42b49d13ab8b6a65fbeeacc";

const api_service = {
	id(params) {
		return Api().get(`/${params}?${api_token}&language=en-US&page=1`);
	},
	getPopularMovies() {
		return Api().get(`/popular?${api_token}&language=en-US&page=1`);
	},
};
export default api_service;

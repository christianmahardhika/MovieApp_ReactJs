import MovieRepositoryInterface from "./MovieRepositoryInterface";
import { Api, customParams} from "./api";
import { BaseResponse, Movie } from "./response";

class MovieRepository implements MovieRepositoryInterface {
    async DiscoverMovies(): Promise<BaseResponse<[Movie]>> {
        var response = await Api.get('/discover/movie', {
            params: customParams({ 
                'sort_by': 'popularity.desc',
                'include_adult': false,
                'include_video': false,
                'page': 1
            })    
        })
        return response.data
      }
}

export default new MovieRepository()
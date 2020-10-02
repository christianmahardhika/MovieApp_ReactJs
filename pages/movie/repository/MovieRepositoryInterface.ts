import { BaseResponse } from "./response";

interface MovieRepositoryInterface {
    DiscoverMovies(): Promise<BaseResponse<any>>
}

export default MovieRepositoryInterface
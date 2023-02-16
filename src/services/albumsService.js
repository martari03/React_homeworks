import {axiosService} from "./axiosService";
import {urls} from "../configs";

const albumsService = {
    getAllAlbums: () => axiosService.get(urls.albums)
};

export {albumsService}
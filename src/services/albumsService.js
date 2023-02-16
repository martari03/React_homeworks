import {axiosService} from "./axiosService";
import {urls} from "../../../hw/src/configs";

const albumsService = {
    getAllAlbums: () => axiosService.get(urls.albums)
};

export {albumsService}
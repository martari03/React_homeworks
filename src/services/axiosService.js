import axios from "axios";

import {baseURL} from "../../../hw/src/configs";

const axiosService = axios.create({baseURL});

export {axiosService};
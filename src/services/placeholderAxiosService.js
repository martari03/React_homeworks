import axios from "axios";

import {placeholderBaseURL} from "../configs";

const placeholderAxiosService = axios.create({baseURL: placeholderBaseURL});

export {placeholderAxiosService};
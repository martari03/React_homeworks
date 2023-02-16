import axios from "axios";

import {owuBaseURL} from "../configs";

const owuAxiosService = axios.create({baseURL: owuBaseURL});

export {owuAxiosService};
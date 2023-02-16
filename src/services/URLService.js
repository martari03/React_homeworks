import axios from "axios";
import {baseURL} from "../configs";

const urlService = axios.create({baseURL});

export {urlService};
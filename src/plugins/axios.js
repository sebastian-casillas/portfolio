import axios from "axios";

axios.defaults.baseURL = "https://casillas.dev/api/api/";
axios.defaults.headers.common = {
    "Authorization": `Bearer 906bebf1da7b09f57df305b4a920c4`,
    "Cockpit-Token": `906bebf1da7b09f57df305b4a920c4`,
    "Content-Type": "application/json",
};

export default axios;
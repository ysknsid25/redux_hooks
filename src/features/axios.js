import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://127.0.0.1:8080",
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
});

export default axios;

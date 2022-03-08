import axios from "axios";

export default axios.create({
    baseURL: `/api/v1/`,
    headers: {
        Authorization: `${process.env.VUE_APP_API_URL}`
    }
})
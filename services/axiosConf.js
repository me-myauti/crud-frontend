import axios from 'axios'

const axiosConfig = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3333/'
})



export default axiosConfig
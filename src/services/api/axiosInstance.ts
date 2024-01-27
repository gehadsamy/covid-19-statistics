import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.covidtracking.com/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(undefined, (error: AxiosError) => {
    console.error(`Error fetching data from ${error.config?.url ?? 'unknown url'}:`, error.message);
    throw error;
});

export default axiosInstance;
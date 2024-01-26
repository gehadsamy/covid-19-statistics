import axios, { AxiosError } from 'axios';

const baseAPIUrl = 'https://api.covidtracking.com/v1/states';

// Define interfaces for your data
interface StateData {
    // Define the properties and types based on the API documentation
}

const axiosInstance = axios.create({
    baseURL: 'https://api.covidtracking.com/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(undefined, (error: AxiosError) => {
    console.error(`Error fetching data from ${error.config?.url ?? 'unknown url'}:`, error.message);
    throw error;
});

export const getAllStatesData = async (): Promise<StateData[]> => {
    const response = await axiosInstance.get<StateData[]>(`${baseAPIUrl}/current.json`);
    return response.data;
};

export const getSpecificStateData = async (stateCode: string): Promise<StateData> => {
    const response = await axiosInstance.get<StateData>(`${baseAPIUrl}/${stateCode.toLowerCase()}/current.json`);
    return response.data;
};

export default axiosInstance;
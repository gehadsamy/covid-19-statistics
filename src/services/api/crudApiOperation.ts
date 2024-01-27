import axiosInstance from './axiosInstance';


export const fetchData = async (endpoint: string, params?: any): Promise<any> => {
    try {
        const response = await axiosInstance.get(endpoint, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
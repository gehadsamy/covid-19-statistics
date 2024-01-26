/* eslint-disable @typescript-eslint/no-explicit-any */
// crudOperations.ts
import axiosInstance from './axiosInstance';

// Example CRUD operations

export const fetchData = async (endpoint: string, params?: any): Promise<any> => {
    try {
        const response = await axiosInstance.get(endpoint, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const createData = async (endpoint: string, data: any): Promise<any> => {
    try {
        const response = await axiosInstance.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error creating data:', error);
        throw error;
    }
};

export const updateData = async (endpoint: string, data: any): Promise<any> => {
    try {
        const response = await axiosInstance.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};

export const deleteData = async (endpoint: string): Promise<any> => {
    try {
        const response = await axiosInstance.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};
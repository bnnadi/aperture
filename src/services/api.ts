import axios, { AxiosResponse } from 'axios';
import { Platform } from 'react-native';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

interface Data {
  [key: string]: any;
}

interface File {
  name: string;
  type: string;
  uri: string;
}

// GET request
export const get = async (url: string, params?: Data) => {
    try {
        const response: AxiosResponse<Data> = await api.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
};

// POST request
export const post = async (url: string, data: Data): Promise<Data> => {
    try {
        const response: AxiosResponse<Data> = await api.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data', error);
        throw error;
    }
};

// PUT request
export const update = async (url: string, data: Data): Promise<Data> => {
    try {
        const response: AxiosResponse<Data> = await api.put(url, data);
        return response.data;
    } catch (error) {
        console.error('Error updating data', error);
        throw error;
    }
};

// DELETE request
export const deleteReq = async (id: number): Promise<Data> => {
    try {
        const response: AxiosResponse<Data> = await api.delete(`/data/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting data', error);
        throw error;
    }
};

// Multipart upload
export const uploadFile = async (file: File): Promise<Data> => {
    const formData = new FormData();
    formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.name,
    });

    try {
        const response: AxiosResponse<Data> = await api.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading file', error);
        throw error;
    }
};
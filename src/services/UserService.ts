import Config from "react-native-config";
import { get, post, update } from "./api";


export interface User {
    id: number;
    name: string;
    email: string;
    password?: string;
    birthday: string;
    token: string;
}

export interface CreateUserDTO {
    name: string;
    email: string;
    birthday?: string;
}

export interface UpdateUserDTO {
    name?: string;
    email?: string;
    birthday?: string;
}
export interface LoginUserDTO {
    email: string;
    password: string;
}

class UserService {
    async getUserById(id: number): Promise<User> {
        const response = await get(`/user/${id}`);
        return response.data;
    }

    async createUser(data: CreateUserDTO): Promise<User> {
        const response = await post(`/user`, data);
        return response.data;
    }

    async updateUser(id: number, data: UpdateUserDTO): Promise<User> {
        const response = await update(`/user/${id}`, data);
        return response.data;
    }
}

export const userService = new UserService();
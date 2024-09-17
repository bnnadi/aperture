import { get } from "./api";

export interface History {
    id: number;
    user_id: number;
    question: string;
    expression: string;
    answer: string;
    result: number;
    created_at: string;
}

class HistoryService {
    async getHistory(id: number): Promise<History[]> {
        const response = await get(`/math-history/${id}`);
        return response.data;
    }

    async getAllHistory(): Promise<History[]> {
        const response = await get(`/user/math-history`);
        return response.data;
    }
}

export const mathService = new HistoryService();
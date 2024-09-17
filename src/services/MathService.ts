import { post } from "./api";

export interface CreateMathDTO {
    question: string;
    expression: string;
}

class MathService {
    async createMath(dto: CreateMathDTO): Promise<void> {
        const response = await post("/solve", dto);
        return response.data;
    }
}
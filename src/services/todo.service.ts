import axios from 'axios';

const API_URL = 'https://630d3311b37c364eb7016ec6.mockapi.io/'

axios.defaults.baseURL = API_URL;

export interface ITask {
    title?: string;
    description?: string;
    performed?: boolean;
    checked: boolean;
    index?: any;
    onChange?: (checked: boolean, index: number) => void;
}

export interface ITaskBlock {
    title: string,
    id: number,
    list: ITask[]
}

export const TodoService = {
    async getAll() {
        return axios.get<ITaskBlock[]>('/enot/')
    },
    async updateTodoBlock(data: ITaskBlock, id: number) {
        return axios.put(`/enot/${id}`, data)
    }
}
import type { AxiosResponse } from "axios";
import type { ITaskResponseDto } from "../types/ITaskResponseDto";
import { api } from "./api";
import type { ICreateTaskDto } from "../types/ICreateTaskDto";

export const getAllTasks = async (): Promise<ITaskResponseDto[]> => {

    try {
        const response = await api.get<void, AxiosResponse<ITaskResponseDto[]>>('/tasks');
        return response.data
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;     
    }
}

export const createTask = async (task: ICreateTaskDto): Promise<ITaskResponseDto> => {
    try {
        const response = await api.post<ICreateTaskDto, AxiosResponse<ITaskResponseDto>>('/tasks', task);
        return response.data
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}

export const setTaskCompletion = async (taskId: number, completed: boolean): Promise<ITaskResponseDto> => {
    try {
        const response = await api.post<void, AxiosResponse<ITaskResponseDto>>(`/tasks/set-completion/${taskId}/${completed}`);
        return response.data
    } catch (error) {
        console.error('Error marking task as completed:', error);
        throw error;
    }
}

export const deleteTask = async (taskId: number): Promise<void> => {
    try {
        await api.delete(`/tasks/${taskId}`);
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
}
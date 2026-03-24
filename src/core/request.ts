import { DEFAULT_API_URL, DEFAULT_HEADERS } from "../constants";
import type { APIResponse } from "../types";
import { APIError } from "./error";

let apiBaseURL = DEFAULT_API_URL;

export const getApiBaseURL = () => apiBaseURL;
export const setAPIBaseURL = (url: string) => apiBaseURL = url;

export async function request<T>(endpoint: string, params: Record<string, string>, fetchOptions?: RequestInit): Promise<T> {
    const encodedParams = new URLSearchParams(params);

    const response = await fetch(`${apiBaseURL}/${endpoint}?${encodedParams}`, {
        ...fetchOptions,
        headers: {
            ...DEFAULT_HEADERS,
            ...fetchOptions?.headers
        }
    });

    if (!response.ok) {
        let body: unknown;
        try {
            body = await response.json();
        } catch (error) {
            body = await response.text();
        }

        throw new APIError(
            `Failed request, endpoint ${endpoint}: ${response.statusText}`, 
            response.status,
            apiBaseURL,
            body
        );
    }

    const data = await response.json() as APIResponse<T>;
    return data.data;
}
import { DEFAULT_API_URL, DEFAULT_HEADERS } from "./constants";

let apiBaseURL = DEFAULT_API_URL;

export const getApiBaseURL = () => apiBaseURL;
export const setAPIBaseURL = (url: string) => apiBaseURL = url;

export class APIError extends Error {
    public status: number;
    public baseUrl: string;
    public data?: unknown;

    constructor(message: string, status: number, baseUrl: string, data?: unknown) {
        super(message);
        this.name = 'APIError';
        this.status = status;
        this.baseUrl = baseUrl;
        this.data = data;
    }
}

export async function request<T>(endpoint: string, params: Record<string, string | string[]>, fetchOptions?: RequestInit): Promise<T> {
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

    const data = await response.json();
    return data as T;
}
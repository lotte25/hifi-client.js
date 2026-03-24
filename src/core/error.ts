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
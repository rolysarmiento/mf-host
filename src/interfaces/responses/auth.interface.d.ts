export interface AuthResponse {
    rows: Rows;
    statusCode: number;
    message: string;
    statusType: string;
}
export interface Rows {
    token: string;
}

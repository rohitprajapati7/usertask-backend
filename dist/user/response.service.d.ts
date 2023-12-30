export declare class ResponseService {
    static success(data: any, statusCode?: number, message?: string): {
        success: boolean;
        statusCode: number;
        data: any;
        message: string;
    };
    static error(message?: string, errorCode?: string): {
        success: boolean;
        message: string;
        errorCode: string;
    };
}

import { ErrorCode } from "../constants/errorCodes";

export type ApiOkResponse<T> = { ok: true; data: T };
export type ApiErrorResponse = {
  ok: false;
  error: { code: ErrorCode | string; message: string; details?: Record<string, any> };
};

export function ok<T>(data: T): ApiOkResponse<T> {
  return { ok: true, data };
}

export function err(code: ErrorCode | string, message: string, details?: Record<string, any>): ApiErrorResponse {
  return { ok: false, error: { code, message, details } };
}

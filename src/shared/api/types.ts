// Обёртка которую возвращает КАЖДЫЙ эндпоинт
export interface ApiResponse<T> {
  data: T | null;
  meta: Record<string, unknown>;
  errors: ApiError | null;
}

export interface ApiError {
  message: string;
  code: string;
}

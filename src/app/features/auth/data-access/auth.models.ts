export interface User {
  username: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  expiresIn: number;
}

export interface RegisterRequest {
  username: string;
  password: string;
}

export interface ForgotPasswordRequest {
  username: string;
}

export interface ResetPasswordRequest {
  username: string;
  password: string;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  exp: number;
}

export type AuthStatus = 'authenticated' | 'anonymous' | 'loading';

export interface AuthError {
  message: string;
  code?: string;
}

export interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
} 
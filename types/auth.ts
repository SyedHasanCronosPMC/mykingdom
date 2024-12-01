export interface UserCredentials {
  email: string;
  password: string;
}

export interface SignupData extends UserCredentials {
  name: string;
  confirmPassword: string;
}

export interface ResetPasswordData {
  email: string;
}

export interface SSOProvider {
  id: string;
  name: string;
  icon: string;
} 
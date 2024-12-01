import { SignupData, UserCredentials, ResetPasswordData } from '@/types/auth';

interface AuthResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const authService = {
  async signIn({ email, password }: UserCredentials): Promise<AuthResponse> {
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'An error occurred during sign in');
    }
  },

  async signUp(data: SignupData): Promise<AuthResponse> {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create account');
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'An error occurred during sign up');
    }
  },

  async forgotPassword({ email }: ResetPasswordData): Promise<AuthResponse> {
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send reset email');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'An error occurred while processing your request');
    }
  },

  async signInWithSSO(provider: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`/api/auth/sso/${provider}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to sign in with ${provider}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : `An error occurred during ${provider} sign in`);
    }
  },
}; 
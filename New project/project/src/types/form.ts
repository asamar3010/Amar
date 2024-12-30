export interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  platform: string;
  genres: string[];
  profilePicture: File | null;
  acceptTerms: boolean;
}

export interface FormErrors {
  [key: string]: string;
}
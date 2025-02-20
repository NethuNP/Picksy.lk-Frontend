export interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact: string;
}

export interface AuthState {
  user : User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface UserLogin{
  email: string;
  password: string;
}

export interface Product {
  _id: string;
  productName: string;
  category: string;
  image: string;
  price: number;
  description: string;
}

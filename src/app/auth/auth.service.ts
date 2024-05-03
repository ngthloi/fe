import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Mock user's authentication status
  private isAuthenticated = false;

  constructor() {}

  login(email: string, password: string): boolean {
    // Validate email and password with your logic or API call
    // For now, assuming user credentials are correct
    this.isAuthenticated = true;
    localStorage.setItem('isLoggedIn', 'true');
    // Store user's information and token here if needed
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
    // Remove user's information and token here if needed
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('isLoggedIn') === 'true';
  }

  // You might also want to implement functionality to refresh tokens or check user's roles
}
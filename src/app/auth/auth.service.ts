import { Injectable } from '@angular/core';

export interface IUser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInKey = 'isLoggedIn'; // Chave para armazenar o status de login no localStorage

  login(username: string, password: string): boolean {
    // Lógica de autenticação mock
    if (username === 'admin' && password === '1234') {
      localStorage.setItem(this.loggedInKey, 'true'); // Armazena o status de login como "true" no localStorage
      return true; // Retorna true se a autenticação for bem-sucedida
    }
    return false; // Retorna false se a autenticação falhar
  }

  logout() {
    localStorage.removeItem(this.loggedInKey); // Remove o status de login do localStorage ao fazer logout
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.loggedInKey) === 'true'; // Verifica se o usuário está autenticado com base no status armazenado no localStorage
  }
}

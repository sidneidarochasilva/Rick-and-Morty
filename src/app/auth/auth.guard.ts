import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      return true; // Retorna true se o usuário estiver autenticado e permite a navegação para a rota
    } else {
      // Redireciona para a página de login caso o usuário não esteja autenticado
      return this.router.parseUrl('/login'); // Retorna a URL da página de login para redirecionamento
    }
  }
}

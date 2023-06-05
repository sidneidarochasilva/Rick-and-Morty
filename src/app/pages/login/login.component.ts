import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

  username: string = ''; 
  password: string = ''; 


  constructor(
    private authService: AuthService, // Injeção de dependência do serviço de autenticação
    private router: Router // Injeção de dependência do roteador
  ) { }

  ngOnInit(): void {
    // Método de inicialização vazio
  }

  login() {
    // Chama a função de autenticação do serviço
    const isAuthenticated = this.authService.login(this.username, this.password);

    if (isAuthenticated) {
      // Autenticação bem-sucedida, redireciona para a rota '/'
      this.router.navigate(['/']);
    } else {
      // Autenticação falhou, exibe um alerta de erro
      alert("Falha na autenticação. Tente novamente.");
    }
  }

}

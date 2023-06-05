import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchQuery = new EventEmitter<string>(); // Evento de saída para emitir a consulta de pesquisa
  @Input() hiddenSearch = true; // Entrada para controlar a exibição ou ocultação da barra de pesquisa
  constructor(
    private authService: AuthService, // Serviço de autenticação
    private router: Router // Objeto para navegação entre rotas
  ) { }

  ngOnInit(): void {
  }

  filterList(target: EventTarget | null) {
    if (target instanceof HTMLInputElement) {
      const query = target.value; // Obtém o valor da consulta de pesquisa

      this.searchQuery.emit(query); // Emite o evento com a consulta de pesquisa para o componente pai
    }
  }

  logout() {
    this.authService.logout(); // Realiza o logout chamando a função do serviço de autenticação
    this.router.navigate(['/login']); // Redireciona para a página de login após o logout
  }
}

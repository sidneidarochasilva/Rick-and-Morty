import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ICharacter } from './../../interface/ICharacter';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {
  @Input() listCharacters: any = []; // Lista de personagens recebida como entrada
  @Input() nextPage: string = ''; // URL da próxima página de personagens recebida como entrada
  @Output() PageUrl = new EventEmitter<any>(); // Evento de saída para emitir a URL da próxima página

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this)); // Adiciona um evento de rolagem para carregar mais itens ao chegar ao final da página
  }

  redirect(character: ICharacter ) {
    let queryParams = {
      data: JSON.stringify(character)
    };
    this.router.navigate(['details-character', queryParams]);
  }

  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;

    if (scrollPosition + windowHeight >= documentHeight) {
      // Carregar mais itens aqui
      if (this.nextPage) {
        this.PageUrl.emit(this.nextPage); // Emite o evento para informar a URL da próxima página para o componente pai
      }
    }
  }
}

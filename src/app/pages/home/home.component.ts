import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

interface IListCharacters {
  info: {};
  results: [];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listCharacters: IListCharacters[] = [];
  newlistCharacters: IListCharacters[] = []; // Lista de personagens filtrada
  pageUrl: string = ''; // URL da próxima página

  /**
   * Construtor
   *
   * @param {HomeService} _service - Serviço responsável pelas operações da página inicial
   * @param {Router} router - Objeto para navegação entre rotas
   */
  constructor(
    private _service: HomeService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getListCharacters('https://rickandmortyapi.com/api/character'); // Obtém a lista de personagens da API
  }

  getListCharacters(url: string) {
    this._service.getListCharacter(url)
      .subscribe((res: any | []): any => {
        let list: [] = res.results;
        this.listCharacters.push(...list); // Adiciona os personagens à lista existente
        this.newlistCharacters = this.listCharacters; // Define a lista filtrada como a lista completa inicialmente
        this.pageUrl = res.info.next; // Obtém a URL da próxima página
      });
  }

  onNextPage(nextPage: any) {

    this.getListCharacters(nextPage); // Obtém a próxima página de personagens
  }

  filterItems(query: string) {
    this.newlistCharacters = this.listCharacters.filter((item: any) =>
      item?.name.toLowerCase().includes(query.toLowerCase())
    ); // Filtra os personagens com base no nome digitado na pesquisa
  }
}

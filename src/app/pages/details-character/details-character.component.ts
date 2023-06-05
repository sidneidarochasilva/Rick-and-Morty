import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICharacter } from './../../interface/ICharacter';



@Component({
  selector: 'app-details-character',
  templateUrl: './details-character.component.html',
  styleUrls: ['./details-character.component.css']
})
export class DetailsCharacterComponent implements OnInit {
  character: ICharacter | any; // Personagem detalhado

  constructor(
    private route: ActivatedRoute, // Ativador de rota para acessar parâmetros da rota atual
    private router: Router // Objeto para navegação entre rotas
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.data) {
        this.character = JSON.parse(params.data); // Obtém os dados do personagem a partir dos parâmetros da rota
      }
    });
  }

  redirect() {
    this.router.navigate(['/']); // Redireciona para a rota '/'
  }
}

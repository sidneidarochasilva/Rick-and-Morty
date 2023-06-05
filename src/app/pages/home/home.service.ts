/**
 * Este service é responsável por obter a lista de episodios .
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HomeService {

  /**
   * Construtor
   *
   * @param {HttpClient} _httpClient - Client HTTP para fazer requisições
   */
  constructor(
    private _httpClient: HttpClient
  ) {}


  /**
   * Obtém a lista de personagens
   *
   * @param {string} url - url 
   * @returns {Observable<any>} - Observável 
   */
  getListCharacter(url: string): Observable<any> {
    return this._httpClient.get(url).pipe(
      tap((res) => {
        return res;
      })
    );
  }
}

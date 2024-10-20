import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  readonly #httpClient: HttpClient = inject(HttpClient);

  private apiUrl = 'http://localhost:8085/search/by-query'; // Backend URL

  constructor() {
    this.handleError = this.handleError.bind(this);
  }

  protected handleError(internalError: Error | string): Observable<Error | string> {
    return throwError(() => new Error(internalError.toString()));
  }

  searchText(input: string, query: string): Observable<any> {
    const requestBody = {
      input: input,
      query: query
    };
    return this.#httpClient.post<any>(this.apiUrl, requestBody);
  }
}

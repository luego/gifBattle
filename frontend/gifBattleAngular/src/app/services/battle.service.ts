import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gif } from '../models/gif';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  create(model: Gif): Observable<Gif> {
    return this.http
      .post<Gif>(`${this.api}/api/battle/create`, model)
      .pipe(catchError(this.handleError<Gif>('api/battle/create')));
  }

  versus(): Observable<Gif[]> {
    return this.http
      .get<Gif[]>(`${this.api}/api/battle/versus`)
      .pipe(catchError(this.handleError<Gif[]>('api/battle/versus')));
  }

  vote(id: string) {
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json; charset=utf-8');
    return this.http
      .post<Gif>(`${this.api}/api/battle/vote`, { id }, { headers: header })
      .pipe(catchError(this.handleError<Gif>('api/battle/vote')));
  }

  leaderBoard(): Observable<Gif[]> {
    return this.http
      .get<Gif[]>(`${this.api}/api/battle/leaderboard`)
      .pipe(catchError(this.handleError<Gif[]>('api/battle/leaderboard')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    console.error(message);
    //this.messageService.add(`PunkbeerapiService: ${message}`);
  }
}

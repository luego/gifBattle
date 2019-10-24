import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Gif } from '../models/gif';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGif(): Observable<Gif> {
    return this.http.get<Gif>(`${this.api}/Giphy/random`);
  }
}

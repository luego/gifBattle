import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GifGiphy } from '../models/gif';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGif(): Observable<GifGiphy> {
    return this.http.get<GifGiphy>(`${this.api}/api/giphy/random`);
  }
}

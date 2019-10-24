import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Gif } from "../models/gif";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BattleService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  create(model: Gif): Observable<Gif> {
    return this.http.post<Gif>(`${this.api}/`, model);
  }
}

import { Component, OnInit } from '@angular/core';
import { BattleService } from '../services/battle.service';
import { Observable } from 'rxjs';
import { Gif } from '../models/gif';

@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.css']
})
export class VersusComponent implements OnInit {
  constructor(private http: BattleService) {}

  gifs$: Observable<Gif[]>;

  ngOnInit() {
    this.loadVersus();
  }

  loadVersus() {
    this.gifs$ = this.http.versus();
  }

  vote(id: string) {
    this.http.vote(id).subscribe(() => this.loadVersus());
  }
}

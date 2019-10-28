import { Component, OnInit } from '@angular/core';
import { BattleService } from '../services/battle.service';
import { Observable } from 'rxjs';
import { Gif } from '../models/gif';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  gifs$: Observable<Gif[]>;

  constructor(private http: BattleService) {}

  ngOnInit() {
    this.loadGifs();
  }

  loadGifs() {
    this.gifs$ = this.http.leaderBoard();
  }
}

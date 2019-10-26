import { Component, OnInit } from '@angular/core';
import { BattleService } from 'src/app/services/battle.service';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public data: any = {
    title: '',
    url: ''
  };
  constructor(
    private http_battle: BattleService,
    private http_giphy: GiphyService
  ) {}

  ngOnInit() {
    this.http_giphy.getGif().subscribe(gif => {
      this.data.url = gif.images.original.url;
      this.data.title = gif.title;
    });
  }

  send(): void {}
}

import { Component, OnInit } from '@angular/core';
import { BattleService } from 'src/app/services/battle.service';
import { GiphyService } from '../services/giphy.service';
import { Gif } from '../models/gif';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public data: any = {
    title: '',
    url: '',
    caption: ''
  };
  constructor(
    private http_battle: BattleService,
    private http_giphy: GiphyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadRandomGif();
  }

  loadRandomGif() {
    this.http_giphy.getGif().subscribe(gif => {
      this.data.url = gif.images.original.url;
      this.data.title = gif.title;
    });
  }

  send(): void {
    const gifObj: Gif = {
      url: this.data.url,
      caption: this.data.caption,
      vote: 0,
      id: ''
    };
    this.http_battle.create(gifObj).subscribe(
      x => {
        this.data = {
          title: '',
          url: '',
          caption: ''
        };
        this.router.navigate(['/versus']);
      },
      error => {
        console.error(error);
      }
    );
  }
}

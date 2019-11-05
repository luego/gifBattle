import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Gif } from 'src/app/models/gif';

@Component({
  selector: 'app-gifcard',
  templateUrl: './gifcard.component.html',
  styleUrls: ['./gifcard.component.css']
})
export class GifcardComponent implements OnInit {
  @Input() data: Gif;
  @Output() doClickEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  doClick(id: string) {
    this.doClickEvent.emit(id);
  }
}

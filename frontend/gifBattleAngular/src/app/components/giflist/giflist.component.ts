import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { Gif } from 'src/app/models/gif';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-giflist',
  templateUrl: './giflist.component.html',
  styleUrls: ['./giflist.component.css']
})
export class GiflistComponent implements OnInit {
  @Input() data: Gif[];

  constructor() {}

  ngOnInit() {}
}

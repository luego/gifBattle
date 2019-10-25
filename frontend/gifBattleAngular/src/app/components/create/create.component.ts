import { Component, OnInit } from '@angular/core';
import { BattleService } from 'src/app/services/battle.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private http: BattleService) {}

  ngOnInit() {}
}

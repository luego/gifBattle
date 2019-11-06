import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { GifcardComponent } from './gifcard/gifcard.component';
import { GiflistComponent } from './giflist/giflist.component';

@NgModule({
  declarations: [GifcardComponent, GiflistComponent],
  exports: [GifcardComponent, GiflistComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatListModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}

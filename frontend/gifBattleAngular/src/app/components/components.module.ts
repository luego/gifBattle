import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GifcardComponent } from './gifcard/gifcard.component';

@NgModule({
  declarations: [GifcardComponent],
  exports: [GifcardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}

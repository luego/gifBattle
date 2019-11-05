import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UiModule, ComponentsModule],
  exports: [UiModule, ComponentsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}

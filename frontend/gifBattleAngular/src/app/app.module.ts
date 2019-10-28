import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { BattleService } from './services/battle.service';
import { HomeComponent } from './home/home.component';
import { VersusComponent } from './versus/versus.component';

@NgModule({
  declarations: [AppComponent, CreateComponent, HomeComponent, VersusComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [BattleService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { BattleService } from './services/battle.service';
import { HomeComponent } from './home/home.component';
import { VersusComponent } from './versus/versus.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    VersusComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule
  ],
  providers: [BattleService],
  bootstrap: [AppComponent]
})
export class AppModule {}

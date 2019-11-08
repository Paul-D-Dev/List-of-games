import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';

import { MatToolbarModule } from '@angular/material/toolbar';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameCreatePageComponent } from './pages/game-create-page/game-create-page.component';
import { GamePsPageComponent } from './pages/game-ps-page/game-ps-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    NavBarComponent,
    GameListComponent,
    GameDetailsComponent,
    GameCreatePageComponent,
    GamePsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    MatToolbarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

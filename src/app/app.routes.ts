import { GamePsPageComponent } from './pages/game-ps-page/game-ps-page.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { Routes } from '@angular/router';
import { GameCreatePageComponent } from './pages/game-create-page/game-create-page.component';

export const ROUTES: Routes = [

    {path: 'instructions', component: InstructionsComponent},
    {path: 'create', component: GameCreatePageComponent},
    { path: 'games', component: GamePsPageComponent },
    { path: '', pathMatch: 'full', redirectTo: 'games' }
  ];

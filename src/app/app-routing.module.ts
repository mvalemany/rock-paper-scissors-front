import { MatchComponent } from 'src/app/pages/match/match.component';
import { HomeComponent } from 'src/app/pages/home//home.component';
import { GameComponent } from 'src/app/pages/game/game.component';
import { ScoresComponent } from 'src/app/pages/scores/scores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS } from 'src/app/components/constants/paths';

const routes: Routes = [
  { path: '',   redirectTo: `/${PATHS.HOME_PATH}`, pathMatch: 'full' },
  { path: PATHS.HOME_PATH, component: HomeComponent },
  { path: PATHS.GAME_PATH, component: GameComponent},
  { path: PATHS.SCORES_PATH, component: ScoresComponent},
  { path: PATHS.MATCH_PATH, component: MatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
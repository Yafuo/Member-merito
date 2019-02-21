import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MexGameComponent} from './mex-game/mex-game.component';

const routes: Routes = [
  {
    path: 'mex-blackjack/:gameType',
    component: MexGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/components/constants/paths';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  playLiteral = '▶ PLAY';
  scoresLiteral = '🏆 SCORES';

  constructor(
    private route: Router
  ) {}

  clickPlay = () => {
    this.route.navigateByUrl(`/${PATHS.GAME_PATH}`);
  }

  clickScores = () => {
    this.route.navigateByUrl(`/${PATHS.SCORES_PATH}`);
  }

}

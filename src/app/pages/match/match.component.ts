import { Match } from './models/match.model';
import { Weapon } from 'src/app/pages/game/models/weapon.model';
import { GameService } from 'src/app/pages/game/service/game.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTS } from 'src/app/components/constants/constants';
import { environment } from 'src/environments/environment';
import { PATHS } from 'src/app/components/constants/paths';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  humanWeapon: Weapon;
  result: string;
  match: Match;

  constructor(    
    private gameService: GameService,
    private httpService: HttpClient,
    private route: Router
  ) { }

  ngOnInit(): void {
    
    this.humanWeapon = this.getSelectedWeaponId();

    if(this.humanWeapon) {
      this.playMatch(this.humanWeapon.id);
    }
  }

  private playMatch(selectedWeaponId: number) {
    const data = {      
      weaponId: selectedWeaponId
    };
    this.httpService.post(`${environment.baseUrl}${CONSTANTS.PLAY_MATCH_URL}`, data)
      .subscribe((response: any) => {              
        const playerOneWeapon = this.gameService.getWeapon(response.playerOneMove.weapon.id);
        const playerTwoWeapon = this.gameService.getWeapon(response.playerTwoMove.weapon.id);
        this.match = response;
        this.match = {
          playerOne: response.playerOneMove.player,
          playerTwo: response.playerTwoMove.player,
          weaponPlayerOne: playerOneWeapon,
          weaponPlayerTwo: playerTwoWeapon,
          result: response.result
        }
      });
  }

  private getSelectedWeaponId() {
    const selectedWeapon = this.gameService.getSelectedWeapon();

    if (selectedWeapon === undefined) {
      this.route.navigateByUrl(`/${PATHS.GAME_PATH}`);
    }
    return selectedWeapon;
  }

  imageErrorHandler(event: any) {    
    event.target.src = CONSTANTS.DEFAULT_IMAGE;
 }
}

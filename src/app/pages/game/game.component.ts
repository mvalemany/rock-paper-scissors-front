import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GameService } from './service/game.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/app/components/constants/constants';
import { PATHS } from 'src/app/components/constants/paths';
import { Weapon } from './models/weapon.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {  
  weaponList: Weapon[];  

  constructor(
    private route: Router,
    private gameService: GameService,
    private httpService: HttpClient
  ) {}

  ngOnInit(): void {

    this.httpService.get(`${environment.baseUrl}${CONSTANTS.GET_WEAPONS_URL}`)
    .subscribe((response: any) => {      

      this.weaponList = response.weapons.map((weapon: Weapon)  => {
        return {
          id: weapon.id,
          name: weapon.name,
          image: `${CONSTANTS.IMAGE_PREFIX}${weapon.name}${CONSTANTS.IMAGE_SUFIX}`
        };
      });

      this.gameService.setWeaponList(this.weaponList);

    });

  }

  imageErrorHandler(event: any) {    
    event.target.src = CONSTANTS.DEFAULT_IMAGE;
 }

  chooseWeapon(id: number) {    
    this.gameService.setSelectedWeapon(id);
    this.route.navigateByUrl(PATHS.MATCH_PATH);
  }

}

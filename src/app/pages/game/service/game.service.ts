import { Injectable } from '@angular/core';
import { Weapon } from 'src/app/pages/game/models/weapon.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  isWeaponListInitialized = false;

  selectedWeapon: number;

  weaponList: Weapon[];

  constructor() { }

  getSelectedWeapon() {
    return this.getWeapon(this.selectedWeapon);
  }

  setSelectedWeapon(selectedWeapon: number) {
    this.selectedWeapon = selectedWeapon;
  }

  getWeaponList() {
    return this.weaponList;
  }

  setWeaponList(weaponList: any[]) {
    this.weaponList = weaponList;
  }

  getWeapon(id: number): any {
    let weapon;
    if (this.weaponList !== undefined) {
      weapon =  this.weaponList.find(weapon => weapon.id == id);
    }
    return weapon;
  }

}

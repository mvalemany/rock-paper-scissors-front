import { Weapon } from 'src/app/pages/game/models/weapon.model';

export interface Match { 
    playerOne: string,
    playerTwo: string,
    weaponPlayerOne: Weapon,
    weaponPlayerTwo: Weapon,
    result: string
}
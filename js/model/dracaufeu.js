// export {Dracaufeu} from "./dracaufeu.js";

//Pokemeon type Dracaufeu

//Pokemon types are 1 Fire, 2 Water, or 3 Grass

export class Dracaufeu {
  constructor() {
    this.maxhp = 360;
    this.hp = 360;
    this.pokeName = "Dracaufeu";
    this.pokurl="/assets/images/dracaufau.png"

    this.attack1 = "Lance_Flamme";
    this.attack2 = "Air_Slash";
    this.attack3 = "Griffe_de_Dragon";
    this.attack4 = "Sabre";
  }



  standardAttack(attackforce, attackprecision) {

    attackSuccess = attackprecision >= Math.random(); //= Boolean

    if (attackSuccess) {
        return attackforce+ Math.floor(Math.random()*10) //modifier plus tard si necessaire
    } else return 0;
  }

  attack1(targetpokemon) {
    attackName = "Lance_Flamme";
    //1 Fire, 2 Water, or 3 Grass
    attackprecision = 0.8;
    basicAttackValue = this.standardAttack(20,this.attackprecision )

    if (targetpokemon.hp > 0) {
      switch (targetpokemon.type) {
        case 1:
          echo("Attack totallement inefficace qui renforce l'ennemi!" )  
          return -0.5*basicAttackValue;
          break;
        case 2:
          echo ("Attack de bof");  
          return 1*basicAttackValue;
          break;
        case 3:
          echo ("Attack super efficace!");  
          return 2*basicAttackValue;
          break;
        default:
          console.log("attack error in switch");
      } //end switch

      return true;


    } else return false//endif

  } //end Attack


 attack2(targetpokemon) { 
    attackName = "Air_Slash";
    //1 Fire, 2 Water, or 3 Grass

    //1 Fire, 2 Water, or 3 Grass
    attackprecision = 0.9;
    basicAttackValue = this.standardAttack(20,this.attackprecision )

    if (targetpokemon.hp > 0) {
      switch (targetpokemon.type) {
        case 1:
          echo("Attack totallement inefficace qui renforce l'ennemi!" )  
          return -0.5*basicAttackValue;
          break;
        case 2:
          echo ("Attack de bof");  
          return 1*basicAttackValue;
          break;
        case 3:
          echo ("Attack super efficace!");  
          return 2*basicAttackValue;
          break;
        default:
          console.log("attack error in switch");
      } //end switch

      return true;


    } else return false//endif

  } //end Attack



 attack3(targetpokemon) {
     attackName = "Griffe_de_Dragon";
     //1 Fire, 2 Water, or 3 Grass

   //1 Fire, 2 Water, or 3 Grass
    attackprecision = 0.9;
    basicAttackValue = this.standardAttack(10,this.attackprecision )

    if (targetpokemon.hp > 0) {
      switch (targetpokemon.type) {
        case 1:
          echo("Attack totallement inefficace qui renforce l'ennemi!" )  
          return -0.5*basicAttackValue;
          break;
        case 2:
          echo ("Attack de bof");  
          return 1*basicAttackValue;
          break;
        case 3:
          echo ("Attack super efficace!");  
          return 2*basicAttackValue;
          break;
        default:
          console.log("attack error in switch");
      } //end switch

      return true;


    } else return false//endif

  } //end Attack


 attack4(targetpokemon) {
    attackName = "Sabre";

   //1 Fire, 2 Water, or 3 Grass
    attackprecision = 1.0;
    basicAttackValue = this.standardAttack(5,this.attackprecision )

    if (targetpokemon.hp > 0) {
      switch (targetpokemon.type) {
        case 1:
          echo("Attack totallement inefficace qui renforce l'ennemi!" )  
          return -0.5*basicAttackValue;
          break;
        case 2:
          echo ("Attack de bof");  
          return 1*basicAttackValue;
          break;
        case 3:
          echo ("Attack super efficace!");  
          return 2*basicAttackValue;
          break;
        default:
          echo ("attack error in switch");
      } //end switch

      return true;


    } else return false//endif

  } //end Attack



}

// export {Tortank} from "./tortank.js";

//Pokemon type Tortank

//Pokemon types are 1 Fire, 2 Water, or 3 Grass

export class Tortank {
  constructor() {
    maxhp = 360;
    hp = 360;
    pokeName = "Tortank";

    this.attack1 = "Surf";
    this.attack2 = "Croc";
    this.attack3 = "Poing_a_Glace";
    this.attack4 = "Canon_Flash";

  }


  standardAttack(attackforce, attackprecision) {

    attackSuccess = attackprecision >= Math.random(); //= Boolean

    if (attackSuccess) {
        return attackforce+ Math.floor(Math.random()*10) //modifier plus tard si necessaire
    } else return 0;
  }

  attack1(targetpokemon) {
    attackName = "Surf";
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
    attackName = "Croc";
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
     attackName = "Poing_a_Glace";
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
    attackName = "Canon_Flash";

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

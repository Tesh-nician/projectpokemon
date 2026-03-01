// export {Dracaufeu} from "./dracaufeu.js";

//Pokemeon type Dracaufeu

//Pokemon types are 1 Fire, 2 Water, or 3 Grass

export class Dracaufeu {
  constructor() {
    this.maxhp = 360;
    this.hp = 360;
    this.pokeName = "Dracaufeu";
    this.pokurl="/assets/images/dracaufau.png";
    this.type = 1;

    this.attack1name = "Lance_Flamme";
    this.attack2name = "Air_Slash";
    this.attack3name = "Griffe_de_Dragon";
    this.attack4name = "Sabre";
  }



  standardAttack(attackforce, attackprecision) {

    let attackSuccess = attackprecision >= Math.random(); //= Boolean

    if (attackSuccess) {
        return attackforce+ Math.floor(Math.random()*10) //modifier plus tard si necessaire
    } else return 0;
  }

  attack1(targetpokemon) {
    // attackName = "Lance_Flamme";
    //1 Fire, 2 Water, or 3 Grass
    let attackprecision = 0.8;
    let basicAttackValue = this.standardAttack(20,attackprecision )
    let messageContainer = document.querySelector(".battle-message-container");

    if (targetpokemon.hp > 0) {
      switch (targetpokemon.type) {
        case 1:
          /* Display result in the battle message container */          
          messageContainer.innerHTML += "<p>Attack totallement inefficace qui renforce l'ennemi!</p>";
          
          return -0.5*basicAttackValue;
          break;
        case 2:
          messageContainer.innerHTML += "<p>Attack de bof</p>"; 

          return 1*basicAttackValue;
          break;
        case 3:
          messageContainer.innerHTML += "<p>Attack super efficace!</p>";
          
          return 2*basicAttackValue;
          break;
        default:
          console.log("attack error in switch");
      } //end switch

      return true;


    } else return false//endif

  } //end Attack


 attack2(targetpokemon) { 
    let attackName = "Air_Slash";
    //1 Fire, 2 Water, or 3 Grass

    //1 Fire, 2 Water, or 3 Grass
    let attackprecision = 0.9;
    let basicAttackValue = this.standardAttack(20,attackprecision )
    let messageContainer = document.querySelector(".battle-message-container");
    
    if (targetpokemon.hp > 0) {
      switch (targetpokemon.type) {
        case 1:
          messageContainer.innerHTML += "<p>Attack totallement inefficace qui renforce l'ennemi!</p>";
          return -0.5*basicAttackValue;
          break;
        case 2:
          messageContainer.innerHTML += "<p>Attack de bof</p>";  
          return 1*basicAttackValue;
          break;
        case 3:
          messageContainer.innerHTML += "<p>Attack super efficace!</p>";  
          return 2*basicAttackValue;
          break;
        default:
          messageContainer.innerHTML += "<p>attack error in switch</p>";
      } //end switch

      return true;


    } else return false//endif

  } //end Attack



 attack3(targetpokemon) {
     let attackName = "Griffe_de_Dragon";
     //1 Fire, 2 Water, or 3 Grass

   //1 Fire, 2 Water, or 3 Grass
    let attackprecision = 0.9;
    let basicAttackValue = this.standardAttack(10,attackprecision )
    let messageContainer = document.querySelector(".battle-message-container");

    if (targetpokemon.hp > 0) {
      switch (targetpokemon.type) {
        case 1:
          messageContainer.innerHTML += "<p>Attack totallement inefficace qui renforce l'ennemi!</p>";
          
          return -0.5*basicAttackValue;
          break;
        case 2:
          messageContainer.innerHTML += "<p>Attack de bof</p>";  
          return 1*basicAttackValue;
          break;
        case 3:
          messageContainer.innerHTML += "<p>Attack super efficace!</p>";  
          return 2*basicAttackValue;
          break;
        default:
          messageContainer.innerHTML += "<p>attack error in switch</p>";
      } //end switch

      return true;


    } else return false//endif

  } //end Attack


 attack4(targetpokemon) {
    let attackName = "Sabre";

   //1 Fire, 2 Water, or 3 Grass
    let attackprecision = 1.0;
    let basicAttackValue = this.standardAttack(5,attackprecision )
    let messageContainer = document.querySelector(".battle-message-container");

    if (targetpokemon.hp > 0) {
      switch (targetpokemon.type) {
        case 1:
          messageContainer.innerHTML += "<p>Attack totallement inefficace qui renforce l'ennemi!</p>";
          
          return -0.5*basicAttackValue;
          break;
        case 2:
          messageContainer.innerHTML += "<p>Attack de bof</p>";  
          return 1*basicAttackValue;
          break;
        case 3:
          messageContainer.innerHTML += "<p>Attack super efficace!</p>";  
          return 2*basicAttackValue;
          break;
        default:
          messageContainer.innerHTML += "<p>attack error in switch</p>";
      } //end switch

      return true;


    } else return false//endif

  } //end Attack



}

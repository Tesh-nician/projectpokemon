// export {Tortank} from "./tortank.js";

//Pokemon type Tortank

//Pokemon types are 1 Fire, 2 Water, or 3 Grass

export class Tortank {
  constructor() {
    this.maxhp = 360;
    this.hp = 360;
    this.pokeName = "Tortank";
    this.pokurl="/assets/images/tortank.png";
    this.type = 3;

    this.attack1name = "Surf";
    this.attack2name = "Croc";
    this.attack3name = "Poing_a_Glace";
    this.attack4name = "Canon_Flash";

  }


  standardAttack(attackforce, attackprecision) {

    let attackSuccess = attackprecision >= Math.random(); //= Boolean

    if (attackSuccess) {
        return attackforce+ Math.floor(Math.random()*10) //modifier plus tard si necessaire
    } else return 0;
  }

  attack1(targetpokemon) {
    letattackName = "Surf";
    //1 Fire, 2 Water, or 3 Grass
    let attackprecision = 0.8;
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


 attack2(targetpokemon) { 
    let attackName = "Croc";
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
     let attackName = "Poing_a_Glace";
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
    let attackName = "Canon_Flash";

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

/*let monNombre = 4
let maChaine = 'Bonjour ! :-)'
let monBoolean = false
let sansValeur
console.log(monNombre,maChaine,monBoolean,sansValeur)*/

/*let Oui = prompt('Ecris Bonjour !');
if (Oui == 'Bonjour') 
{
   alert('Bonjour à toi ! ');    
}
else if (Oui == 'Tu vas bien ?'){
    alert('Bien et toi ?')
}
else{ 
    alert("Désolé, je n'ai pas compris")
}*/

/*let Oui = prompt('Ecris Bonjour !');
if (Oui == 'Bonjour'){
    alert ('Bonjour ! Ca va ?')

    
let Non = prompt ('')
 if (Non == 'Oui'){
   
    alert ('Je suis content pour toi...')
}
}
else{
    alert("Désolé, il faut que je file")
}*/

/*let a = prompt ('Ecris Bonjour');
if (a == 'Bonjour'){
    alert ('Bonjour !')
}

let b = prompt ('Comment vas tu ?')
if (b == 'bien'){
    alert('Avec cette neige, ça fait plaisir !')  
}
else if (b == 'pas bien'){
    alert('Ok, on se calme et on commence pas à jouer les dépressif...')
}    
else{
    alert("Désolé, mais je suis pas la pour que tu raconte ta vie.")
}
let c = prompt ('Quelle est ta saison préférée ? ')
if (c == 'hiver' ) {
    alert('Bon choix tu préfére la saison des plaids et des chocolats chauds')
}
else if(c == "printemps"){
    alert('Ah, le printemps, la saison des amours, Dommage que tu soit encore célibataire...' )
    }
    else if(c == "automne" ){
        alert('Tu dois te la jouer pseudo artiste à faire des selfies avec les couleurs automnales')
    }
    else{
        alert('Si tu réponds été tu dois être complètement maso')    
    }

let d = prompt('Aimes-tu les animaux ?')
if (d == 'oui'){
    alert('Cool tu est à mon avis une personne équilibrée')
}
else if (d =='non'){
    alert('Je préfere te prévenir je viens de demander à ce que tu te fasse soigner')
}
else{
    alert('Les indécis ont pas leur place ici. Alors OUI ou OUI ?')
}

let e = prompt('Si tu as répondu Oui, tu est team chiens ou team chats ?')
if (e == 'chiens'){
    alert('En même temps comment ne pas craquer...')
}
else if (e =='chats'){
    alert('tu aimes bien te compliquer la vie pour rien visiblement')
}
else{
    alert('Les rongeurs et les lézards sont cool aussi on fait pas de discrimination ici')
}

let f = prompt('Quelle est ta série préférée ?')
if (f == 'La servante écarlate'){
    alert('Très bon choix, vraiment tu as du goût')
}
else if (f =='Supernatural'){
    alert('On sait que tu regarde pas la série pour le scénario, mais bien pour Sam et Dean (en même temps meilleur duo et meilleure série tu as raison!)')
}
else{
    alert('Si tu as pas répondu la Servante écarlate ou Supernatural je te juge fort mais alors vraiment trés fort...')
}*/

/*for ( let number = 0; number <= 199; number++ ) {
    
    if ( number % 15 === 0 ) {
        console.log("FizzBuzz")
  }
else if ( number % 5 === 0) {
    console.log ('Buzz');
  }
  else if (number % 3 === 0){
    console.log ('Fizz')
  }
  else{
    console.log (number)
  }
}*/

/*let jours = ["lun", "007","mer", "jeu", "ven", "sam", "BUG"];
let a = jours.pop();
let newLength = jours.push("dim");
jours [1]= 'mar' 
console.log(jours [2])
console.log(jours)*/


/*let annuaire = {
    contact: {
        patricia: "06 66 66 66 66",
        david: "07 77 77 77 77",
    }    
}
let téléphone = prompt ('Saisi patricia et/ou david')
console.log(annuaire.contact[téléphone]);*/



/*function répertoireTel() {
    let annuaire = {
      'Damien': '0788995533',
      'Salem': '0655112277',
      'Daiquiri': '0745698725',
      'Tymora': '0658997625'
    };
  
    let fonction;
  
    do {
      console.log("Entrez la lettre indiquée selon ce que vous souhaitez faire ('r' pour rechercher un contact, 'l' pour afficher la liste des contacts, 'a' pour ajouter un contact dans l'annuaire, 's' pour supprimer un contact dans l'annuaire, 'q' pour quitter) :");
      fonction = prompt();
  
      switch (fonction) {
        case 'r':
          let nom = '';
          console.log("Entrez le nom du contact que vous recherchez :");
          nom = prompt();
          if (annuaire[nom]) {
            alert("Nous avons trouvé un contact correspondant  " + nom + " : " + annuaire[nom]);
          } else {
            alert("Désolé, nous ne parvenons pas à trouver le contact demandé ");
          }
          break;
  
        case 'l':
          console.log("contacts enregistrés :");
          for (let nom in annuaire) {
            console.log(nom + " : " + annuaire[nom]);
          }
          break;
  
        case 'a':
          let NouveauContact = '';
          let NouveauNuméro = '';
          console.log("Entrez le nom du contact que vous souhaitez enregistrer :");
          NouveauContact = prompt();
          console.log("Entrez le numéro de téléphone du contact :");
          NouveauNuméro = prompt();
          annuaire[NouveauContact] = NouveauNuméro;
          alert("Le contact à bien été enregistré.");
          break;
  
        case 's':
          let supprimercontact = '';
          console.log("Entrez le nom du contact que vous souhaitez supprimer:");
          supprimercontact = prompt();
          if (annuaire[supprimercontact]) {
            delete annuaire[supprimercontact];
            alert("Le contact à bien été supprimé.");
          } else {
            alert("Désolé, nous ne parvenons pas à trouver le contact demandé.");
          }
          break;
  
        case 'q':
          alert("A bientôt");
          break;
  
        default:
          alert("Nous ne parvenons pas à comprendre votre demande.");
      }
    } while (fonction !== 'q');
  }
  
  répertoireTel();  */

/*let éléments = document.getElementsByClassName ('spoiler')*/

/*let elements = document.getElementById ('premier')
elements.style.backgroundColor = 'red'

let element = document.getElementById ('second')
element.addEventListener('click', function () { element.style.backgroundColor = 'yellow'
  })*/

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    buttons[i].parentElement.style.backgroundColor = 'red';
  }
}


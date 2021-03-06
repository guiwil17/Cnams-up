import Element from './Element';

class ArbreBinaire {
    //constructeur de la classe 
    constructor(racine, equipe, manche, point) {
        this.racine = new Element(racine, equipe, manche, point);
     }
     
     //Permet d'ajouter un élément à l'arbre binaire
     ajouter(valeur, equipe, manche, point){
         if(this.racine === null){
             this.racine = new Element(valeur, equipe, manche, point)
         }
         else{
             this.racine.ajouter(valeur, equipe, manche, point)
         }
     }
     //permet d'afficher le graphe dans la console
     afficher(){
         this.racine.afficher()
     }

     //Permet de récupérer la hauteur de l'arbre
     getHauteur(){
        var hauteur;
         if(this.racine === null){
             hauteur = 0;
         }
         else{
             hauteur = this.racine.hauteur;
         }
         return hauteur
     }

     //Permet de récupérer la taille de l'arbre
     getTaille(){
         var taille;
         if(this.racine === null){
             taille = 0;
         }
         else{
             taille = this.racine.taille()
         }
         return taille;
     }

     //Récupère l'élement minimum
     getMinimum(){
      return this.racine.minimum()
     }
//Récupère l'élement maximum
     getMaximum(){
         return this.racine.maximum();
     }
}

//Phase de test de l'arbre
/*
r = new ArbreBinaire(6, "équipe 1", 1)
r.ajouter(18, "équipe 2", 1)
r.ajouter(2, "équipe 2", 2)
r.ajouter(5, "équipe 1", 2)
r.ajouter(4, "équipe 1", 3)
r.ajouter(8, "équipe 2", 3)
*/
//r.afficher()
/*
const inorder = (racine) => {
        
    if(racine.valeur === null ){
       
    //return null if the root node given is empty
    console.log("la")
    return null;
    }
    else{       

        console.log(racine.valeur);
        console.log(racine.equipe);
        console.log(racine.manche);
        if(racine.filsGauche !== null ){
            console.log("gauche" + racine.valeur)
            inorder(racine.filsGauche);
        }
        if(racine.filsDroit !== null){
            console.log("droit")
            inorder(racine.filsDroit);
        }
       
    }
  
}

inorder(r.racine);
*/
export default ArbreBinaire;
import Noeud from './Noeud';

class File {
    //Représente le 1er et le dernier maillon de la file ainsi que la longeure de celle-ci 
    longueur;
    debut;
    fin;

    //Constructeur de la classe 
    constructor() {
        this.longueur = 0;
        this.debut = null;
        this.fin = null
     }

     //Ajoute un élément à la file
     enfiler(valeur){
         if(this.longueur === 0){
             this.debut = this.fin = new Noeud(valeur)
         }
         else{
             this.fin = new Noeud(valeur, this.fin);
            this.fin.precedent.suivant = this.fin;
         }
        this.longueur++;
     }

    //supprime un élément de la file
     defiler(){
         if(this.longueur > 0){
             var valeur = this.debut.valeur;
             if(this.longueur > 1){
                 this.debut = this.debut.suivant;
                 this.debut.precedent = null;
             }
             else{
                 this.debut = this.fin = null
             }
             this.longueur = this.longueur - 1;             
         }
         return valeur;
     }

     //vérfie si la file est vide
     estVide(){
         return this.longueur === 0;
     }

     //Permet un affichage console de la file
    Afficher(){
        var ch = "\n Etat de la file:\n"
        var maillon = this.debut        
        while( maillon !== null){
            ch = ch + String(maillon.valeur) + " ";
            console.log(maillon.valeur)
            maillon = maillon.suivant
        }
        return ch;
    }
}

export default File;
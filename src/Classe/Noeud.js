class Noeud{
  

    constructor(valeur, precedent=null, suivant=null){
        this.valeur = valeur;
        this.suivant = suivant;
        this.precedent = precedent;
    }
}

export default Noeud;
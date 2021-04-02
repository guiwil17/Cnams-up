class Element {
    //Constructeur d'un élement de l'arbre
    // On stock l'équipe, les points, le numéro de manche, le fils droit, le fils gauche et la valeur
    constructor(valeur, equipe, manche, point){
        this.valeur = valeur;
        this.equipe = equipe;
        this.point = point;
        this.manche = manche;
        this.filsDroit = null;
        this.filsGauche = null;
    }

    //Permet d'ajouter un élément à l'arbre
    ajouter(valeur, equipe, manche, point){
        if(equipe === "equipe 1"){
            if(this.filsGauche === null){
                this.filsGauche = new Element(valeur, equipe, manche, point);
            }
            else{
                this.filsGauche.ajouter(valeur, equipe, manche, point);
            }
        }
        else if(equipe === "equipe 2"){
            if(this.filsDroit === null){
                this.filsDroit = new Element(valeur, equipe, manche, point)
            }
            else{
                this.filsDroit.ajouter(valeur, equipe, manche, point);
            }
        }    
    }

    //Permet l'affichage dans la console de l'élément
    afficher(level){
        
        level = level || 0;
        console.log(" ")
        console.log(this.valeur)
        console.log(this.equipe)
        console.log(this.manche)
        console.log(this)
        if(this.filsDroit){
            this.filsDroit.afficher(level + 1)
        }
        if(this.filsGauche){
            this.filsGauche.afficher(level + 1)
        }
    }

    //Permet de calculer la hauteur de l'arbre
    hauteur(){
        var gauche;
        var droit;
        if(this.filsGauche === null){
            gauche = 0
        }
        else{
            gauche =  this.filsGauche.hauteur()
        }
        if(this.filsDroit === null){
            droit = 0
        }
        else {
            droit = this.filsDroit.hauteur()
        }
        return 1 + Math.max(gauche, droit);
    }

    //Permet de calculer la taille de l'arbre
    taille(){
        var gauche;
        var droit;
        if(this.filsGauche === null){
            gauche = 0
        }
        else{
            gauche = this.filsGauche.taille()
        }
        if(this.filsDroit === null){
            droit = 0;
        }
        else{
            droit = this.filsDroit.taille()
        }

        return 1 + gauche + droit;
    }

    //Permet de calculer le minimum de l'arbre
    minimum(){
        var minimum;
        if(this.filsGauche === null){
            minimum = 0
        }
        else {
            minimum = this.filsDroit.minimum()
        }

        return minimum;
    }

    //Permet de calculer le maximum de l'arbre
    maximum(){
        var maximum;
        if(this.filsDroit === null){
            maximum = 0
        }
        else {
            maximum = this.filsGauche.maximum()
        }

        return maximum;
    }

}

export default Element;
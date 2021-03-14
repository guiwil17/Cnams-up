class Element {
    constructor(valeur, equipe, manche, point){
        this.valeur = valeur;
        this.equipe = equipe;
        this.point = point;
        this.manche = manche;
        this.filsDroit = null;
        this.filsGauche = null;
    }

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
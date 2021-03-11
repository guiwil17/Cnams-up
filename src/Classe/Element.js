class Element {
    constructor(valeur, equipe, manche){
        this.valeur = valeur;
        this.equipe = equipe;
        this.manche = manche;
        this.filsDroit = null;
        this.filsGauche = null;
    }

    ajouter(valeur, equipe, manche){
        if(valeur < this.valeur){
            if(this.filsGauche === null){
                this.filsGauche = new Element(valeur, equipe, manche);
            }
            else{
                this.filsGauche.ajouter(valeur, equipe, manche);
            }
        }
        else if(valeur > this.valeur){
            if(this.filsDroit === null){
                this.filsDroit = new Element(valeur, equipe, manche)
            }
            else{
                this.filsDroit.ajouter(valeur, equipe, manche);
            }
        }    
    }

    afficher(level){
        
        var level = level || 0;
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
        if(this.filsGauche === null){
            var gauche = 0
        }
        else{
            var gauche =  this.filsGauche.hauteur()
        }
        if(this.filsDroit === null){
            var droit = 0
        }
        else {
            var droit = this.filsDroit.hauteur()
        }
        return 1 + Math.max(gauche, droit);
    }

    taille(){
        if(this.filsGauche === null){
            var gauche = 0
        }
        else{
            var gauche = this.filsGauche.taille()
        }
        if(this.filsDroit === null){
            var droit = 0;
        }
        else{
            var droit = this.filsDroit.taille()
        }

        return 1 + gauche + droit;
    }

    minimum(){
        if(this.filsGauche === null){
            var minimum = 0
        }
        else {
            var minimum = this.filsDroit.minimum()
        }

        return minimum;
    }

    maximum(){
        if(this.filsDroit === null){
            var maximum = 0
        }
        else {
            var maximum = this.filsGauche.maximum()
        }

        return maximum;
    }

}

export default Element;
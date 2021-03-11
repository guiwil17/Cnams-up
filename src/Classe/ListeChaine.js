import Maillon from './Maillon';

  class ListeChaine {
    premier;
    constructor() {
        this.premier = null;
     } 

   Ajouter(nvValeur) {
        var nvTete = nvValeur;
	    nvTete.suivant = this.premier;
		this.premier = nvTete;
	}

    retirerPremiereOccurrence_Rec(l,v) {
		let retour = l;
		if(l != null) {		
			 if(l.valeur == v) {
				retour = l.suivant;
			}
			else {
				l.suivant = this.retirerPremiereOccurrence_Rec(l.suivant, v);
			}
		 }				
		return retour;
	}

    retirerPremiereOccurrence_R(v) {
		var c = this.premier;
		if(c != null ) {            
			let premier = this.retirerPremiereOccurrence_Rec(()=>{
                if (premier == undefined)
                {
                    return c;
                }
                else{
                    return premier;
                }
            },v);
		}
	}

	
    Melanger(){
      var liste = []
      var nouvelle = new ListeChaine();

      for (var j = 1; j <= this.Longueur(); j++){
        liste.push(j)
        
      }
     
      while(liste.length != 0){
        var alea  = Math.floor(Math.random()*liste.length);
        let taille = liste[alea];
        var c = this.premier;
        if(taille === 1){    
          let m = new Maillon(c.valeur,null);
          nouvelle.Ajouter(m)
          liste.splice(alea,1);
        }
        else{
          for (var i = 2; i <= taille; i++){
            
            c = c.suivant; 
           
          }
          let m = new Maillon(c.valeur,null);
            nouvelle.Ajouter(m)
            liste.splice(alea,1);
        }       
      }

      console.log(nouvelle.Longueur());
      nouvelle.Afficher();

    }
    Afficher() {
		let c = this.premier;
		console.log("[");
		while (c != null) {
			console.log(c);
			c = c.suivant;
			if (c != null)
            console.log(" ; ");
		}
		console.log("]");
	}

    Longueur() {
		let c = this.premier;
        
		let compte = 0;
		while (c != null) {
			compte++;
			c = c.suivant;
		}
		return compte;
	}
  }


  export default ListeChaine;

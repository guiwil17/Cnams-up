import {Howl} from 'howler';
import React from 'react';
import { useEffect } from 'react';
import accueil from '../../Sound/accueil.mp3'
import go from '../../Sound/go.mp3'

var s:any;
var s2:any;

const Audio = (props:any) => {
    const [first,setFirst] = React.useState(true)
    var sound = new Howl({
        src: [accueil],
        preload : true,
        volume: 2
          });
      var sound2 = new Howl({
        src: [go],
        preload : true,
        volume: 0.5
      });
    
    const play = () => {
        if(props.joue === true){
            console.log("la")
            sound.play()
           s = sound;
           sound2.play()
           s2 = sound2;
        }
        else if (first === false && props.joue === false){
            console.log("ici")
            s.stop()
            s2.stop()
        }
        else{
            setFirst(false)
        }
    }
        useEffect(()=>{
            play()
            console.log("ici")
        },[props.joue])
      return (
          <>
          </>
      )
  };
  
  export default Audio;
  
import React from "react";
import "./Emo.css"

function Emo(props) {
  const logEmo = (emo) => {
    if (!props.smell(emo)) return props.smell(emo);
  };

  return (
    <div >

      
      <h1>Answer Emotions</h1>
      <div class="emopawn">
      <button class="button" 
        onClick={() => {
          logEmo("Fear");
        }}
      >
        Fear
      </button>
      <button class="button"
        onClick={() => {
          logEmo("Anger");
        }}
      >
        Anger
      </button>
      <button class="button"
        onClick={() => {
          logEmo("Sadness");
        }}
      >
        Sadness
      </button>
      <button class="button"
        onClick={() => {
          logEmo("Joy");
        }}
      >
        Joy
      </button>
      <button class="button"
        onClick={() => {
          logEmo("Disgust");
        }}
      >
        Disgust
      </button>
      <button class="button"
        onClick={() => {
          logEmo("Surprise");
        }}
      >
        Surprise
      </button>
      <button class="button"
        onClick={() => {
          logEmo("Trust");
        }}
      >
        Trust
      </button>
      
</div>
      <br />


      <button class="navigation" onClick={props.prev}>Back</button>
      <button class="navigation" onClick={props.nextpage}>Next</button>
</div>

  );
}

export default Emo;

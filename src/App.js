import React, { useState } from "react";
import { CardGif } from "./components/CardGif";
import { SearchGif } from "./components/SearchGif";

export const App = () =>{

  const [termino, setTermino] = useState(['batman']);

  return (
    <>
      <h2>App de Gif</h2>
      <SearchGif setTermino={setTermino}/>
      <hr/>

      <ol>
        {
          termino.map(term=> 
            <CardGif 
              key={term} 
              termino={term} /> )
        }
      </ol>
      
      
    </>
  )
}

export const getGifs = async (termino) =>{
   const url =   `https://api.giphy.com/v1/gifs/search?q=${encodeURI(termino)}&limit=10&api_key=V4b2r1a1YkBQ38fE017r9fh13a3rDWNI`;
   const resp = await fetch(url);
   const {data} = await resp.json();

   const gifs = data.map (img => {
       return{
           id: img.id,
           title : img.title,
           url : img.images?.downsized_medium.url,
       }
   });

   return gifs;
}
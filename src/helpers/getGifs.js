export const getGifs = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=qUS9IiR5fCHxlcxWxfA12et9VbERpeDZ&q=${category}&limit=10`
    const resp = await fetch (url);
    const {data} = await resp.json();
    console.log(data)
  
     const gifs =  data.map( img =>({
 
       id:img.id,
       tittle: img.title,
       url: img.images.downsized_medium.url
 
     }));
  
      
         return gifs;
    }
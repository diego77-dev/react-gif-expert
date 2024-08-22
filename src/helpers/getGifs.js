

export const getGifs = async (category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BMQ6SfD06nVtkq63BBgO3GZF0WOLAHlX&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    
    return gifs;
}

export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    console.log('respuesta');
    // const resultado = await respuesta.json();
    

    // console.log(resultado);
    // console.log(process.env.API_URL);
    return await respuesta.json();
}

export async function getGuitarra(url) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    
    return await respuesta.json();
}

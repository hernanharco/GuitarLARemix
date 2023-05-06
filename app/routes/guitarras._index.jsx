import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/model/guitarras.server"
import ListadoGuitarras from "~/components/listado-guitarras";


export function meta() {
  return ([
    { charset: 'utf-8' },
    { title: 'GuitarLA - Tienda de Guitarras' },
    { description: 'GuitarLA - Nuestra colección de guitarras' }
  ]
  )
}

export async function loader() {
  const guitarras = await getGuitarras();
  // console.log(guitarras);
  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData();
  // console.log(guitarras);
  // console.log(guitarras);

  return (
    <ListadoGuitarras
      guitarras={guitarras}
    />
  )
}

export default Tienda
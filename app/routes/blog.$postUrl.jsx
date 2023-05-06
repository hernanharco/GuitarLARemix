
import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/model/post.server";
import { formatearFecha } from "~/utils/helpers";

export function meta({ data }) {
  if (!data) {
    return ([
      { title: `GuitarLA - Entrada no encontrada` },
      { description: `Guitarras, ventas de guitarras, entrada no encontrada` }
    ]
    )
  }

  return ([
    { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
    { description: `Guitarras, ventas de guitarras, entrada ${data.data[0].attributes.titulo}` }
  ]
  )
}

export async function loader({params}) {

    const { postUrl } = params;    
    // console.log(postUrl);
    const post = await  getPost(postUrl);

    if(post.data.length === 0 ){
      throw new Response('', {
        status: 404,
        statusText: ' Entrada no Encontrada'
      })
    }

    return post
    
}

export default function Post() {
  const post = useLoaderData();
  // console.log(post.data[0].attributes);
  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes;

  return (
    <article className="post mt-3">
      <img src={imagen.data.attributes.formats.medium.url}
        alt={`imagen blog ${titulo}`} className="imagen" />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className='texto'>{contenido}</p>                
      </div>
    </article>
  )
}

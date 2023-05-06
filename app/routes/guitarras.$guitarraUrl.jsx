
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "../model/guitarras.server";
import { useState } from "react";

export async function loader({ params }) {

  // console.log(request);
  // console.log(params);-> elegimos este
  const { guitarraUrl } = params;

  const guitarra = await getGuitarra(guitarraUrl);

  // console.log(guitarra);

  if (guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: ' Guitarra No Encontrada'
    })
  }

  return guitarra

}

export function meta({ data }) {
  if (!data) {
    return ([
      { title: `GuitarLA - Guitarra No encontrada` },
      { description: `Guitarras, ventas de guitarras, guitarra no encontrada` }
    ]
    )
  }

  return ([
    { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
    { description: `Guitarras, ventas de guitarras, guitarra ${data.data[0].attributes.nombre}` }
  ]
  )
}

function Guitarra() {
  
  const { agregarCarrito } = useOutletContext();

  const [cantidad, setCantidad] = useState(0);
  const guitarra = useLoaderData();
  // console.log(guitarra.data[0].attributes.nombre);
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

  const handleSubmit = (e) => {    
    e.preventDefault();

    if (cantidad < 1) {
      alert('Debes seleccionar una Cantidad')
      return
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    // console.log(guitarraSeleccionada);
    agregarCarrito(guitarraSeleccionada);
  }  

  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra${nombre}`} />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>

        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>

          <select
            onChange={e => setCantidad(+e.target.value)}
            id="cantidad"

          >
            <option value="">-- Selecciones ---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit"
            value='Agregar al Carrito' />
        </form>
      </div>
    </div>

  )
}

export default Guitarra
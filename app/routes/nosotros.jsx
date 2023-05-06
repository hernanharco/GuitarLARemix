
import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return ([
      { charset: 'utf-8' },
      { title: 'GuitarLA - Sobre Nosotros' },      
      { description: 'Venta de guitarras, blog de música'}
  ]
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
  
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Praesent ut est id velit interdum hendrerit ut sed nisi. Sed ac blandit lacus. Ut fermentum ex ac erat blandit, nec cursus orci posuere. Suspendisse sollicitudin venenatis nulla sit amet feugiat. Phasellus sit amet enim pulvinar, molestie nulla eget, feugiat velit. Mauris arcu purus, dictum vel ex sit amet, ultrices vehicula urna. Suspendisse rhoncus, odio quis eleifend mollis, libero mi convallis erat, vitae mollis mi ex nec mauris.
          </p>
          <p>
            Praesent ut est id velit interdum hendrerit ut sed nisi. Sed ac blandit lacus. Ut fermentum ex ac erat blandit, nec cursus orci posuere. Suspendisse sollicitudin venenatis nulla sit amet feugiat. Phasellus sit amet enim pulvinar, molestie nulla eget, feugiat velit. Mauris arcu purus, dictum vel ex sit amet, ultrices vehicula urna. Suspendisse rhoncus, odio quis eleifend mollis, libero mi convallis erat, vitae mollis mi ex nec mauris.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros


import Guitarra from './guitarras'

function ListadoGuitarras({guitarras}) {
    return (
        <>
            <h2 className="heading">Nuestra Colección</h2>

            {guitarras?.length && (
                <div className="guitarras-grid">
                    {guitarras.map(guitarra => (
                        <Guitarra
                            key={guitarra?.id}
                            guitarra={guitarra?.attributes}
                        // guitarra = { guitarra }
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default ListadoGuitarras
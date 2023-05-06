
import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/model/guitarras.server';
import { getPosts } from '~/model/post.server';
import { getCurso } from '~/model/curso.server';
import ListadoGuitarras from '~/components/listado-guitarras';
import ListadoPosts from '../components/listado-posts';
import Curso from '../components/curso';
import stylesGuitarras from '~/styles/guitarras.css';
import stylesPosts from '~/styles/blog.css';
import stylesCurso from '~/styles/curso.css';

export function meta() {

}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader(params) {

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  // const guitarras = await getGuitarras()
  // console.log(guitarras);

  // const posts = await getPosts()
  // console.log(posts);

  // console.log(curso);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }

}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  // console.log(guitarras);
  // console.log(posts);
  // console.log(curso);
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>

      < Curso 
        curso = {curso.attributes}
      />

      <section className='contenedor'>
        <ListadoPosts
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index;
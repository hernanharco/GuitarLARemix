
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../model/post.server"
import ListadoPosts from "../components/listado-posts";

export function meta() {
    return ([
        { title: 'GuitarLA - Nuestro Blog' },
        { description: 'GuitarLA - Blog de musica y ventas deguitarra' }
    ]
    )
}
export async function loader() {
    const posts = await getPosts();
    // console.log(posts);
    return posts.data;
}

function Blog() {
    const posts = useLoaderData();
    return (
        <ListadoPosts
            posts={posts}
        />

    )
}

export default Blog
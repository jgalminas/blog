import Link from 'next/link';
import Tags from './Tags.js';

export default function Article({ post }) {

    return (
        <Link href='/posts/[slug]' as={'/posts/' + post.slug}>
        <article className="related-posts__card">
            
            <Tags tags={post.tags}/>
            <h3> { post.title } </h3>

            <p className='related-posts__card__description'> { post.description } </p>

        </article>
        </Link>
    )
}
import Image from 'next/image';
import Link from 'next/link';
import Tags from './Tags.js';

export default function RelatedPost({ post, priority }) {

    return (
        <article className="related-post-card">
            
            <Image className='img' objectFit='cover' alt={post.alt} height={607.50} width={1080} src={post.img} priority={priority}/>

            <div className='text'>

                <Tags tags={post.tags}/>

                <Link href='/posts/[slug]' as={'/posts/' + post.slug}><h2> { post.title } </h2></Link>

                <p> { post.description } </p>

            </div>

        </article>
    )
}
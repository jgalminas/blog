import Image from 'next/image';
import Link from 'next/link';
import Tags from './Tags.js';

export default function BriefPost({ post }) {

    return (
        <article className="brief-post-card">

            <div className='text'>

                <Tags tags={post.tags}/>

                <Link href='/posts/[slug]' as={'/posts/' + post.slug}><h3> { post.title } </h3></Link>

                <p> { post.description } </p>

            </div>

        </article>
    )
}
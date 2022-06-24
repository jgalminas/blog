import Image from 'next/image';
import Link from 'next/link';
import Tags from './Tags';

export default function PostCard({ post, priority }) {

    return (
        <div className="post-card">
                        

            <Image className='img' objectFit='cover' height={607.50} width={1080} priority={priority} src={post.img}/>

            <div className='text'>

                <Tags tags={post.tags}/>

                <Link href='/posts/[slug]' as={'/posts/' + post.slug}><h2> { post.title } </h2></Link>

                <p> { post.description } </p>

            </div>

        </div>
    )
}
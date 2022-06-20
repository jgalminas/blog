import Image from 'next/image';
import Link from 'next/link';
import Tags from './Tags';

export default function PostCard({ post }) {

    return (
        <div className="flex col post-card">
                        

            <div className='img-wrapper'>
            <Image className='img' layout='responsive' objectFit='cover' height="70%" width="100%" priority="true" src={post.img}/>
            </div>


            <div className='text'>

                <Tags tags={post.tags}/>

                <Link href='/posts/[slug]' as={'/posts/' + post.slug}><h2> { post.title } </h2></Link>

                <p> { post.description } </p>

            </div>

        </div>
    )
}
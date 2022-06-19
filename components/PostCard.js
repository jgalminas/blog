import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ post }) {

    return (
        <div className="flex col post-card">
                        

            <div>
            <Image className='img' layout='responsive' height="70%" width="100%" priority="true" src={post.img}/>
            </div>


            <div className='text'>

                <div className='tags flex row gap-10'>
                    {post.tags.map((tag) => {
                        return <div key={tag}> { tag[0].toUpperCase() + tag.substring(1) } </div>
                    })}
                </div>

                <Link href='/posts/[slug]' as={'/posts/' + post.slug}><h2> { post.title } </h2></Link>

                <p> { post.description } </p>

            </div>

        </div>
    )
}
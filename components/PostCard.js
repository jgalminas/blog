import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ post }) {

    const tags = post.tags.split(',').map((tag) => {
        const trimmed = tag.trim();
        return trimmed[0].toUpperCase() + trimmed.substring(1); 
    });

    return (
        <div className="flex col post-card">
                        
            {/* <Link href='/posts/[slug]' as={'/posts/' + post.slug}>
                <Image className='img' layout='responsive' height="70%" width="100%" src={post.img}/>
            </Link> */}

            <div>
            <Image className='img' layout='responsive' height="70%" width="100%" priority="true" src={post.img}/>
            </div>


            <div className='text'>

                <div className='tags flex row gap-10'>
                    {tags.map((tag) => {
                        return <div key={tag}> { tag } </div>
                    })}
                </div>

                <Link href='/posts/[slug]' as={'/posts/' + post.slug}><h2> { post.title } </h2></Link>

                <p> { post.description } </p>

            </div>

        </div>
    )
}
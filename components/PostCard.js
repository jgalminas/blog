import { useRouter } from 'next/router';
import { useTheme } from './contexts/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ post }) {

    const router = useRouter();
    const { themeClass } = useTheme();

    const tags = post.tags.split(',').map((tag) => {
        const trimmed = tag.trim();
        return trimmed[0].toUpperCase() + trimmed.substring(1); 
    });

    return (
        <div className={themeClass + "flex col post-card"}>
       
            
            <Link href={`/posts/${post.slug}`}>
                <Image layout='responsive' height="70%" width="100%" src={post.img}/>
            </Link>

            <div className='text'>

                <div className='tags flex row gap-10'>
                    {tags.map((tag) => {
                        return <div key={tag}> { tag } </div>
                    })}
                </div>

                <Link href={`/posts/${post.slug}`}><h2> { post.title } </h2></Link>

                <p> { post.description } </p>

            </div>

        </div>
    )
}
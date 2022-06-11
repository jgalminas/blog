import { useRouter } from 'next/router';
import { useTheme } from './contexts/ThemeContext';
import Image from 'next/image';

export default function PostCard({ post }) {

    const router = useRouter();
    const { themeClass } = useTheme();

    return (
        <div className={themeClass + "flex col post-card"}>
       
            <Image layout='responsive' height="100%" width="100%" src="/asdd"/>

            <div className='text'>
                <h2> { post.title } </h2>
                <p> { post.description } </p>
            </div>

            <button onClick={() => router.push(`/posts/${post.slug}`)}>
                Read more
            </button>

        </div>
    )
}
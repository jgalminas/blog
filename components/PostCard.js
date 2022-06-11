import { useRouter } from 'next/router';
import { useTheme } from './contexts/ThemeContext';

export default function PostCard({ post }) {

    const router = useRouter();
    const { themeClass } = useTheme();

    return (
        <div className={themeClass + "flex col post-card"}>
            <div className='img'>

            </div>
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
import Head from 'next/head';
import { Fragment } from 'react/cjs/react.production.min';
import { getPostsByDate } from '../utils/mdxUtil.js';
import PostCard from '../components/PostCard.js';
import RelatedPost from '../components/RelatedPost.js';
import Newsletter from '../components/Newsletter.js';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ posts }) {

  return (
    <Fragment>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className='hero'>

        <h1 align="right"> Hi, my name is Justin. </h1>
        <h2> Welcome to my blog! Here I write about my experience in the software development space. </h2>

        <Link href="/about"> About me </Link>

      </div>

      <Newsletter/>



      <div className='posts'>

        <h2> Recently added </h2>

        {posts.map((post) => {
          return <RelatedPost key={post.slug} post={post}/>
        })}

      </div>


    </Fragment>

  )
}

export async function getStaticProps() {

  return {
    props: {
      posts: await getPostsByDate(6)
    }
  }
} 
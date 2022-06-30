import Head from 'next/head';
import { Fragment } from 'react';
import { getPostsByDate } from '../utils/mdxUtil.js';
import RelatedPost from '../components/RelatedPost.js';
import Newsletter from '../components/Newsletter.js';
import Link from 'next/link';

export default function Home({ posts }) {

  return (
    <Fragment>

      <Head>
        <title> {`Justas's Blog - Home`} </title>
        <meta name="description" content="The main page of the blog" />
        <link rel="icon" href="/logo.svg"/>
      </Head>


      <div className='hero'>

        <h1 align="right"> Hi, my name is Justas. </h1>
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
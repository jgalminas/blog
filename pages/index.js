import Head from 'next/head';
import { Fragment } from 'react';
import { getPostsByDate } from '../utils/mdxUtil.js';
import RelatedPost from '../components/RelatedPost.js';
import Newsletter from '../components/Newsletter.js';
import Link from 'next/link';
import Image from 'next/image.js';
import Hero from '../public/hero.svg';

export default function Home({ posts }) {

  return (
    <Fragment>

      <Head>
        <title> {`Justas's Blog - Home`} </title>
        <meta name="description" content="The main page of the blog" />
        <link rel="icon" href="/logo.svg"/>
        <meta name="google-site-verification" content="TRbT3ZNq6PzAJKnTKn5dsC_Sp18aZQMvOwLbCPgFhM0" />
      </Head>


      <div className='hero'>

        <div className='__text'>
          <h1> Hi, my name is Justas. </h1>
          <h2> Welcome to my blog! Here I write about my experience in the software development space. </h2>
          <Link href="/about"> About me </Link>
        </div>

        <div className='__img'>
          <Image src='/hero.svg' height="607.50" width="1080" priority/>
        </div>


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
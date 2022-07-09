import Head from 'next/head';
import { Fragment } from 'react';
import { getPostsByDate } from '../utils/mdxUtil.js';
import RelatedPost from '../components/RelatedPost.js';
import Newsletter from '../components/Newsletter.js';
import Link from 'next/link';
import Image from 'next/image.js';
import Hero from '../public/hero.svg';
import Arrow from '../public/arrow.svg';
import Mouse from '../public/mouse.svg';

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
          <h1> Learn Software Development With Me </h1>
          <h2> Welcome to my blog! Here I write about my experience in the software development space. </h2>

          <div className='__buttons'>
            <p className='__start-reading'> Start Reading <Mouse/> </p>
            <Link href="/about"><a className='__about-me'> About me <Arrow/> </a></Link>
          </div>

          <div className='__big-circle'></div>
          <div className='__medium-circle'></div>
          <div className='__small-circle'></div>

        </div>



      </div>

      <div className='posts'>

        <h2 className='__heading'> Recent Articles </h2>

        {posts.map((post) => {
          return <RelatedPost key={post.slug} post={post}/>
        })}

      </div>

      <Newsletter/>


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
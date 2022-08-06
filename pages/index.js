import Head from 'next/head';
import { Fragment } from 'react';
import { getPostsByDate } from '../utils/mdxUtil.js';
import Article from '../components/Article.js';
import Newsletter from '../components/Newsletter.js';
import Link from 'next/link';
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

        <div className='hero__text'>
          <h1 className=''> Learn Software Development With Me </h1>
          <h2> Welcome to my blog! Here I write about my experience in software development as I learn and discover new things. </h2>

          <div className='hero__text__buttons'>
            <p className='hero__text__buttons__start-reading'> Start Reading <Mouse/> </p>
            <Link href="/about"><a className='hero__text__buttons__about-me'> About me <Arrow/> </a></Link>
          </div>

          <div className='big-circle'></div>
          <div className='medium-circle'></div>
          <div className='small-circle'></div>

        </div>



      </div>

      <div className='posts'>

        <h2 className='__heading'> Recent Articles </h2>

        {posts.map((post) => {
          return <Article key={post.slug} post={post}/>
        })}

      <Link href="/articles"><a className='__all-button'> All Articles <Arrow/> </a></Link>

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
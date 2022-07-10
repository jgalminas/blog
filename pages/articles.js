import Head from 'next/head';
import { Fragment } from 'react';
import { getPostsByYear } from '../utils/mdxUtil';
import RelatedPost from '../components/RelatedPost.js';
import Newsletter from '../components/Newsletter.js';


export default function Articles({ posts }) {

  const years = Object.keys(posts).sort((y1, y2) => (parseInt(y1) < parseInt(y2)) ? 1 : -1);

  return (
    <Fragment>

      <Head>
        <title> {`Justas's Blog - Articles`} </title>
        <meta name="description" content="List of all articles on this blog" />
        <link rel="icon" href="/logo.svg" />
      </Head>


      <div className='all-articles'>

      <h1 className='__heading'> All articles </h1>

        {years.map((key) => {
          return (
            posts[key].map((post, index) => {
              return (
                <Fragment key={key + index}>
                {index === 0 ? <h2 key={key}> {key} </h2> : null}
                <RelatedPost key={post.slig} post={post}/>
                </Fragment>
              )
            })
          )
        })}
        
        <Newsletter/>

      </div>

    </Fragment>

  )
}

export async function getStaticProps() {
  
  return {
    props: {
      posts: await getPostsByYear()
    }
  }
}
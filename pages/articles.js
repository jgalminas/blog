import Head from 'next/head';
import { Fragment } from 'react';
import { getPostsByYear } from '../utils/mdxUtil';

import BriefPost from '../components/BriefPost';

export default function Articles({ posts }) {

  const years = Object.keys(posts).sort((y1, y2) => (parseInt(y1) < parseInt(y2)) ? 1 : -1);

  return (
    <Fragment>

      <Head>
        <title> {`Justas's Blog - Articles`} </title>
        <meta name="description" content="List of all articles on this blog" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <h1> All articles </h1>

      <div className='all-articles'>

        {years.map((key) => {
          return (
            posts[key].map((post, index) => {
              return (
                <Fragment key={key + index}>
                {index === 0 ? <h2 key={key}> {key} </h2> : null}
                <BriefPost key={post.slug} post={post}/>
                </Fragment>
              )
            })
          )
        })}
        
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
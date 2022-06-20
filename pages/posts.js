import Head from 'next/head';
import { Fragment } from 'react/cjs/react.production.min';
import Page from '../components/Page.js';
import { getRecentPosts } from '../utils/mdxUtil.js';
// import PostCard from '../components/PostCard.js';
// import RelatedPost from '../components/RelatedPost.js';

export default function Home({ posts }) {

    console.log(posts);

  return (
    <Fragment>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>

      <h2> all posts </h2>


      {/* <div className='posts'>

        <PostCard key={posts[0].slug} post={posts[0]} priority />


        {posts.slice(1, posts.length).map((post) => {
          return <RelatedPost key={post.slug} post={post}/>
        })}
        
      </div> */}

      </Page>
    </Fragment>

  )
}

export async function getServerSideProps() {

      return {
    props: {
      posts: await getRecentPosts()
    }
  }
}

// export async function getStaticProps() {
  
//   return {
//     props: {
//       posts: await getRecentPosts()
//     }
//   }
// }
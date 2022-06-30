import { Fragment } from 'react';
import Head from 'next/head';
import { getRelatedPosts, postFilePaths, POSTS_PATH } from '../../utils/mdxUtil.js';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { readFileSync } from 'fs';
import path from 'path';
import { getFormattedDate } from '../../utils/time.js';
import Image from 'next/image';
import RelatedPost from '../../components/RelatedPost.js';


import CodeBlock from '../../components/CodeBlock.js';
import WrappedImage from '../../components/WrappedImage.js';

const components = { CodeBlock, WrappedImage };

export default function Post({ content, relatedPosts, error }) {

    const frontmatter = content?.frontmatter;

    return (
        <Fragment>

        <Head>
          <title> {frontmatter?.title} </title>
          <meta name="description" content="Page containing article" />
          <link rel="icon" href="/logo.svg" />
        </Head>

        {content && !error ?
            <div className="post">

            <h1> {frontmatter.title} </h1>
            <p> {frontmatter.description} </p>
            <p> <strong> Published on { getFormattedDate(frontmatter.date) } </strong>  </p>

            <Image className='img' objectFit='cover' height="607.50" width="1080" src={frontmatter.img} priority/>


            <MDXRemote components={components} {...content}/>

            <h1> Related Posts </h1>

            <div className='related-posts'>
              {relatedPosts.map((post) => {
                  return <RelatedPost key={post.slug} post={post}></RelatedPost>
                })}
            </div>

            </div>
          : <h1 align="middle"> Error occured </h1>}

      </Fragment>
    )
}

export async function getStaticPaths() {
  
  const paths = postFilePaths
  .map((path) => path.replace(/\.mdx?$/, '')) // Remove file extensions for page paths
  .map((slug) => ({ params: { slug } })) // Map the path into the static paths object required by Next.js

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {

  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  let relatedPosts = null;
  let content = null;
  let error = false;

  try {
    const post = readFileSync(postFilePath);
    // Convert MDX to JSX
    content = await serialize(post , { parseFrontmatter: true });

    const { frontmatter } = content;
    relatedPosts = await getRelatedPosts(frontmatter.slug, frontmatter.tags);
  } catch (err) {
    error = true;
  }

  return {
    props: {
      content,
      relatedPosts,
      error
    },
  }
}
import Head from 'next/head';
import { Fragment } from 'react';
import Newsletter from '../components/Newsletter.js';

export default function About() {

  return (
    <Fragment>

      <Head>
        <title> {`Justas's Blog - About`} </title>
        <meta name="description" content="Page containing information about the blog" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <h1 className='about__heading'> About me </h1>

      <div className='about-content'>

      <div className='__card'>
        <p>
          Hello! My name is Justas and I am a computer science and software development student.
          I am passionate about software and continious self-improvement. As I work on various projects I tend to learn a lot of new information and sometimes
          it helps to write it down for future reference so I thought it would be a good idea to start a blog where I can summarise and store all of it.
          Who knows, others might find it useful as well!
        </p>
      </div>

      <div className='__card'>
        <p>
          Currently I am mostly interested in front-end web development so most of the content will include various JavaScript libraries and frameworks, however, I may
          also write about other topics such as databases, machine learning and more!
        </p>

        <p>
          If you have any questions feel free to contact me at <em className='highlight'> j.galminas@gmail.com </em>
        </p>
      </div>

      </div>

      <Newsletter/>

    </Fragment>

  )
}
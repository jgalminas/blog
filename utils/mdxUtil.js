import { readdirSync, createReadStream } from "fs";
import path from "path";
import * as readline from 'readline';
import matter from "gray-matter";


// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

export async function getMatterOnly(filePath) {

    const inter = readline.createInterface({
      input: createReadStream(filePath)
    });
  
    let lineNum = 0;
    let lines = "";
  
    for await (const line of inter) {
  
      if (lineNum < 2) {
        lines += line + '\n'
      }
  
      if (line.trim() === '---') {
        lineNum++;
      } else if (lineNum == 2) {
        lines += line;
        break;
      }
    }

    inter.close();

    const { data } = matter(lines);
  
      return data;
  }
  
  export async function getRelatedPosts(slug, tags) {

    const relatedPosts = [];

    //number of weighings that make up the recommendation score
    // currently date and tags
    const numOfWeighings = 2;

    const today = new Date();
    today.setUTCHours(0,0,0,0);

    for (const post in postFilePaths) {

      let tagScore = 0;
      let dateScore = 1 / numOfWeighings;

      const postData = await getMatterOnly('posts/' + postFilePaths[post]);
      
      // calculate tag weighing
      for (const item in postData.tags) {
        if (tags.includes(postData.tags[item])) {
          tagScore += (1 / numOfWeighings) / tags.length; 
        }

      }

      //calculate date weighing
      dateScore -= ((1 / numOfWeighings) / 365 ) * ((today - new Date(postData.date)) / (1000*60*60*24));

      //total score
      const score = tagScore + dateScore;

      if (slug !== postData.slug) {
        relatedPosts.push({...postData, score});
      }

  
    }

    // sort posts by score
    relatedPosts.sort((p1, p2) => (p1.score < p2.score) ? 1 : -1);

    //return the 3 most relevant posts
    return relatedPosts.slice(0, 3);

  }

  export async function getRecentPosts() {

    const posts = [];

    for (const post in postFilePaths) {
      
      posts.push(await getMatterOnly('posts/' + postFilePaths[post]));

    }

    // sort posts by date
    posts.sort((p1, p2) => (new Date(p1.date) < new Date(p2.date)) ? 1 : -1);
    
    return posts.slice(0, 6);
  }
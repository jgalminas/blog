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

    for (const post in postFilePaths) {

      const postData = await getMatterOnly('posts/' + postFilePaths[post]);
      for (const item in tags) {
        if (postData.tags.includes(tags[item]) && postData.slug !== slug) {
          relatedPosts.push(postData);
        }
      }
  
      if (relatedPosts.length == 3) {
        break;
      }
  
    }

    return relatedPosts;

  }
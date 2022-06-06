import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";

export function getPosts() {

    const files = readdirSync('posts');

    const posts = files.map((post) => {

        const fileData = readFileSync(`posts/${post}`, 'utf-8');
        const { data } = matter(fileData);

        return data;
    })
    
    return posts;
}

// export function getPost() {

//     const fileData = readFileSync(`posts/${post}`, 'utf-8');

//     return 
// }
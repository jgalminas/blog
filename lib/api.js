import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";

export async function getPosts() {

    try {
        const files = await readdir('posts');

        const posts = [];
    
        for (let file in files) {
    
            try {
                const fileData = await readFile(`posts/${files[file]}`, 'utf-8');
                const { data } = matter(fileData);
        
                posts.push(data);
            } catch (err) {
                console.log("Couldn't read file: " + err);
            }
    
        }

        return posts;


    } catch (err) {
        console.log("Couldn't read directory: " + files);
    }

}

export async function getPaths() {

    try {
        const dir = await readdir('posts');
        const paths = dir.map((path) => path.slice(0, -3));
    
        return paths;
    } catch (err) {
        console.log("Couldn't read directory: " + err);
    }

}

export async function getPost(slug) {

    try {
        const extension = slug.charAt(slug.length - 1) == "." ? "mdx" : ".mdx";
        const file = await readFile(`posts/${slug}${extension}`, 'utf-8');
    
        return file;
    } catch (err) {
        console.log("Couldn't read file: " + err);
    }

}
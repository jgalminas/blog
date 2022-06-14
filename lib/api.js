import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";

export function getPosts() {

    const files = readdirSync('./posts');

    const posts = files.map((post) => {

        const fileData = readFileSync(`./posts/${post}`, 'utf-8');
        const { data } = matter(fileData);

        return data;
    })
    
    return posts;
}

export function getPaths() {

    const dir = readdirSync('./posts');
    const paths = dir.map((path) => path.slice(0, -3));

    return paths;
}

export function getPost(slug) {

    const extension = ".mdx";

    const file = readFileSync(`./posts/${slug}${extension}`, 'utf-8');

    return file;
}
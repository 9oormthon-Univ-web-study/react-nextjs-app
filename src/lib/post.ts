import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');
// process.cwd() : 현재 실행되고 있는 디렉토리의 절대 경로
// `path.join()`으로 두 경로를 합쳤기 때문에 '/현재경로/posts'라는 경로가 담김

export function getSortedPostsData() {
    // '/posts' 파일 이름을 잡아주기
    const fileNames = fs.readdirSync(postDirectory);
    // posts경로 밑에 있는 파일들이 배열로 담김(동기 작업) ex) ['pre-rendering.md', 'ssg-ssr.md']

    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, ''); // fileName에서 '.md'를 제거해줌

        const fullPath = path.join(postDirectory, fileName); // '/현재경로/fileName' 형태의 경로
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);

        return {
            id,
            ...(matterResult.data as { data: string; title: string }),
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

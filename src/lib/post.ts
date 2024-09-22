import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'src', 'posts');
// process.cwd() : 현재 실행되고 있는 디렉토리의 절대 경로
// `path.join()`으로 두 경로를 합쳤기 때문에 '/현재경로/posts'라는 경로가 담김

export function getSortedPostsData() {
    // '/posts' 파일 이름을 잡아주기
    const fileNames = fs.readdirSync(postDirectory);
    // posts경로 밑에 있는 파일들이 배열로 담김(동기 작업) ex) ['pre-rendering.md', 'ssg-ssr.md']

    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, ''); // fileName에서 '.md'를 제거해줌

        const fullPath = path.join(postDirectory, fileName); // '/현재경로/fileName' 형태의 경로
        const fileContents = fs.readFileSync(fullPath, 'utf-8'); // 첫번째 인자의 파일을 인코딩하여 저장

        const matterResult = matter(fileContents); // 마크다운 파일의 내용을 파싱
        /**
         {
            data: {}, // 파싱된 프론트매터 데이터
            content: '', // 프론트매터를 제외한 파일의 본문 내용
            excerpt: '', // 발췌 내용 (설정된 경우)
            orig: '' // 원본 파일 내용
        }
            */

        return {
            id,
            ...(matterResult.data as { date: string; title: string }),
        };
    });

    // 정렬해서 return
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

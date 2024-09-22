import Head from 'next/head';
import homestyles from '../styles/Home.module.css';
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '@/lib/post';

export default function Home({ allPostData }: { allPostData: { date: string; title: string; id: string }[] }) {
    return (
        <>
            <Head>
                {/* 탭 이름 바꿔주는 부분 */}
                <title>고제성</title>
            </Head>
            <section className={homestyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>(This is a website)</p>
            </section>
            <section className={`${homestyles.headingMd} ${homestyles.padding1px}`}>
                <h2 className={homestyles.headingLg}>Blog</h2>
                <ul className={homestyles.headinglist}>
                    {allPostData.map(({ id, title, date }) => (
                        <li className={homestyles.listItem} key={id}>
                            <a>{title}</a>
                            <br />
                            <small className={homestyles.lightText}>{date}</small>
                        </li>
                    ))}
                </ul>
            </section>
            <div></div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostData = getSortedPostsData(); // md파일을 날짜별로 정렬해서 반환해줌
    return {
        props: {
            allPostData,
        },
    };
};

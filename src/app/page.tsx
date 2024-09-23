import { Metadata } from 'next';
import homestyles from '../styles/Home.module.css';
import { getSortedPostsData } from '@/lib/post';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '고제성',
};

export default async function Home() {
    const allPostData = await getSortedPostsData();

    return (
        <>
            <section className={homestyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>(This is a website)</p>
            </section>
            <section className={`${homestyles.headingMd} ${homestyles.padding1px}`}>
                <h2 className={homestyles.headingLg}>Blog</h2>
                <ul className={homestyles.headinglist}>
                    {allPostData.map(({ id, title, date }) => (
                        <li className={homestyles.listItem} key={id}>
                            <Link href={`posts/${id}`}>
                                <p>{title}</p>
                            </Link>
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

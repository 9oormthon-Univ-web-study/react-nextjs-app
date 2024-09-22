import Head from 'next/head';
import homestyles from '../styles/Home.module.css';

export default function Home() {
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
                <ul className={homestyles.headinglist}></ul>
            </section>
            <div></div>
        </>
    );
}

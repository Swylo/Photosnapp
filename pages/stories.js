import Head from 'next/head'
import StoriesHeader from '../components/StoriesHeader'
import StoriessGallery from '../components/StoriesGallery'

export default function stories() {
    return (
        <section>
            <Head>
                <title>Photosnap Stories</title>
                <meta name="description" content="Photosnap website made with nextJs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StoriesHeader />
            <StoriessGallery />
        </section>
    )
}
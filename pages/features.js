import Head from 'next/head'
import FeaturesHeader from '../components/FeaturesHeader'
import FeaturesMain from '../components/FeaturesMain'
import Beta from '../components/Beta'

export default function features() {
    return (
        <div>
            <Head>
                <title>Features</title>
                <meta name="description" content="Photosnap website made with nextJs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <FeaturesHeader />
            <FeaturesMain />
            <Beta />
        </div>
    )
}
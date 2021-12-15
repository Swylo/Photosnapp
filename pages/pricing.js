import Head from "next/head"
import Beta from "../components/Beta"
import PricingHeader from "../components/PricingHeader"
import PricingPlan from "../components/PricingPlan"
import Compare from "../components/Compare"

export default function pricing() {
    return (
        <div>
            <Head>
                <title>Pricing</title>
                <meta name="description" content="Photosnap website made with nextJs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PricingHeader />
            <PricingPlan />
            <Compare />
            <Beta />
        </div>
    )
}
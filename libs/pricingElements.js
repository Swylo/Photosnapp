const pricingPlanElements = [
    {
        title: "Basic",
        description: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
        price: 19,
        main: false
    },
    {
        title: "Pro",
        description: "More advanced features available. Recommended for photography veterans and professionals.",
        price: 39,
        main: true
    },
    {
        title: "Business",
        description: "Additional features available such as more detailed metrics. Recommended for business owners.",
        price: 99.00,
        main: false
    }
]

const pricingCompareElements = [
    {
        title: "Unlimited Story Posting",
        basic: true,
        pro: true,
        business: true
    },
    {
        title: "Unlimited Photo Upload",
        basic: true,
        pro: true,
        business: true
    },
    {
        title: "Embedding Custom Content",
        basic: false,
        pro: true,
        business: true
    },
    {
        title: "Customize Metadata",
        basic: false,
        pro: true,
        business: true
    },
    {
        title: "Advanced Metrics",
        basic: false,
        pro: false,
        business: true
    },
    {
        title: "Photo Downloads",
        basic: false,
        pro: false,
        business: true
    },
    {
        title: "Search Engine Indexing",
        basic: false,
        pro: false,
        business: true
    },
    {
        title: "Custom Analytics",
        basic: false,
        pro: false,
        business: true
    }
]
  
export { pricingPlanElements, pricingCompareElements };

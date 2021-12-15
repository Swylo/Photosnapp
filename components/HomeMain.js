import HomeMainItems from "./HomeMainItems";

function HomeMain({ homeMainElements }) {
    return (
        <div>
            {homeMainElements.map(element => (
                <HomeMainItems
                    title={element.title}
                    description={element.description}
                    btn={element.btn}
                    isMain={element.isMain}
                    isReversed={element.isReversed}
                    images={element.img}
                    key={element.id}
                />
            ))}
        </div>
    )
}

export default HomeMain;
import config from "/config.json";
import Header from "../src/components/header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import CSSReset from "../src/components/CSSReset"

function HomePage() {
    // const HomeStyles = { backgroundColor: "red" }

    return (
        <>
            <CSSReset />
            <div >
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>

    );

}

export default HomePage


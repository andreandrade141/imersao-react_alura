import React from "react";
import config from "/config.json";
import Header from "../src/components/header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import CSSReset from "../src/components/CSSReset"

function HomePage() {
    // const HomeStyles = { backgroundColor: "red" }
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    return (
        <>
            <div >
                <Menu valorDoFiltro={valorDoFiltro}
                    setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} >
                    Conteúdo
                </Timeline>
            </div>
        </>

    );

}

export default HomePage


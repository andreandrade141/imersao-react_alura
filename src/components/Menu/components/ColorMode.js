import React from "react"

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert("I need to be configured first!") }
});

export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode);

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}
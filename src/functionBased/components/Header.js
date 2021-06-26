import React from "react"

const Header = () => {
    const headerStyle = {
        fontSize: "6rem",
        fontWeight: "600",
        marginBottom: "2rem",
        lineHeight: "1em",
        color: "#ececec",
        textTransform: "lowercase",
        textAlign: "center",
    }
    return (
        <header style={headerStyle}>
            <h1 style={{
                fontSize: "3rem",
                fontWeight: "600",
                marginBottom: "2rem",
                lineHeight: "1em",
                color: "#ececec",                
                textAlign: "center",
                }}
            >Next Upgrades</h1>
        </header>
    )
}

export default Header
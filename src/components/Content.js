import React from 'react'

export const Content = (props) => {
    return (
        <section style={{
            backgroundColor: "yellow",
        }}>
            <h1>Ini Adalah COntent</h1>
            {props.children}
        </section>
    )
}

export default Content
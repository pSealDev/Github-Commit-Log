import react from "react"

export default function GridIntro(props){

    return(
        <>
            <header style={{ width:'75VW', margin:'auto'}}>
                <h1>Commit Feed</h1>
                <h2>Showing results for /{props.user}/{props.repo}</h2>
                <br />
            </header>
            <br />
            <div id="message"></div>
            <br />
        </>
    )
}
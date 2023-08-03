export default function Home() {
    return (
        <main className={"mt-24 md:mt-40 mx-10 sm:ml-20 md:ml-40 lg:ml-60 xl:ml-96 max-w-4xl"}>
            <h1 className={"font-bold text-7xl"}>Griffin Li</h1>

            <h2 className={"font-semibold text-2xl mt-10"}>Contact</h2>
            <a className={"block"} href={"mailto:griffin@griffinli.com"}>griffin@griffinli.com</a>
            <a className={"block"} href={"sms:griffin@griffinli.com"}>iMessage</a>
            <p>twitter.com/<a href={"https://twitter.com/griffinli_"}>griffinli_</a></p>
            <p>github.com/<a href={"https://github.com/griffinli"}>griffinli</a></p>

            <h2 className={"font-semibold text-2xl mt-10"}>About</h2>
            <p>{"I'm in 12th grade at "}<a href={"https://exeter.edu"}>Phillips Exeter Academy.</a></p>
            <p>{"I'm an intern at "}<a href={"https://www.beeper.com"}>Beeper</a>.</p>

            <h2 className={"font-semibold text-2xl mt-10"}>Projects</h2>
            <p>A <a href={"https://www.polar.cx"}>tech support chatbot</a> that finds answers from internet forums</p>
            <p>Various prototypes of a <a href={"https://demo.nternet.xyz"}>search engine</a></p>
        </main>
    )
}

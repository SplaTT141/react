import { TextList } from "../components/text-list/TextList";

export function Home() {
    const list = ['Pomodiras', 'Agurkas', 'Svogunas', 'Cesnakas', 'Bulve'];

    return (
        <main>
            <section className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                        <TextList />
                    </div>
                    <div className="col-12 mb-5 ms-3">
                        <ul>
                            {list.map(text => <li key={text}>{text}</li>)}
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 cl-lg-4 cl-xxl-3">
                        HOME PAGE
                    </div>
                </div>
            </section>
        </main>
    )
}
import { useState } from "react";
import { ServicesList } from "../components/services/ServicesList";

export function Services() {
    const [text, setText] = useState('');

    const [id, setId] = useState(5);
    const [list, setList] = useState([
        { id: 1, value: 'design' },
        { id: 2, value: 'development' },
        { id: 3, value: 'management' },
        { id: 4, value: 'ux' },
    ]);

    function handleClick() {
        // setList(currentList => currentList.concat(
        //     { id: id, value: 'aaaaaaaa' }
        // ));
        setList(currentList => [...currentList, { id: id, value: 'aaaaaaaa' }]);
        setId(n => n + 1);
    }

    function handleFormSubmit(e) {
        e.preventDefault();


    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-5">
                        <form onSubmit={handleFormSubmit} className="d-flex flex-column gap-3 form">
                            <label className="form-label" htmlFor="text">Message</label>
                            <input value={text} className="form-control" id="text" type="text" />
                            <button className="btn btn-primary" type="submit">Add</button>
                        </form>
                        <ServicesList services={[]} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <button onClick={handleClick} className="btn btn-primary">Prideti nauja paslauga</button>
                        <ServicesList services={list} />
                    </div>
                </div>
            </div>
        </main>
    );
}
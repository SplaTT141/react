import { useParams } from "react-router"

export function ServiceInner() {
    let {service} = useParams();

    return (
        <main>
            <div className="container">SERVICE INNER PAGE - {service}</div>
        </main>
    )
}
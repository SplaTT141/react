import { useParams } from "react-router"

export function Error404() {
    let {"*": splat} = useParams();

    return (
        <div className="container">
            ERROR PAGE - {splat}
        </div>
    )
}
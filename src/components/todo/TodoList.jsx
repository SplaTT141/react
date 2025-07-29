export function TodoList({list}) {
    return (
        <>
            <h2>Active tasks</h2>
            <ul className="ps-3">
                {
                    list.map(item => <li key={item.id}>{item.text}</li>)
                }
            </ul>
        </>
    )
}
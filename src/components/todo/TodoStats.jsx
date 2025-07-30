export function TodoStats({ activeCount, completedCount }) {
    return (
        <>
            <p>Completed tasks: {completedCount}</p>
            <p>Active tasks: {activeCount}</p>
            <h2>Task count: {activeCount + completedCount}</h2>
        </>
    )
}
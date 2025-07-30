import { TodoItem } from "./TodoItem";

export function TodoList({ list, modifyTaskCompletionFunc, modifyTaskTextFunc }) {
    if (list.length === 0) {
        return <p>Empty task list</p>;
    }

    return (
        <ul style={{paddingLeft: 0}}>
            {list.map(item => <TodoItem key={item.id} task={item} modifyTaskTextFunc={modifyTaskTextFunc} modifyTaskCompletionFunc={modifyTaskCompletionFunc} />)}
        </ul>
    )
}
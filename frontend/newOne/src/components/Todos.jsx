export function Todos({ todos }) {
    try {
        return (
            <div>
                {todos.map(function (todo) {
                    return (
                        <div key={todo.id}>
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                            <button>
                                {todo.completed ? "Completed" : "Mark as Complete"}
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    } catch (e) {
        console.error("An error occurred:" , e);
        return (
            <div>
                <p>Oops! Something went wrong.</p>
            </div>
        );
    }
}

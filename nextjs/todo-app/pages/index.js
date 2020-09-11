import React, {useState} from 'react'
import {useQuery, useMutation} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const GET_TODOS = gql`
query {
    todos {
        id
        description
        done
    }
}

`

const CREATE_TODO = gql`
  mutation CreateTodo($description: String!) {
    createTodo(description: $description) {
      id
      description
      done
    }
  }
`
const COMPLETE_TODO = gql`
  mutation CompleteTodo($id: ID!) {
    completeTodo(id: $id) {
      id
    }
  }
`

export default function Home() {
    const {loading, error, data, refetch} = useQuery(GET_TODOS);
    const [todo, setTodo] = useState("");
    const [createTodo] = useMutation(CREATE_TODO);
    const [completeTodo] = useMutation(COMPLETE_TODO)

    const saveTodo = async (e) => {
        e.preventDefault();
        await createTodo({variables: {description: todo}});
        refetch();
        setTodo("");

    }

    const onComplete = async (id) => {
        await completeTodo({variables: {id}});
        refetch();
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>ERROR :(</p>

    return (
        <div>
            <h1>My TODO list</h1>
            <form onSubmit={saveTodo}>
                <label>
                    New todo
                    <input onChange={e => setTodo(e.target.value)} value={todo} />
                </label>
                <button type="submit">Save</button>
            </form>
            {
                data.todos.map((todo) => (
                    <div key={todo.id}>
                        {todo.description}
                        <button
                            disabled={todo.done}
                            onClick={() => onComplete(todo.id)}
                        >
                            {todo.done ? "Done" : "Complete"}
                        </button>
                    </div>
                ))
            }

        </div>
    )
}

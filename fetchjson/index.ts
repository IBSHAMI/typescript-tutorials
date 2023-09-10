import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}


axios.get(url).then(response => {
    const data = response.data as Todo; // tell typescript that response.data is a Todo
    const id = data.id;
    const title = data.title;
    const completed = data.completed;
    logTodo (id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
}
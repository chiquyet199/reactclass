export const loadAllTodos = () => {
    return new Promise(async (resolve, reject) => {
        const response = await window.fetch('http://localhost:3000/todos');
        const data = await response.json();
        resolve(data)
    })
}

export const addNewTodo = name => {
    return new Promise((resolve, reject) => {
        window.fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                done: false,
            })
            }).then(res => {
            if(String(res.status)[0] !== '2'){
                reject(res.statusText)
                return;
            }
            resolve(name)
        })
    })
}
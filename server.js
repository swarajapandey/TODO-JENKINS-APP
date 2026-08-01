const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let todos = [
    { id: 1, task: 'Install Docker & Minikube' },
    { id: 2, task: 'Set up Jenkins Pipeline' }
];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const newTodo = { id: Date.now(), task: req.body.task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

if (require.main === module) {
    app.listen(PORT, () => console.log(`To-Do App running at http://localhost:${PORT}`));
}

module.exports = app;
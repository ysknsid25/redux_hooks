import React from "react";
import { Counter } from "./features/counter/Counter";
import { TaskList } from "./features/task/TaskList";
import { TaskInput } from "./features/task/TaskInput";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Counter />
                <TaskInput />
                <TaskList />
            </header>
        </div>
    );
}

export default App;

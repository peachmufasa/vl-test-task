import './_App.scss'
import TaskListPage from "./pages/taskList/TaskListPage.tsx";
import TaskCardPage from "./pages/taskCard/TaskCardPage.tsx";
import {useState} from "react";
import {Task} from "./data/Task.ts";
import TaskEditPage from "./pages/taskEdit/TaskEditPage.tsx";
import {data} from "./data/mockupData.ts";

function App() {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isEditRequired, setIsEditRequired] = useState<boolean>(false);
    const [tasks, setTasks] = useState<Task[]>(data);

    const updateTasks = (updatedTask: Task) => {
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.id === updatedTask.id) {
                    return updatedTask;
                }
                return task;
            });
        });
    };

    return (
        <div className='app'>
            <TaskListPage onSelectTask={setSelectedTask} selectedTask={selectedTask} tasks={tasks}/>
            {selectedTask && !isEditRequired && <TaskCardPage selectedTask={selectedTask} setSelectedTask={setSelectedTask} setIsEditRequired={setIsEditRequired} />}
            {isEditRequired && <TaskEditPage setIsEditRequired={setIsEditRequired} selectedTask={selectedTask} setSelectedTask={setSelectedTask} onUpdateTask={updateTasks} />}
        </div>
    )
}

export default App

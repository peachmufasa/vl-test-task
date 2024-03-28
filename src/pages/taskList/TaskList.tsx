import React from "react";
import TaskItem from "./TaskItem.tsx";
import {Task} from "../../data/Task.ts";

type TaskListPropTypes = {
    tasks: Task[];
    onSelectTask: React.Dispatch<React.SetStateAction<Task | null>>;
}
const TaskList: React.FunctionComponent<TaskListPropTypes> = ({tasks, onSelectTask}) => {

    return <ul className='task-list'>
        {tasks.map(task => <li key={task.id} className='task-item'><TaskItem onSelectTask={onSelectTask} task={task}/>
        </li>)}
    </ul>
}

export default TaskList;
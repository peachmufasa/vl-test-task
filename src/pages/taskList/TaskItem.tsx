import React from "react";
import {Task} from "../../data/Task.ts";

type TaskItemPropTypes = {
    task: Task;
    onSelectTask: React.Dispatch<React.SetStateAction<Task | null>>;
}
const TaskItem: React.FunctionComponent<TaskItemPropTypes> = ({task, onSelectTask }) => {
    const getTimeElapsed = (): string => {
        const now = new Date();
        const diff = Math.abs(now.getTime() - task.created.getTime());
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days >= 1) {
            return `${days} дней назад`;
        } else if (hours >= 1) {
            return `${hours} часов назад`;
        } else {
            return `${minutes} минут назад`;
        }
    };

    const handleClick = (task : Task) => {
        const taskCardRef: HTMLDivElement | null = document.querySelector('.task-card-page');
        taskCardRef?.scrollIntoView({ behavior: "smooth" });
        onSelectTask(task);
    };

    return <a onClick={() => handleClick(task)}>
    <h2>
        {task.title}
    </h2>
     <p>
         {`Создано: ${getTimeElapsed()}`}
     </p>
     <p>
         {`Приоритет: ${task.priority}`}
     </p>
     <p>
         {`Отметки: ${task.tags && task.tags.join(', ')}`}
     </p>
 </a>
}

export default TaskItem;
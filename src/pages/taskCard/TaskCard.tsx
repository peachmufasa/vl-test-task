import React from "react";
import {Task} from "../../data/Task.ts";

type TaskCardPropTypes = {
    task: Task | null;
}
const TaskCard: React.FunctionComponent<TaskCardPropTypes> = ({task}) => {

    const formatDate = (date: Date): string => {
        return new Intl.DateTimeFormat('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        }).format(date);
    };

    return <div className='task-card'>
        <div className='task-card__subsection'>
            <h3 className='subsection__header'>
                Название задачи
            </h3>
            <p className='subsection__content'>
                {task && task.title}
            </p>
        </div>
        <div className='task-card__subsection'>
            <h3 className='subsection__header'>
                Дата создания
            </h3>
            <p className='subsection__content'>
                {task && formatDate(task.created)}
            </p>
        </div>
        <div className='task-card__subsection'>
            <h3 className='subsection__header'>
                Приоритет
            </h3>
            <p className='subsection__content'>
                {task && task.priority}
            </p>
        </div>
        <div className='task-card__subsection'>
            <h3 className='subsection__header'>
                Отметки
            </h3>
            <p className='subsection__content'>
                {task && task.tags && task.tags.join(', ')}
            </p>
        </div>
        <div className='task-card__subsection'>
            <h3 className='subsection__header'>
                Описание
            </h3>
            <p className='subsection__content'>
                {task && task.description}
            </p>
        </div>
    </div>
}

export default TaskCard;
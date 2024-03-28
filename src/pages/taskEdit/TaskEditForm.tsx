import {Task, TaskPriority, TaskTag} from "../../data/Task.ts";
import React, {useState} from "react";
import PrimaryButton from "../../reusableComponents/PrimaryButton.tsx";

type TaskEditFormPropTypes = {
    selectedTask: Task | null;
    setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
    onUpdateTask: (updatedTask: Task) => void;
}
const TaskEditForm: React.FunctionComponent<TaskEditFormPropTypes> = ({selectedTask, setSelectedTask, onUpdateTask }) => {

    const [taskName, setTaskName] = useState<string>(selectedTask.title);
    const [taskPriority, setTaskPriority] = useState<TaskPriority>(selectedTask.priority);
    const [taskTags, setTaskTags] = useState<TaskTag[]>(selectedTask.tags);
    const [taskDescription, setTaskDescription] = useState<string>(selectedTask.description);

    const handleUpdateTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const updatedTask:Task = {
            title: taskName,
            created: selectedTask.created,
            priority: taskPriority,
            tags: taskTags,
            id: selectedTask.id,
            description: taskDescription
        }

        setSelectedTask(updatedTask);
        onUpdateTask(updatedTask);
    }

    const handleTagsChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
        setTaskTags(selectedOptions);
    };


    return <form className='task-edit-form'>
        <div className='task-edit-form__subsection'>
            <h3 className='subsection__header'>
                Название задачи
            </h3>
            <input className='title-input'
                   type="text"
                   value={taskName}
                   onChange={(e) => setTaskName(e.target.value)}/>
        </div>
        <div className='task-edit-form__subsection'>
            <h3 className='subsection__header'>
                Приоритет
            </h3>
            <select className='select-input'
                    defaultValue={taskPriority}
                    onChange={(e) => setTaskPriority(e.target.value as TaskPriority)}>
                <option value={TaskPriority.low}>
                    Low
                </option>
                <option value={TaskPriority.normal}>
                    Normal
                </option>
                <option value={TaskPriority.high}>
                    High
                </option>
            </select>
        </div>
        <div className='task-edit-form__subsection'>
            <h3 className='subsection__header'>
                Отметки
            </h3>
            <select className='select-input'
                    multiple
                    defaultValue={taskTags}
                    onChange={(e) => handleTagsChange(e)}>
                <option value={TaskTag.design}>
                    Design
                </option>
                <option value={TaskTag.development}>
                    Development
                </option>
                <option value={TaskTag.research}>
                    Research
                </option>
            </select>
        </div>
        <div className='task-edit-form__subsection'>
            <h3 className='subsection__header'>
                Описание
            </h3>
            <textarea className='description-input'
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}/>
        </div>
        <PrimaryButton onClick={e => handleUpdateTask(e)}>
            Сохранить
        </PrimaryButton>
    </form>
}

export default TaskEditForm;
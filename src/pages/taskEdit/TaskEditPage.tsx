import React from "react";
import {Task} from "../../data/Task.ts";
import SecondaryButton from "../../reusableComponents/SecondaryButton.tsx";
import TaskEditForm from "./TaskEditForm.tsx";

type TaskEditPagePropTypes = {
    selectedTask: Task | null;
    setIsEditRequired: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
    onUpdateTask: (updatedTask: Task) => void;
}
const TaskEditPage:React.FunctionComponent<TaskEditPagePropTypes> = ({selectedTask, setIsEditRequired, setSelectedTask, onUpdateTask}) => {

    const handleUpdateTask = (updatedTask: Task) => {
        onUpdateTask(updatedTask);
        setIsEditRequired(false);
    };

    return <div className='task-edit-page'>
        <SecondaryButton onClick={() => setIsEditRequired(false)}>
            Назад
        </SecondaryButton>
        <TaskEditForm selectedTask={selectedTask} setSelectedTask={setSelectedTask} onUpdateTask={handleUpdateTask} />
    </div>
}

export default TaskEditPage;
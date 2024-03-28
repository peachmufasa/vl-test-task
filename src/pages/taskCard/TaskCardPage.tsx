import React from "react";
import SecondaryButton from "../../reusableComponents/SecondaryButton.tsx";
import PrimaryButton from "../../reusableComponents/PrimaryButton.tsx";
import AlertButton from "../../reusableComponents/AlertButton.tsx";
import TaskCard from "./TaskCard.tsx";
import {Task} from "../../data/Task.ts";

type TaskCardPropTypes = {
    selectedTask: Task | null;
    setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
    setIsEditRequired: React.Dispatch<React.SetStateAction<boolean>>;
}
const TaskCardPage: React.FunctionComponent<TaskCardPropTypes> = ({selectedTask, setSelectedTask, setIsEditRequired}) => {


    return <div className='task-card-page'>
        <div className='button-block'>
            <div className='button-block--left'>
                <SecondaryButton onClick={() => setSelectedTask(null)}>
                    Назад
                </SecondaryButton>
                <PrimaryButton onClick={() => setIsEditRequired(true)}>
                    Редактировать
                </PrimaryButton>
            </div>
            <AlertButton>
                Удалить
            </AlertButton>
        </div>
        <TaskCard task={selectedTask} />
    </div>
}

export default TaskCardPage;
import React, {useEffect, useState} from "react";
import FilterSection from "./FilterSection.tsx";
import TaskList from "./TaskList.tsx";
import PrimaryButton from "../../reusableComponents/PrimaryButton.tsx";
import {Task, TaskPriority, TaskTag} from "../../data/Task.ts";
import {useInView} from "react-intersection-observer";

type TaskListPagePropTypes = {
    onSelectTask: React.Dispatch<React.SetStateAction<Task | null>>;
    selectedTask: Task | null;
    tasks: Task[];
}
const TaskListPage: React.FunctionComponent<TaskListPagePropTypes> = ({onSelectTask, selectedTask, tasks}) => {

    const [priorityFilters, setPriorityFilters] = useState<TaskPriority[]>([]);
    const [tagFilters, serTagFilters] = useState<TaskTag[]>([]);
    const [sortByDateAsc, setSortByDateAsc] = useState<boolean>(true);
    const [visibleTasks, setVisibleTasks] = useState<Task[]>([]);
    const [ref, inView] = useInView();

    useEffect(() => {
        const updatedVisibleTasks = tasks.slice(0, visibleTasks.length);
        setVisibleTasks(updatedVisibleTasks);
    }, [tasks]);

    useEffect(() => {
        const loadMoreTasks = () => {
            const additionalTasks = tasks.slice(visibleTasks.length, visibleTasks.length + 15);
            setVisibleTasks(prevVisibleTasks => [...prevVisibleTasks, ...additionalTasks]);
        };

        if (inView) {
            loadMoreTasks();
        }
    }, [inView, tasks, setVisibleTasks]);

    const filterTasks = (task: Task): boolean => {
        const priorityFilterPassed = priorityFilters.length === 0 || priorityFilters.includes(task.priority);
        const tagFilterPassed = tagFilters.length === 0 || tagFilters.some(tag => task.tags.includes(tag));
        return priorityFilterPassed && tagFilterPassed;
    };

    const compareByCreatedDateDesc = (a: Task, b: Task): number => {
        return new Date(a.created).getTime() - new Date(b.created).getTime();
    };
    const compareByCreatedDateAsc = (a: Task, b: Task): number => {
        return new Date(b.created).getTime() - new Date(a.created).getTime();
    };
    const compareFunction = sortByDateAsc ? compareByCreatedDateAsc : compareByCreatedDateDesc;
    const sortedTasks: Task[] = visibleTasks.sort(compareFunction).filter(filterTasks);

    return (
        <div className={selectedTask ? 'task-list-block narrow' : 'task-list-block'}>
            <FilterSection setPriorityFilters={setPriorityFilters}
                           priorityFilters={priorityFilters}
                           setTagFilters={serTagFilters}
                           tagFilters={tagFilters}
                           onSortTasks={setSortByDateAsc}
                           sortByDateAsc={sortByDateAsc}/>
            <div className='list-section'>
                <PrimaryButton children='Добавить задачу'/>
                <TaskList onSelectTask={onSelectTask} tasks={sortedTasks}/>
                <div ref={ref} style={{height: "10px"}}></div>
            </div>
        </div>
    );
}

export default TaskListPage;
import React from "react";
import TaskSort from "./TaskSort.tsx";
import TaskFilter from "./TaskFilter.tsx";
import {TaskPriority, TaskTag} from "../../data/Task.ts";

type FilterSectionPropTypes = {
    setPriorityFilters: React.Dispatch<React.SetStateAction<TaskPriority[]>>;
    priorityFilters: TaskPriority[];
    setTagFilters: React.Dispatch<React.SetStateAction<TaskTag[]>>;
    tagFilters: TaskTag[];
    onSortTasks: React.Dispatch<React.SetStateAction<boolean>>;
    sortByDateAsc: boolean;
};
const FilterSection: React.FunctionComponent<FilterSectionPropTypes> = ({
                                                                            setPriorityFilters,
                                                                            priorityFilters,
                                                                            setTagFilters,
                                                                            tagFilters,
                                                                            onSortTasks,
                                                                            sortByDateAsc
                                                                        }) => {
    return <form className='filter-section'>
        <TaskSort onSortTasks={onSortTasks} sortByDateAsc={sortByDateAsc}/>
        <TaskFilter setPriorityFilters={setPriorityFilters} priorityFilters={priorityFilters}
                    setTagFilters={setTagFilters} tagFilters={tagFilters}/>
    </form>
}

export default FilterSection;
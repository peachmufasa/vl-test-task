import {TaskPriority, TaskTag} from "../../data/Task.ts";
import React from "react";

type TaskFilterPropTypes = {
    setPriorityFilters: React.Dispatch<React.SetStateAction<TaskPriority[]>>;
    priorityFilters: TaskPriority[];
    setTagFilters: React.Dispatch<React.SetStateAction<TaskTag[]>>;
    tagFilters: TaskTag[]
}
const TaskFilter: React.FunctionComponent<TaskFilterPropTypes> = ({
                                                                      setPriorityFilters,
                                                                      priorityFilters,
                                                                      setTagFilters,
                                                                      tagFilters
                                                                  }) => {

    const handlePriorityFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const priority = event.target.value as TaskPriority;

        if (event.target.checked) {
            setPriorityFilters([...priorityFilters, priority]);
        } else {
            setPriorityFilters(priorityFilters.filter(p => p !== priority));
        }
    };

    const handleTagFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tag = event.target.value as TaskTag;

        if (event.target.checked) {
            setTagFilters([...tagFilters, tag]);
        } else {
            setTagFilters(tagFilters.filter(t => t !== tag));
        }
    };

    return <div className='filter-block compound'>
        <div>
            <h3 className='filter-header'>
                Приоритет
            </h3>
            <div className='filter-item'>
                <input type="checkbox" id="low" name="priority" value={TaskPriority.low}
                       onChange={handlePriorityFilterChange}/>
                <label htmlFor="low">Low</label>
            </div>
            <div className='filter-item'>
                <input type="checkbox" id="normal" name="priority" value={TaskPriority.normal}
                       onChange={handlePriorityFilterChange}/>
                <label htmlFor="normal">Normal</label>
            </div>
            <div className='filter-item'>
                <input type="checkbox" id="high" name="priority" value={TaskPriority.high}
                       onChange={handlePriorityFilterChange}/>
                <label htmlFor="high">High</label>
            </div>
        </div>
        <div>
            <h3 className='filter-header'>
                Отметка
            </h3>
            <div className='filter-item'>
                <input type="checkbox" id="research" name="tag" value={TaskTag.research}
                       onChange={handleTagFilterChange}/>
                <label htmlFor="research">Research</label>
            </div>
            <div className='filter-item'>
                <input type="checkbox" id="design" name="tag" value={TaskTag.design} onChange={handleTagFilterChange}/>
                <label htmlFor="design">Design</label>
            </div>
            <div className='filter-item'>
                <input type="checkbox" id="development" name="tag" value={TaskTag.development}
                       onChange={handleTagFilterChange}/>
                <label htmlFor="development">Development</label>
            </div>
        </div>
    </div>
}

export default TaskFilter;
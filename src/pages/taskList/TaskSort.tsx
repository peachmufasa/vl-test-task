import React from "react";

type TaskSortPropTypes = {
    onSortTasks: React.Dispatch<React.SetStateAction<boolean>>;
    sortByDateAsc: boolean;
}
const TaskSort: React.FunctionComponent<TaskSortPropTypes> = ({onSortTasks, sortByDateAsc}) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sortByDateAsc = e.target.value === 'new';
        onSortTasks(sortByDateAsc);
    };

    return <div className='filter-block'>
        <h3 className='filter-header'>
            Сортировка
        </h3>
        <div className='filter-item'>
            <input type="radio" id="new" name="sorting" value="new" checked={sortByDateAsc} onChange={(e) => handleSortChange(e)} />
            <label htmlFor="new">Новые</label>
        </div>
        <div className='filter-item'>
            <input type="radio" id="old" name="sorting" value="old" checked={!sortByDateAsc} onChange={(e) => handleSortChange(e)} />
            <label htmlFor="old">Старые</label>
        </div>
    </div>
}

export default TaskSort;
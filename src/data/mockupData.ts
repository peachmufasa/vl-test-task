import {Task, TaskPriority, TaskTag} from "./Task.ts";
import {Guid} from "js-guid";

export const data: Task[] =
    [{
        title: 'Новая задача №1',
        created: new Date(2024, 0, 15, 18, 30),
        priority: TaskPriority.high,
        tags: [TaskTag.development, TaskTag.design],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodo'
    }, {
        title: 'Новая задача №2',
        created: new Date(2024, 1, 18, 13, 10),
        priority: TaskPriority.low,
        tags: [TaskTag.development, TaskTag.research],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №3',
        created: new Date(2024, 2, 16, 1, 20),
        priority: TaskPriority.normal,
        tags: [TaskTag.development, TaskTag.design],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №4',
        created: new Date(2024, 2, 22, 6, 55),
        priority: TaskPriority.low,
        tags: [TaskTag.research],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №5',
        created: new Date(2024, 2, 23, 13, 0),
        priority: TaskPriority.high,
        tags: [TaskTag.development, TaskTag.design],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №6',
        created: new Date(2024, 2, 25, 6, 15),
        priority: TaskPriority.low,
        tags: [TaskTag.development],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №7',
        created: new Date(2024, 2, 26, 9, 25),
        priority: TaskPriority.normal,
        tags: [TaskTag.design, TaskTag.research],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №8',
        created: new Date(2024, 2, 26, 12, 30),
        priority: TaskPriority.high,
        tags: [TaskTag.research],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №9',
        created: new Date(2024, 2, 26, 14, 40),
        priority: TaskPriority.normal,
        tags: [TaskTag.development],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №10',
        created: new Date(2024, 2, 26, 16, 25),
        priority: TaskPriority.low,
        tags: [TaskTag.development, TaskTag.research],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача 11',
        created: new Date(2024, 2, 26, 17, 10),
        priority: TaskPriority.low,
        tags: [TaskTag.development, TaskTag.design],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №12',
        created: new Date(2024, 2, 26, 17, 25),
        priority: TaskPriority.low,
        tags: [TaskTag.design],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №13',
        created: new Date(2024, 2, 26, 17, 45),
        priority: TaskPriority.high,
        tags: [TaskTag.development],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №14',
        created: new Date(2024, 2, 26, 17, 55),
        priority: TaskPriority.normal,
        tags: [TaskTag.research],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №15',
        created: new Date(2024, 2, 26, 18, 0),
        priority: TaskPriority.low,
        tags: [TaskTag.development, TaskTag.research],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №16',
        created: new Date(2024, 2, 26, 19, 20),
        priority: TaskPriority.high,
        tags: [TaskTag.design, TaskTag.research],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }, {
        title: 'Новая задача №17',
        created: new Date(2024, 2, 26, 19, 30),
        priority: TaskPriority.low,
        tags: [TaskTag.development, TaskTag.research],
        id: Guid.newGuid().toString(),
        description: 'todotodotodotodotodotodo'
    }
    ];
package com.example.task_manager_backend.mapper;

import com.example.task_manager_backend.DTO.TaskDto;
import com.example.task_manager_backend.entity.Task;

public class TaskMapper {

    public static TaskDto mapToTaskDto(Task task) {
        return new TaskDto(task.getId(), task.getTitle(), task.getDescription(), task.getStatus());
    }

    public static Task mapToTask(TaskDto taskDto) {
        return new Task(taskDto.getId(), taskDto.getTitle(), taskDto.getDescription(), taskDto.getStatus());
    }


}

package com.example.task_manager_backend.service;

import com.example.task_manager_backend.DTO.TaskDto;

import java.util.List;

public interface TaskService {

    TaskDto createTask(TaskDto taskDto);
    TaskDto getTaskById(Long id);
    List<TaskDto> getAllTasks();
    TaskDto updateTask(Long id, TaskDto updatedTask);
    void deleteTask(Long id);

}

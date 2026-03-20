package com.example.task_manager_backend.service.impl;


import com.example.task_manager_backend.DTO.TaskDto;
import com.example.task_manager_backend.entity.Task;
import com.example.task_manager_backend.entity.User;
import com.example.task_manager_backend.exception.ResourceNotFoundException;
import com.example.task_manager_backend.mapper.TaskMapper;
import com.example.task_manager_backend.repository.TaskRepository;
import com.example.task_manager_backend.repository.UserRepository;
import com.example.task_manager_backend.service.TaskService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public TaskServiceImpl(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    private User getAuthenticatedUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public List<TaskDto> getAllTasks() {
        User user = getAuthenticatedUser();
        return taskRepository.findByUserId(user.getId()).stream()
                .map(TaskMapper::mapToTaskDto)
                .collect(Collectors.toList());
    }

    @Override
    public TaskDto createTask(TaskDto taskDto) {
        Task task = TaskMapper.mapToTask(taskDto);
        task.setUser(getAuthenticatedUser()); // Set the owner!
        return TaskMapper.mapToTaskDto(taskRepository.save(task));
    }

    @Override
    public TaskDto getTaskById(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));
        return TaskMapper.mapToTaskDto(task);
    }



    @Override
    public TaskDto updateTask(Long id, TaskDto updatedTask) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found"));

        if (!task.getUser().getId().equals(getAuthenticatedUser().getId())) {
            throw new RuntimeException("Not authorized to update this task");
        }

        task.setTitle(updatedTask.getTitle());
        task.setDescription(updatedTask.getDescription());
        task.setStatus(updatedTask.getStatus());
        return TaskMapper.mapToTaskDto(taskRepository.save(task));
    }
    @Override
    public void deleteTask(Long id) {
        Task task = taskRepository.findById(id).orElseThrow();

        if (!task.getUser().getId().equals(getAuthenticatedUser().getId())) {
            throw new RuntimeException("Not authorized to delete this task");
        }

        taskRepository.delete(task);
    }


}

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <div className="task-content">
        <input 
          className="checkbox"
          type="checkbox" 
          checked={task.completed} 
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? "completed-text" : ""}>
          {task.text}
        </span>
      </div>

      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        ✕
      </button>
    </div>
  )
}

export default TaskItem
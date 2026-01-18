import { useState, useEffect } from 'react'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem'

function App() {
  // 1. טעינת המשימות מהזיכרון מיד כשהאפליקציה עולה
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('my-tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  // 2. שמירת המשימות לזיכרון בכל פעם שיש שינוי ברשימה
  useEffect(() => {
    localStorage.setItem('my-tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="app-container">
      <h1>ניהול משימות</h1>
      
      <TaskInput onAddTask={addTask} />
      
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        {tasks.length === 0 ? (
          <p style={{ color: '#999' }}>אין משימות כרגע... הרשימה שמורה בזיכרון!</p>
        ) : (
          tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          ))
        )}
      </div>
    </div>
  )
}

export default App
// update
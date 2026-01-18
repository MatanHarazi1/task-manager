import { useState } from 'react'

function TaskInput({ onAddTask }) {
  const [text, setText] = useState('')

  const handleClick = () => {
    if (text.trim()) {
      onAddTask(text)
      setText('')
    }
  }

  // הוספנו כאן תמיכה בלחצן Enter במקלדת
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <div className="input-wrapper">
      <input 
        className="task-input"
        type="text" 
        placeholder="מה המשימה הבאה?" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="add-button" onClick={handleClick}>
        הוסף
      </button>
    </div>
  )
}

export default TaskInput
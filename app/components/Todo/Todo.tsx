import { useState } from "react"

export default () => {
    
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState(['ვიძიუ', 'და კიდე რაღაცა'])
 
    const onChange = (e: any) => {
        setTask(e.target.value)
    }
    
    const onAdd = (e: any) => {
        setTasks([...tasks, task])
        setTask('')
    }

    return(
        <div>
            <input type="text" 
                value={task}
                onChange={onChange}
            />
            <button onClick={onAdd}> დამატება </button>
            <ul>
                {
                    tasks.map(task => <li>{task}</li>)
                }
            </ul>

         </div>
    )
}
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { deleteTask, fetchTask } from '../Redux/task/action'
import AddTasks from './AddTasks'

const Tasks = () => {
  const dispatch = useDispatch()
  const { tasks, token } = useSelector((store) => {
    return {
      tasks: store.taskReducer.tasks,
      token: store.authReducer.token
    }
  }, shallowEqual)

  const getTask =()=>{
    dispatch(fetchTask(token))
  }
  useEffect(() => {
    getTask()
  }, [])

  const handleDelete =(id)=>{
  
    dispatch(deleteTask(id))
    getTask()
  }
  return (
    <div>
      <div>
        <AddTasks getTask={getTask}/>
      </div>

      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">

{tasks?.map((task) => (
  <div key={task._id} className="flex items-center justify-between width-40% gap-2 bg-gray-100 p-4 rounded-md mb-2 mt-2">

    <div className="flex flex-col justify-start">
      <p className="text-lg font-semibold">{task.title}</p>
      <p className="text-gray-500">{task.description}</p>
    </div>
    <div className='flex gap-2'>
      <button className='text-white bg-green-500 px-4 py-2 rounded-md shadow ml-auto font-bold '>Edit</button>
    <button
      onClick={() => handleDelete(task._id)}
      className="text-white bg-red-500 px-4 py-2 rounded-md shadow ml-auto font-bold "
    >
      Delete
    </button>
      </div>
  </div>
))}
</div>

    </div>
  )
}

export default Tasks
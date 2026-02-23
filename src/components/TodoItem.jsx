 export const TodoItem=({filteredTodos,handleDelete,handleToggle})=>{
    return(
        <>
             <ul>
      {
        filteredTodos.map((todo)=>(
          <li key={todo.id}
          style={{
            textDecoration:todo.isCompleted?"line-through":"none"
          }}
          >{todo.text }
           <input type='checkbox' checked={todo.isCompleted} onChange={()=>handleToggle(todo.id)} style={{marginLeft:"3px"}}/>
           <button className='delete-btn' onClick={() => handleDelete(todo.id)}>Delete</button>
           </li>
        ))
      }
      </ul>
        </>
    )
 }
import React from 'react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return(
    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
            <div className="col taskBg">
              <div className={ task.status ? 'done' : '' }>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
              <div className="iconsWrap">
                <span title="Completed / Not Completed"
                  onClick={ (e) => markDone(task.id) }
                >
                  <DoneOutlineIcon />
                </span>

                {task.status ? null : (
                  <span title="Edit"
                    onClick={ () => setUpdateData({ 
                      id: task.id, 
                      title: task.title, 
                      status: task.status ? true : false
                    }) }
                  >
                    <EditIcon />
                  </span>
                )}

                <span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
              
                  <DeleteIcon />
                </span>
              </div>
            </div>
          </React.Fragment>
        )
      })
      }  
    </>
  )
}

export default ToDo;
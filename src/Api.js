import React,{useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Axios from 'axios';



function App(){

const [task,settask]= useState();


useEffect(()=> {

    Axios.get('https://63fbe7d11ff79e133295bed6.mockapi.io/api/my-todo/tasks/lists').then((res)=>{

     settask(res.data)


    }).catch(function(err){


     console.log('check out your api call',err)

    })})


return(

    <Table striped>
<thead>
    <tr><th>Id</th>
    <th>Taskname</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
    {task?.map(item=>(

      <tr><td>{item.id}</td>
      <td>{item.taskname}</td>
      <td>{item.Description}</td>
      </tr>
)
    )}
</tbody>
    </Table>


)

}

export default App;

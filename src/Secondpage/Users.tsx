import React, { useEffect, useState } from 'react'

import { IUsers } from './models/IUsers'
import { UserService } from './Services/UserService'
interface   ISTATE{
    loading:boolean,
    users:IUsers[],
    errorMsg:string
}
const Users:React.FC=()=>{
const [state,setState]=useState<ISTATE>({
    loading:false,
    users:[]as IUsers[],
    errorMsg:''
})
useEffect(()=>{
    setState({...state,loading:true})
  UserService.getAllUsers().then((res)=>setState({
    ...state,loading:false,users:res.data
   
  })).catch(err =>setState({
    ...state,loading:false,errorMsg:err.message
  }));
},[]);
const{loading,users,errorMsg}=state

    return(
    <>
    <div className='container'>
        <h1>Data From Api</h1>
        {errorMsg &&(<p>{errorMsg}</p>)}
        {loading &&(<h1>Loading...</h1>)}
           <table>
            <thead>
           <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
           </tr>
            </thead>
            <tbody>
          {
            users.length>0 && users.map(user=>(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            ))
          }
            </tbody>
        </table>
    </div>
    </>
)
}
export default Users;


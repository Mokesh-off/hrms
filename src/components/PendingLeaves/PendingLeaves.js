import React, { Component } from 'react';
import './PendingLeaves.css'
class PendingLeaves extends Component {
  constructor(props){
    super(props);
    this.state ={
    LeaveRecord : JSON.parse(localStorage.getItem('Data'))
    }
}

 render() {
    let id=JSON.parse(localStorage.getItem('currentUserId'))
      


    return(
      
      <div className='leaveRecord'>
      <h2>Pending Leaves</h2>
        <table>
           <thead className='thead1'>
             <tr className='thead1'>
               <td className='tdStyle'>Casual Leaves</td>
               <td className='tdStyle'>Leave without Pay</td>
               <td className='tdStyle'>Sick Leaves</td>
               <td className='tdStyle'>Maternity Leaves</td>
               <td className='tdStyle'>Priviledge Leaves</td>
             </tr>
           </thead>
           <tbody>
           <tr className='tdStyle'  >               
               <td className='tdStyle'>&nbsp;</td>
               <td className='tdStyle'>&nbsp;</td>
               <td className='tdStyle'>&nbsp;</td>            
               <td className='tdStyle'>&nbsp;</td>
               <td className='tdStyle'>&nbsp;</td>
         </tr>
           </tbody>
         </table>
       </div>
    )
 
  }
}

export default PendingLeaves 

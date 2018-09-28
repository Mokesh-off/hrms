import React, {Component} from 'react';
import './LeaveRecord.css';

class LeaveRecord extends Component{

	constructor(props){
		super(props);
		this.state ={
		LeaveRecord : JSON.parse(localStorage.getItem('Data'))
		}
		}
	// displayLeaveRecords(){
	// 	console.log('clicked')
	// 	var LeaveRecordVar= JSON.parse(localStorage.getItem('Data'));		
	// 	LeaveRecordVar=LeaveRecordVar.leaveRequest;
  //   console.log(LeaveRecordVar+'leaverecords-------------------------');
	// 	// newVar.forEach(index => {
	// 	// 				this.state.email === index.EmailId && this.state.password === index.Password 
	// 	// 	&& this.setCurrentUser(index.EmpId,index.Role,index.EmpName)
	// 	// });
	// }
// 	EmpId: "5"
// FromDate: "2018-09-27T10:43:04.833Z"
// LeaveReason: "newdsfd"
// LeaveType: "Emergency leave"
// ReqestId: "2018-09-27T10:43:04.834Z"
// ToDate: "2018-10-05T10:43:04.000Z"
// TotalDays: 6
// end: "2018-10-05T10:43:04.000Z"
// start: "2018-09-27T10:43:04.833Z"
// status: ""
  render(){
		// {console.log(this.state.LeaveRecord.leaveRequest)}
    return(
			
      <div className='leaveRecord'>
        <table>
					<thead className='thead1'>
						<tr className='thead1'>
							<td className='tdStyle'>EmpId</td>
							<td className='tdStyle'>LeaveType</td>
							<td className='tdStyle'>FromDate</td>
							<td className='tdStyle'>ToDate</td>
							<td className='tdStyle'>TotalDays</td>
							<td className='tdStyle'>status</td>
							<td className='tdStyle'>LeaveReason</td>
						</tr>
					</thead>
					<tbody>
					  {
							this.state.LeaveRecord.leaveRequest.map((record,i) =>
							
							<tr key={record[i]} className='tdStyle'  >
								<td className='tdStyle'>{record.EmpId}</td>
								<td className='tdStyle'>{record.LeaveType}</td>
								<td className='tdStyle'>{record.FromDate.substr(0,10)}</td>
								<td className='tdStyle'>{record.ToDate.substr(0,10)}</td>
								<td className='tdStyle'>{record.TotalDays}</td>
								<td className='tdStyle'>{record.status}</td>
								<td className='tdStyle'>{record.LeaveReason}</td>
							</tr>
		
						  )
						}
					</tbody>
				</table>
			</div>
    )
  }
}
export default LeaveRecord;
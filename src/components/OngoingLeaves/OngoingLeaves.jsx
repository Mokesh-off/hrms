import React, { Component } from 'react'
import './OngoingLeaves.css'
import moment from 'moment'

class OngoingLeaves extends Component {
  constructor (props) {
    super(props)
    this.state = {
      LeaveRecord: JSON.parse(localStorage.getItem('Data')),
      open: false,
      FromDate: null,
      ToDate: null,
      newRecord: [],
      visible: false,
      OngoingLeavesCount:0
    }
  }
  componentDidMount () {
    var data = JSON.parse(localStorage.getItem('Data'))
    data = data.leaveRequest
    var count = 0;
    data.map((record) => {
      var compareDate = moment()
      var startDate   = moment(record.FromDate);
      var endDate     = moment(record.ToDate);
      if((compareDate.isBetween(startDate, endDate)) || 
          compareDate===startDate || compareDate===endDate) {
            count++;
            console.log(count)
            
          }
          this.setState({OngoingLeaves: this.state.OngoingLeaves = count}, () =>
            console.log(this.state.OngoingLeaves + 'did mount=======================')
            )
    })
  }

  render () {
    var newData = JSON.parse(localStorage.getItem('Data'))
    if (this.state.visible) {
      var data = this.state.newRecord
    } else {
      var data = newData.leaveRequest
    }
    if (!localStorage.getItem('currentUserId')) {
      return (
        window.location.replace('/')
      )
    } else {
      return (
        <div className='leaveRecord'>
          <span>Ongoing leaves{' '+this.state.OngoingLeaves}</span>
          <table>
            <thead className='thead1'>
              <tr className='thead1'>
                <td className='tdStyle'>EmpId</td>
                <td className='tdStyle'>EmpName</td>
                <td className='tdStyle'>Applied On</td>
                <td className='tdStyle'>LeaveType</td>
                <td className='tdStyle'>From Date / To Date</td>
                <td className='tdStyle'>Days</td>
                <td className='tdStyle'>status</td>
                <td className='tdStyle'>LeaveReason</td>
              </tr>
            </thead>
            <tbody>
              
              {
                  data.map((record,i) => {

                  var compareDate = moment()
                  var startDate   = moment(record.FromDate);
                  var endDate     = moment(record.ToDate);
                  var x=compareDate.isBetween(startDate, endDate)
              
                  if((compareDate.isBetween(startDate, endDate)) || 
                  compareDate===startDate || compareDate===endDate
                  ){
                  return(
                    <tr key={i} className='tdStyle'>
                      <td className='tdStyle'>{record.EmpId} </td>
                      <td className='tdStyle'>{record.EmpName}</td>
                      <td className='tdStyle'>{record.appliedOn.substr(0, 10)}</td>
                      <td className='tdStyle'>{record.LeaveType}</td>
                      <td className='tdStyle'>{record.FromDate.substr(0, 10)} / {record.ToDate.substr(0, 10)}</td>
                      <td className='tdStyle'>{record.TotalDays}</td>
                      <td className='tdStyle'>{record.status}</td>
                      <td className='tdStyle'>{record.LeaveReason}</td>
                    </tr>
                  )
                  }
                })}
            </tbody>
          </table>
        </div>
      )
    }
  }
}
export default OngoingLeaves

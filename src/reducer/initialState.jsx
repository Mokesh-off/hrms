export const Employee =[ 
{
	EmpId: '1',
	EmpName:Swathi,
	Role : "Employer",
	Password: swathi,
	ContactNum: '1234567890',
	Address:'xyz',
	Dob:'31-01-1999',
	EmailId:'swathi@gmail.com',
	Dep:'Web',
	WL:'Chennai',
	Doj: '1-08-2018',
	LeaveType: {
        LOP:2,
        PL:3,
        SL:2,
        MedicalLeave:7,
        Permission:3,
        EL:5,
	}
},
{
	EmpId: '2',
	EmpName:Hari,
	Role : Employee,
	Password: hari,
	ContactNum:'1234567890',
	Address:'xyz',
	Dob:'31-01-1999',
	EmailId:'hari@gmail.com',
	Dep:'roku',
	WL:'Chennai',
	Doj: '1-08-2018',
	LeaveType: {
LOP:2,
PL:3,
SL:2,
MedicalLeave:7,
Permission:3,
EL:5,
	}
},
{
	EmpId: '3',
	EmpName:Meenu,
	Role : Employee,
	Password: meenu,
	ContactNum:'1234567890',
	Address:'xyz',
	Dob:'31-01-1999',
	EmailId:'meenu@gmail.com',
	Dep:'roku',
	WL:'Chennai',
	Doj: '1-08-2018',
	LeaveType: {
LOP:2,
PL:3,
SL:2,
MedicalLeave:7,
Permission:3,
EL:5,
	}
},
{
	EmpId: '4',
	EmpName:Rupali,
	Role : "Employer",
	Password: rupali,
	ContactNum:'1234567890',
	Address:'xyz',
	Dob:'31-01-1999',
	EmailId:'rupali@gmail.com',
	Dep:'web',
	WL:'Chennai',
	Doj: '1-08-2018',
	LeaveType: {
LOP:2,
PL:3,
SL:2,
MedicalLeave:7,
Permission:3,
EL:5,
	}
},
{
	EmpId: '5',
	EmpName: "Mokesh",
	Role : "Employee",
	Password:mokesh,
	ContactNum:'1234567890',
	Address:'xyz',
	Dob:'31-01-1999',
	EmailId:'mokesh@gmail.com',
	Dep:'Web',
	WL:'Chennai',
	Doj: '1-08-2018',
	LeaveType: {
LOP:2,
PL:3,
SL:2,
MedicalLeave:7,
Permission:3,
EL:5,
	}
},
{
	EmpId: '6',
	EmpName:Pooja,
	Role : Employee,
	Password: pooja,
	ContactNum:'1234567890',
	Address:'xyz',
	Dob:'31-01-1999',
	EmailId:'pooja@gmail.com',
	Dep:'roku',
	WL:'Chennai',
	Doj: '1-08-2018',
	LeaveType: {
LOP:2,
PL:3,
SL:2,
MedicalLeave:7,
Permission:3,
EL:5,
	}
}
]

export const LeaveRequest = [
{
        EmpId:'',
        ReqestId : '',
        LeaveType : '',
        ToDate :'',
        FromDate:'',
        TotalDays:'',
        LeaveReason:''
       }
]

export const LeaveApproval  = [
{
       EmpId:'',
        ReqestId : '',
        LeaveType : '',
        ToDate :'',
        FromDate:'',
        TotalDays:'',
        RejectionReason:'',
        Status:''
       }
]


export const LeavePolicy  = [
{
        LeaveType : [ 'SL','PL','ML','EL'],
        Days:[ '10','24','08'],
        FromDate:'',
        Holidays:'',
        RejectionReason:'',
        Status:'',
        LossOfPay:''	
       }
]








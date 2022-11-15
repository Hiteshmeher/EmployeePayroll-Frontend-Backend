// import { not } from "@angular/compiler/src/output/output_ast";


export class EmployeeModel {
    employeeId: number;
    name: String = "";
    salary: number = 0;
    note: String = "";
    startDate: Date ;
    department: Array<any>=[];
    gender: String = ""
    profilePic: String = "";

constructor(
    EmployeeId: number,
    Name: String,
    Salary: number,
    Note: String ,
    StartDate: Date,
    Department: Array<any>,
    Gender: string,
    ProfilePic: string 
    )
    {
    this.employeeId=EmployeeId;
    this.name=Name;
    this.salary=Salary;
    this.note=Note;
    this.startDate=StartDate;
    this.department=Department;
    this.gender=Gender;
    this.profilePic=ProfilePic;
    }
}
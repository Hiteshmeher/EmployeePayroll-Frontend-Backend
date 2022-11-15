import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';
import { EmployeeModel } from 'src/app/model/employee-model.module';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  logoUrl="./assets/images/logo.png";
  image1Url="./assets/profile-images/Ellipse -1.png";
  image2Url="./assets/profile-images/Ellipse -2.png";
  image3Url="./assets/profile-images/Ellipse -3.png";
  image4Url="./assets/profile-images/Ellipse -4.png";

  employee: EmployeeModel = new EmployeeModel(0,"",0,"",new Date,[],"","");
  employeeId: any = this.route.snapshot.paramMap.get("id")


  constructor(
    private router:Router,
    private service:EmployeeServiceService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
   }
  
  onSubmit(){
    console.log(this.employee);
    this.employee.department=this.tempArr;
    this.service.insertEmployee(this.employee).subscribe( (data:any) =>{
      alert("Employee Added Successfully")
      this.router.navigate([""]);
    } )
  } 
  
deptName: any;
emps:any = "";
allEmp : Array<any> = [];  
tempArr : Array<any> = [];

depart2: any = ["HR", "Sales", "Engineer", "Finance", "Other"];

checkBoxChange(dptname:any){

  if(!this.tempArr.includes(dptname)){
    this.tempArr.push(dptname);
  }
  else{
    const index = this.tempArr.indexOf(dptname);
    if (index > -1) { // only splice array when item is found
      this.tempArr.splice(index, 1); // 2nd parameter means remove one item only
    }
  }

}

updateEmpData(){
  if(this.employeeId!= null){
  this.getEmployee();
  this.employee.department=this.tempArr;
  this.service.updateEmployeeData(this.employee, this.employeeId).subscribe ((data:any)=>{
  this.router.navigate([""])
  })
}
}
getEmployee(){
  this.service.getEmployeeById(this.employeeId).subscribe((data:any)=>{
    this.employee=data.data;
    console.log(this.employee.employeeId);
  })
}

}

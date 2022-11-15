import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/model/employee-model.module';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logoUrl="./assets/images/logo.png";
  addUrl="./assets/icons/add-24px.svg";
  deleteUrl="./assets/icons/delete-black-18dp.svg";
  editUrl="./assets/icons/create-black-18dp.svg";
 
  public employeeDetails: EmployeeModel[] = [];
  
  constructor(    
    private service:EmployeeServiceService,
    private router:Router,

    ) { }

  ngOnInit(): void {
    this.service.getEmployeeData().subscribe( data =>{
      this.employeeDetails= data.data;
      console.log(this.employeeDetails);
    });
  }

  remove(employeeId:number):void{
    this.service.deleteEmployeeData(employeeId).subscribe((data:any) =>{
      this.employeeDetails=data.data;
      alert("Deleted Successfully");
      this.ngOnInit();
    });
  }

  update(employeeId:number):void{
    this.router.navigate(['update',employeeId]);
  }


}

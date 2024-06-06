import { Component, OnInit } from '@angular/core';

import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
  departmentList:any=[];
  modalTitle:any;
  activateAddEditCom:boolean= false;
  department:any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshDepartmentList();
  }
  refreshDepartmentList() {
    this.service.getDepartmentList().subscribe(data => {
      this.departmentList = data;
    });
  }

  AddDepartment(){
    this.department={
      DepartmentId:0,
      DepartmentName:""
    };
    this.modalTitle = "Add Department";
    this.activateAddEditCom = true;
  }

  EditDepartment(item:any){
    this.department=item;
    this.modalTitle = "Edit Department";
    this.activateAddEditCom = true;
  }

  CloseClick(){
    this.activateAddEditCom = false;
    this.refreshDepartmentList();
  }

  DeleteClick(id:any){
    if(confirm("Are you sure??")){
      this.service.deleteDepartment(id).subscribe(res =>{
        alert(res.toString());
        this.refreshDepartmentList();
      })
    }
  }



}

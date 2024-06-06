import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {
  @Input() department:any;
  DepartmentId:any=0;
  DepartmentName:any="";

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.DepartmentId = this.department.DepartmentId;
    this.DepartmentName = this.department.DepartmentName;
  }

  addDepartment(){
    var val={
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    }

    this.service.addDepartment(val).subscribe(res => {
      alert(res.toString());
    })
  }

  updateDepartment(){
    var val={
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    }

    this.service.updateDepartment(val).subscribe(res => {
      alert(res.toString());
    })
  }

}

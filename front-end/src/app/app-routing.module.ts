import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { DepartmentComponent } from "./department/department.component";

const routes: Routes = [
  {path:'student', component:StudentComponent},
  {path:'department', component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent {

  data = [
    {name: 'Amit', age : 23 , job: 'SDE', gender : 'Male'},
    {name: 'vaishnavi', age :44 , job: 'SDE2',gender : 'Female'},
    {name: 'Vishal', age : 32 , job: 'SDE1', gender : 'Male'},
    {name: 'vivek', age : 33 , job: 'Teacher', gender : 'Male'}
  ];

  headers = [
    {key : 'name', lable: 'Name'},
    {key : 'age', lable: 'Age'},
    {key : 'job', lable: 'Job'},
    {key : 'gender', lable: 'Gender'}
  ];

}

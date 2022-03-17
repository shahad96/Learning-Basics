import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import {usersInfoService} from '../users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  // providers: [usersInfoService]
})
export class LogInComponent implements OnInit {

  // name="";
  @ViewChild('name',{static:false}) name:ElementRef;
  password="";
  subjects: String[] = [];
  toggle= false;
  constructor(private usersInfoService:usersInfoService) { }

  ngOnInit(): void {
  }

  regester(){

    this.usersInfoService.addUser(this.name.nativeElement.value , this.password);

  }

  addingSubject(subject:String){

    this.subjects.push(subject);

  }

  Math(){
    console.log(this.name.nativeElement.value);
    
    this.subjects.push("math");
  }

  Science(){
    this.subjects.push("Science");
  }

  History(){
    this.subjects.push("History");
  }

  English(){
    this.subjects.push("English");
  }

  submet(){
    this.toggle=true;
  }

 

}

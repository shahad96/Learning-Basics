import { Component, OnInit,  EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  sub = "";

@Output() newSubject :EventEmitter<String> = new EventEmitter();
   

  constructor() { }

  ngOnInit(): void {
  }

  addSubject(){

    this.newSubject.emit(this.sub);

  }
}

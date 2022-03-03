import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() nameSet = new EventEmitter<string>()

  public name: string = '';
  public email: string = '';

  submitForm () {
  this.nameSet.emit(this.name);
  }

  constructor() { }

  ngOnInit(): void {
  }
}

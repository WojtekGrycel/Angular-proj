import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

public appState = 'Form';
public nam: string = '';
  public email: string = '';
  public onLineCleared() {
  }
  @Output() namSet = new EventEmitter<string>()

  closeGame() {
    this.namSet.emit(this.nam);
    }

  constructor() { }

  ngOnInit(): void {
  }

}

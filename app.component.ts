import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exam';
  public appState = 'Form';
  public name: string = '';
  public namm: string = '';
  public email: string = '';
  public onLineCleared() {
  }

onNameSet(nam: string){
this.name = nam;
this.appState = 'Game';
}
onNamSet(nam: string){
  this.namm = nam;
  this.appState = 'Form';
  }
// public 'Form' = false;
// public 'Game' = true;

//   public showForm() {
//   this.Form = true;
//   this.Game = false;
// }

//   public hiddenForm() {
//       this.Form = !this.Form;
//       this.Game = !this.Game;
//       }


}

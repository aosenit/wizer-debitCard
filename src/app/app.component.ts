import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  parentData:any= [
  ];
  

  newDebitDataEvent(data:any){
    data? this.parentData = data: this.parentData = this.parentData;
  }
}

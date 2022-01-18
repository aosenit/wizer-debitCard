import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() parentData:any

  constructor() { }

  ngOnInit(): void {
    let placeholder = {
      cardNumber: '#### #### #### ####',
      cardHolder: 'John Doe',
      cardExpiryDate: '12/20',
      cardCVC: '235'
     };

    this.parentData=  placeholder
  }


}

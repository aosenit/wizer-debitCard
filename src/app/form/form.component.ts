import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormDataClass } from '../formModel';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
formValue!: FormGroup;

  @Output() newDebitDataEvent = new EventEmitter<FormDataClass>();

formDataValues : FormDataClass = new FormDataClass();



  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.FormBuilder.group({
      cardNumber: [''],
      cardHolder: [''],
      cardExpiryDate: [''],
      cardCVC: ['']
    });
  }


  addFormData() {
    if(this.formValue.invalid) {
      alert('Please fill all inputs correctly')
    }else{
      this.formDataValues = this.formValue.value;
     if(this.formValue.value.cardNumber.toString().length === 16){this.formDataValues.cardNumber = this.formValue.value.cardNumber}else{
       alert('Please enter a valid 16 digit card number' )
       return
      };
    this.formDataValues.cardHolder = this.formValue.value.cardHolder;
    this.formDataValues.cardExpiryDate = this.formValue.value.cardExpiryDate;
    this.formDataValues.cardCVC = this.formValue.value.cardCVC;

    //Format card number to 16digits of 4

    let newString = ''
    let counter = 0
    let value = this.formDataValues.cardNumber.toString().split('')
    for (let i = 0; i < value.length; i++) {
      if (counter == 4) {
        newString += ' '
        counter = 0
      }
      newString += value[i]
      counter++
    }

    this.newDebitDataEvent.emit({...this.formDataValues, cardNumber: newString});
    this.formValue.reset();
    alert("Form Submitted Successfully");
    }

  }
}

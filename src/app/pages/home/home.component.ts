import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ConfigServiceService} from "../../services/config-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  buttonImage = '';
  validitiy=0
  editForm = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    email: ['',[Validators.required]],
    password: ['',[Validators.required]],
    confirmPassword: ['',[Validators.required]],
    phoneNumber: ['',[Validators.required,Validators.pattern('^[0-9]*$')]],
    address: ['',[Validators.required]],
    city: ['',[Validators.required]],
    country: ['',[Validators.required]],
    postalCode: ['',[Validators.required,Validators.pattern('^[0-9]*$')]],
  })

  questionList:any = [];

  focusedField: string = '';
  constructor(private fb:FormBuilder,
              private ConfigService:ConfigServiceService) {
  }



  ngOnInit(): void {
    this.getQuestions()

  }

  setFocusedField(field: string) {
    this.focusedField = field;
  }
  getQuestions():void{
    this.ConfigService.getQuestion().subscribe((data:any)=>{
      this.questionList = data;
      console.warn(data);
    })
  }
  checkIfQuestionIsCorrect(question:any,answer:any):void{
    if(question.answer === answer){
      console.warn('correct')
    }else{
      console.warn('incorrect')
    }
  }
  checkPassword():void{
    if(this.editForm.value.password === this.editForm.value.confirmPassword){
      console.warn('correct')
    }else{
      console.warn('incorrect')
    }
  }
  checkValidity(validity:boolean):void{
    if(validity){
      this.validitiy++
    }else{
      this.validitiy--
    }
  }

}


import { Component, OnInit, Type } from '@angular/core';
import { CredentialService } from '../credential-service';
import { DynamicControlType } from '../models/dynamic-control-type';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-credentials',
  imports: [ReactiveFormsModule] ,
  templateUrl: './credentials.html',
  styleUrl: './credentials.scss'
})
export class Credentials implements OnInit {

  public credentialTypes : string[] = [];
  public formDefinition : DynamicControlType[] = [];

  formBuilder = new FormBuilder();

  dynamicForm = new FormGroup({});

  constructor(private credentialService : CredentialService) {}

  ngOnInit(): void {
    
    this.credentialService.getTypes().subscribe( (data : any) => {
      this.credentialTypes = data;
    } );

    this.credentialService.getFormDefinition().subscribe( (data : any) => {
      this.formDefinition = data;
      this.updateForm();
    } );
  }

  public submitForm() : void
  {
    console.log(this.dynamicForm.value);
  }

  private updateForm() : void {
    let form = this.formBuilder.group({});
    this.formDefinition.forEach(f => form.addControl(f.key, new FormControl('', f.required ? Validators.required : null)));
    this.dynamicForm = form;
  }
}

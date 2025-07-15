import { Component, OnInit, Type } from '@angular/core';
import { CredentialService } from '../credential-service';
import { DynamicControlType } from '../models/dynamic-control-type';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormTypeDefinition } from '../models/form-type-definition';

@Component({
  selector: 'app-credentials',
  imports: [ReactiveFormsModule, FormsModule] ,
  templateUrl: './credentials.html',
  styleUrl: './credentials.scss'
})
export class Credentials implements OnInit {

  public credentialTypes : FormTypeDefinition[] = [];
  public formDefinition : DynamicControlType[] = [];
  public formType : string = '';

  public dynamicForm : FormGroup = new FormGroup({});

  private formBuilder : FormBuilder = new FormBuilder();

  constructor(private credentialService : CredentialService) {}

  public ngOnInit(): void {

    
    
    this.credentialService.getTypes().subscribe( (data : any) => {
      this.credentialTypes = data;

      let defaultType = this.credentialTypes[0];

      this.updateFormType(defaultType.key);




    } );

    
  }

  public submitForm() : void
  {
    console.log(this.dynamicForm.value);
  }

  public updateFormType(value : string) {
      this.formType = value;

      let credentialType = this.credentialTypes.find(type => type.key === this.formType) || this.credentialTypes[0];

      this.credentialService.getFormDefinition(credentialType.url).subscribe( (data : any) => {
      this.formDefinition = data;
      this.updateForm();
    } );
  }

  private updateForm() : void {
    let form = this.formBuilder.group({});
    this.formDefinition.forEach(f => form.addControl(f.key, new FormControl('', f.required ? Validators.required : null)));
    this.dynamicForm = form;
  }
}

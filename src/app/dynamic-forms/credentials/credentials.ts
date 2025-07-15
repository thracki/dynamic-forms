import { Component, OnInit } from '@angular/core';
import { CredentialService } from '../credential-service';

@Component({
  selector: 'app-credentials',
  imports: [],
  templateUrl: './credentials.html',
  styleUrl: './credentials.scss'
})
export class Credentials implements OnInit {

  public credentialTypes : string[] = [];

  constructor(private credentialService : CredentialService) {}

  ngOnInit(): void {
    this.credentialService.getTypes().subscribe( (data : any) => {
      this.credentialTypes = data;
    } );
  }

}

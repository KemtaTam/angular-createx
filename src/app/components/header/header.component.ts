import { SignUpComponent } from './../../pages/sign-up/sign-up.component';
import { SignInComponent } from './../../pages/sign-in/sign-in.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(private dialogTrigger: MatDialog) { }

  openDialogLogin(){
	this.dialogTrigger.open(SignInComponent);
  }
  openDialogRegister(){
	this.dialogTrigger.open(SignUpComponent);
  }
  

}

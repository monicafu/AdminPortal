import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private credetinal = { 'username':'', 'password':'' };
	private loggedIn = false;

  	constructor( private loginService:LoginService ) { }

  	onSubmit () {
  		this.loginService.sendCredential( this.credetinal.username, this.credetinal.password ).subscribe(
  			res => {
  				console.log( res );
  				localStorage.setItem( "xAuthToken", res.json().token );
  				this.loggedIn = true;
  			},

			error => {
  				console.log( error );
  			}
  		);
  	}

  	ngOnInit() {
  	}

}

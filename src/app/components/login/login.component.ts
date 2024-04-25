import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

username: string  = '' 
password: string =  ''
 
constructor(private authservice: AuthService, private router: Router ){
 
}

login(username: string, password: string): void {
  if (this.authservice.validateCredentials(username, password)) {
    // Si las credenciales son válidas, te manda  al dashboard
    this.router.navigate(['/dashboard']);
  } else {
    // Si las credenciales son incorrectas, te manda una alerta
    alert("Usuario o contraseña erroneo")
  }
}
  
}



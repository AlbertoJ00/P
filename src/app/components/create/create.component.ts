import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
constructor(private userService: UserService, private router: Router ){

}

formdata: User = {
  id: 0,
  name:'',
  lastName:'',
  ocupation:''
}
//Metodo crear
create(){
  this.userService.createUser(this.formdata).subscribe({
    next:(data) =>{
      this.router.navigate(['user'])
    }
  })
  
   
}

back(): void {
  this.router.navigate(['/user']);
}

}

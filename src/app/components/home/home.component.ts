import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  allUser: User[] = []


constructor(private userService: UserService, private router:Router){

}

ngOnInit(): void {
    this.userService.getAll().subscribe(data =>{
      this.allUser = data
    })


   
}

deleteUser(id: number){
this.userService.deleteUser(id).subscribe({
  next: (data) =>{
    this.allUser = this.allUser.filter(_ => _.id != id)
  }
})
}
dashboardModule(): void {
  this.router.navigate(['/dashboard']);
}


}

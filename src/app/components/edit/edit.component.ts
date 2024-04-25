import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { User } from '../user';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit{

 

constructor(private activatedroute: ActivatedRoute, private userService: UserService, private router: Router    ){

  }

  formdata: User = {
    id: 0,
    name:'',
    lastName:'',
    ocupation:''
  }

  ngOnInit(): void {
    
    this.activatedroute.paramMap.subscribe((param) => {
      let id = Number(param.get('id'))
      this.getbyId(id);
    })
  }

  getbyId(id: number){
    this.userService.editUser(id).subscribe((data : any) => {
    this.formdata = data
    })
  }

  updateUser(){
    this.userService.updateUser(this.formdata).subscribe({
      next:(data) =>{
        this.router.navigate(['user'])
      }
    })
    
    console.log(this.formdata)
  }

  back(): void {
    this.router.navigate(['/user']);
  }
    
}


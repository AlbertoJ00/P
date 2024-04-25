import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 
// metodos crud para los usuarios

  constructor(private httpClient: HttpClient ) { }

    getAll(){
        return this.httpClient.get<User[]>('http://localhost:3000/User')
    }

    createUser(data: User){
        return this.httpClient.post<User[]>('http://localhost:3000/User', data)
       
    }

    editUser(id:number){
        return this.httpClient.get<User[]>(`http://localhost:3000/User/${id}`)
    }

    updateUser(data:User){
       
        return this.httpClient.put<User[]>(`http://localhost:3000/User/${data.id}`,data)
        
    }
    
    deleteUser(id:number){
        return this.httpClient.delete<User[]>(`http://localhost:3000/User/${id}`)
    }
    

}
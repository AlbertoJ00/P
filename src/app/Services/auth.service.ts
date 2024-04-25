

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Moack de usuarios validos 
  private validUsers = [
    { username: 'admin', password: '1234' },
    { username: 'admin02', password: '12345' }
  ];

  constructor() { }

  // Método para verificar las credenciales y realizar el inicio de sesión

  validateCredentials(username: string, password: string): boolean {
    // Verifica si las credenciales coinciden con los usuarios válidos
    return this.validUsers.some(u => u.username === username && u.password === password);
  }

}
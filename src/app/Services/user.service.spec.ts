import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { of } from 'rxjs';
import { User } from '../components/user';

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy: { get: jest.Mock, post: jest.Mock, put: jest.Mock, delete: jest.Mock };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    service = new UserService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    const users: User[] = [
      { id: 1, name: 'Juan', lastName: 'Santana', ocupation: 'chef'
    },
      { id: 2, name: 'Juan ',lastName: 'Santana', ocupation: 'chef'
    }
    ];
    httpClientSpy.get.mockReturnValue(of(users));

    service.getAll().subscribe(response => {
      expect(response).toEqual(users);
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith('http://localhost:3000/User');
  });

  it('should create a new user', () => {
    const newUser: User = { id: 3, name: 'New User', lastName: 'Santana', ocupation: 'chef'
  };
    httpClientSpy.post.mockReturnValue(of(newUser));

    service.createUser(newUser).subscribe(response => {
      expect(response).toEqual([newUser]);
    });

    expect(httpClientSpy.post).toHaveBeenCalledWith('http://localhost:3000/User', newUser);
  });

  it('should edit a user', () => {
    const userId = 1;
    const editedUser: User = { id: userId, name: 'Pedro',lastName: 'Santana', ocupation: 'chef'
  };
    httpClientSpy.get.mockReturnValue(of(editedUser));

    service.editUser(userId).subscribe(response => {
      expect(response).toEqual([editedUser]);
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith(`http://localhost:3000/User/${userId}`);
  });

  it('should update a user', () => {
    const updatedUser: User = { id: 1, name: 'Updated User',lastName: 'Santana', ocupation: 'chef'
  };
    httpClientSpy.put.mockReturnValue(of(updatedUser));

    service.updateUser(updatedUser).subscribe(response => {
      expect(response).toEqual([updatedUser]);
    });

    expect(httpClientSpy.put).toHaveBeenCalledWith(`http://localhost:3000/User/${updatedUser.id}`, updatedUser);
  });

  it('should delete a user', () => {
    const userId = 1;
    httpClientSpy.delete.mockReturnValue(of(null));

    service.deleteUser(userId).subscribe(response => {
      expect(response).toBeNull();
    });

    expect(httpClientSpy.delete).toHaveBeenCalledWith(`http://localhost:3000/User/${userId}`);
  });
});
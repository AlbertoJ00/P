import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should validate valid credentials', () => {
    // Arrange
    const username = 'admin';
    const password = '1234';

    // Act
    const isValid = authService.validateCredentials(username, password);

    // Assert
    expect(isValid).toBe(true);
  });

  it('should not validate invalid credentials', () => {
    // Arrange
    const username = 'admin';
    const password = 'wrongPassword';

    // Act
    const isValid = authService.validateCredentials(username, password);

    // Assert
    expect(isValid).toBe(false);
  });
});
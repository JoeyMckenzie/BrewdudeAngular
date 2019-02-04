import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  public static readonly PasswordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#\\$%\\^&\\*]).{8,20}$";
  public static readonly OkayPasswordLength: number = 8;
  public static readonly GoodPasswordLength: number = 12;

  constructor() { }

  /**
   * Validate the password matches the regex from the backend
   */
  public static validatePasswordMeetsRequirements(password: string): boolean {
    let passwordRegex = new RegExp(this.PasswordRegex);
    return passwordRegex.test(password);
  }
}

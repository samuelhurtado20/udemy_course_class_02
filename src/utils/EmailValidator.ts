import validator from 'email-validator'
import { IEmailValidator } from '../interfaces/IEmailValidator'

export class EmailValidatorAdapter implements IEmailValidator {
  isValid (email: string): boolean {
    return validator.validate(email)
  }
}

import validator from 'validator'
import { EmailValidatorAdapter } from '../utils/EmailValidator'

jest.mock('validator', () => ({
  isEmail () {
    return true
  }
}))

const makeSut = () => {
  return new EmailValidatorAdapter()
}

describe('Email Validator', () => {
  it('Should return false validator', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('email@email.com')
    expect(isValid).toBe(false)
  })

  it('Should return true validator', () => {
    const sut = makeSut()
    const isValid = sut.isValid('email@email.com')
    expect(isValid).toBe(true)
  })

  it('Should return format correct email of the validator', () => {
    const sut = makeSut()
    const isValidSpyOn = jest.spyOn(validator, 'isEmail')
    sut.isValid('email@email.com')
    expect(isValidSpyOn).toHaveBeenCalledWith('email@email.com')
  })
})

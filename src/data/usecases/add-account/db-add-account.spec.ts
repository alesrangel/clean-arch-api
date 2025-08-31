import { DbAddAccount } from './db-add-account'

describe('DbAddAccount UseCase', () => {
  test('should call Encrypter with correct password', () => {

    class EncrypterStub {
      async encrypt(value: string): Promise<string> {
        value = 'hashed_password'
        return new Promise(resolve => resolve(value))
      }
    }

    const encrypterStub = new EncrypterStub()
    const sut = new DbAddAccount(encrypterStub)
    const encrypterSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password'
    }
    sut.add(accountData)
    expect(encrypterSpy).toHaveBeenCalledWith('valid_password')
  })
})
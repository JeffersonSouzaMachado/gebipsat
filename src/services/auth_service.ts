export function mockedLogin(user: string, password: string) {
    return user == 'admin' && password == '1234';
}
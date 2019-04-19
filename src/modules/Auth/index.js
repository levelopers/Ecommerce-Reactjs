class Auth {
  constructor() {
    this.user_token = JSON.parse(localStorage.getItem('auth'))
    this.token = this.user_token.token
    this.userId = this.user_token.user_id
  }
  getToken() {
    return this.token
  }
  getUserId() {
    return this.userId
  }
  setUserToken(new_token) {
    this.user_token = new_token
    localStorage.setItem('auth', JSON.stringify(new_token))
  }
  logout() {
    localStorage.removeItem('auth')
  }
}
export default new Auth()
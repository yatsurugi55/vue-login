import Auth from '@/api/auth'
import axios from 'axios'
jest.mock('axios')

const authInfo = {
  email: `hoge@hoge.com`,
  password: `p@ssw0rd`
}

describe('Auth.js', () => {
  it('login', async () => {
    const userId = 111
    const token = `1234567890abcdef`
    axios.request.mockResolvedValue({ userId, token })

    const res = await Auth.login(authInfo)
    expect(res).toEqual({ userId, token })
  })

  it('logout', async () => {
    const message = `Deleted`
    axios.request.mockResolvedValue(message)
    
    const res = await Auth.logout()
    expect(res).toBe(message)
  })
})


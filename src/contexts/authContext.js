import cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

import { directus } from '@/lib/directus'

function setCookie() {
  cookie.set('session', 'true', {
    expires: 7, // 7 days
    sameSite: 'Lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production'
  })
}

async function recoverUserInformation() {
  const user = await directus.users.me.read()
  return user
}

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const session = cookie.get('session')

    if (session) {
      recoverUserInformation().then(user => {
        setUser(user)
      })
    }
  }, [setUser])

  async function signIn(data) {
    await directus.auth.login(data, { refresh: { auto: true } }).catch(err => console.log(err))

    console.log(data)
    const user = await recoverUserInformation()
    setCookie()
    setUser(user)

    router.push('/app')
  }

  async function logout() {
    router.push('/')

    directus.auth
      .logout()
      .then(() => cookie.remove('session'))
      .then(() => setUser(null))
  }

  async function resetPassword(data) {
    data.resetUrl = process.env.NEXT_PUBLIC_RESET_PASSWORD_URL
    if (!data.token) {
      await directus.auth.password.request(data.email, data.resetUrl).catch(err => console.log(err))
    } else {
      await directus.auth.password.reset(data.token, data.password).catch(err => console.log(err))

      router.push('/app/auth')
    }
  }

  async function signUp(data) {
    data.role = process.env.NEXT_PUBLIC_ROLE_ID
    try {
      await directus.users.createOne(data)
    } catch (err) {
      console.log(err)
      return
    }

    await signIn(data)
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

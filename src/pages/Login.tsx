import { useState } from "react"

const Login = () => {

    const [state, setState] = useState('login')
  return (
    <div>
        <main className="login-page-container">
            <form className="login-form">
                <h2 className="text-3xl font-medium text-gray-900 dark:text-white">
                    {state === 'login' ? 'Sign In' : 'Sign Up'}
                <p className="mt-2 text-sm text-gray-500/90">
                    {state === 'login' ? "Please enter your email and password." : "Please enter your details to create an account."}
                </p>
                </h2>
            </form>
        </main>
    </div>
  )
}

export default Login
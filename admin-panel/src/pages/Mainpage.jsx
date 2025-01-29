import React, { useState } from 'react'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import SignInModal from '../components/SignIn/SignInModal'
import SignUpModal from '../components/SignUp/SignUpModal'
import SignInStyle from './Signin.module.css'

const Mainpage = () => {
 
  const [isAuth, setIsAuth] = useState(false)
 
  return (
    

    <div className='container'>
            <h1>Zerde kidd-house</h1>
    <div className={SignInStyle.containerSignin}>
      <section className="sign-in-container">
        {isAuth ? <SignInModal /> : <SignUpModal />}
      </section>

      <footer>
        <Button onClick={() => setIsAuth(!isAuth)}>
          {isAuth ? "Зарегестрируйтесь" : "Есть аккаунт? Войдите  "}
        </Button>
      </footer>

    </div>
    </div>
  
)
}

export default Mainpage
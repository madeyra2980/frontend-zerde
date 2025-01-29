import React from "react";

const SignInModal = () => {

  

  return (
    <div className="sign-in-modal">
      <h2>Вход в личный кабинет</h2>
      <form className="sign-in-form">

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Введите email" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Пароль" 
            required 
          />
        </div>

        <button type="submit" className="submit-button">
          Войти
        </button>
      </form>
    </div>
  );
};

export default SignInModal;

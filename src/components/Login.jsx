import React from 'react'

const auth = () => {
  return (
    <div className='auth'>
      <div className="auth__wrapper">
      <form className="auth__form" name="auth-form" action="#" method="post">
      <h1 className="auth__title">Вход</h1>
      <div className="auth__input-container">
        <input type="text" className="auth__input" placeholder='Email'/>
        <span className="auth__input-error"></span>
        <input type="password" className="auth__input" placeholder='Пароль'/>
        <span className="auth__input-error"></span>
      </div>
      <button type="submit" className="auth__button">Войти</button>
      </form>
      </div>
    </div>
  )
}

export default auth 
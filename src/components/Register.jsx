import React from 'react';
import { Link } from 'react-router-dom';
import InfoTooltip from './InfoTooltip';

const Register = (props) => {
  const { onSubmit } = props;

  return (
    <div className="auth">
      <div className="auth__wrapper">
        <form
          onSubmit={onSubmit}
          className="auth__form"
          name="auth-form"
          action="#"
          method="post"
        >
          <h1 className="auth__title">Регистрация</h1>
          <div className="auth__input-container">
            <input
              type="text"
              className="auth__input"
              placeholder="Email"
            />
            <span className="auth__input-error"></span>
            <input
              type="password"
              className="auth__input"
              placeholder="Пароль"
            />
            <span className="auth__input-error"></span>
          </div>
          <button
            type="submit"
            className="auth__button"
          >
            Зарегистрироваться
          </button>
          <p className="auth__text">
            Уже зарегистрированы?&#160;
            <Link
              to="/sign-in"
              className="auth__text"
            >
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

import logo from '../images/logo_white.svg';
import {Route, Routes, Link} from 'react-router-dom'

function Header({email}) {

  return (
    <header className="header">
      <img
        src={logo}
        alt="Логотип Mesto Russia"
        className="logo"
      />
      <div className="header__wrapper">
        <Routes>

          <Route path="/" element={
            <>
              <p className='header__link'>{email}</p>
              <Link className='header__link header__link_muted' to='/sign-in'>Выйти</Link>
            </>
          }></Route>

          <Route path="/sign-up" element={
            <Link className='header__link' to='/sign-in'>Войти</Link>
          }></Route>

          <Route path="/sign-in" element="">
            <Link className='header__link' to='/sign-up'>Регистрация</Link>
          </Route>

        </Routes>
      </div>
    </header>
  );
}
export default Header;

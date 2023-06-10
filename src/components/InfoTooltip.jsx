import React from 'react';
import usePopupClose from '../hooks/usePopupClose';

const InfoTooltip = (props) => {
  const { isSuccess, isOpen, onClose } = props;
  usePopupClose(isOpen, onClose);
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className={`popup__close-button`}
          onClick={onClose}
        ></button>
        <div className={`${isSuccess ? 'popup__icon-tooltip-sucсess' : 'popup__icon-tooltip-error'}`}></div>
        <h2 className="popup__title popup__title_center">
          {isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </div>
  );
};

export default InfoTooltip;

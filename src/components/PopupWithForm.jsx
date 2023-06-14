import Popup from './Popup';

function PopupWithForm(props) {
  const { title, name, children, isOpen, onClose, onSubmit, buttonText, isValid, isLoading, isDisabled, loadingText } = props;

  return (
    <Popup
      isOpen={isOpen}
      name={name}
      onClose={onClose}
    >
      <button
        type="button"
        className={`popup__close-button popup__close-button_${name}`}
        onClick={onClose}
      />
      <h2 className="popup__title">{title}</h2>
      <form
        className={`popup__form popup__form_${name}`}
        action="#"
        method="post"
        name={`${name}-form`}
        noValidate
        onSubmit={onSubmit}
      >
        {children}
        <button
          className={`popup__button popup__button_${name} ${!isValid || isDisabled ? 'popup__button_disabled' : ''}`}
          type="submit"
          disabled={!isValid || isDisabled}
        >
          {isLoading ? loadingText : buttonText}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;

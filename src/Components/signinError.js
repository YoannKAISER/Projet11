function signInError() {
    const secondInputWrapper = document.querySelector('.input-wrapper:nth-child(2)');
    const containerErrorClassName = 'error-container';
    const errorMessageClassName = 'error-message';
    const errorText = 'Email or Password invalid !';
  
    if (
      secondInputWrapper.nextSibling &&
      !secondInputWrapper.nextSibling.classList.contains(containerErrorClassName)
    ) {
      const errorContainer = document.createElement('div');
      const errorMessage = document.createElement('span');
  
      errorContainer.className = containerErrorClassName;
      errorMessage.textContent = errorText;
      errorMessage.classList.add(errorMessageClassName);
  
      errorContainer.appendChild(errorMessage);
      secondInputWrapper.insertAdjacentElement('afterend', errorContainer);
    }
  }
  
  export default signInError;
if (window.location.href.indexOf('http') !== -1) {
  window.onload = () => {
    const validateContainer = document.createElement('div');
    validateContainer.style = 'text-align:center;';

    const validateHTML = document.createElement('button');
    // how would you label this button with ARIA?
    validateHTML.innerHTML = 'validate HTML';
    validateHTML.onclick = () => window.open('https://validator.w3.org/nu/?doc=' + encodeURIComponent(window.location.href), '_blank');
    validateContainer.appendChild(validateHTML);

    const validateCSS = document.createElement('button');
    // how would you label this button with ARIA?
    validateCSS.innerHTML = 'validate CSS';
    validateCSS.onclick = () => window.open('https://jigsaw.w3.org/css-validator/validator?uri=' + encodeURIComponent(window.location.href), '_blank');
    validateContainer.appendChild(validateCSS);

    const developmentStrategyButton = document.createElement('button');
    // how would you label this button with ARIA?
    developmentStrategyButton.innerHTML = 'development strategy';
    const developmentStrategyA = document.createElement('a');
    developmentStrategyA.href = './development-strategy';
    developmentStrategyA.appendChild(developmentStrategyButton);
    validateContainer.appendChild(developmentStrategyA);

    document.body.insertBefore(validateContainer, document.body.firstChild);
  }
}


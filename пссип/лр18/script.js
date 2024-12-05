function validateForm() {
    resetErrors();
  
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(checkbox => checkbox.value);
    const genderError = document.getElementById('genderError');
  
    let isValid = true;
  
    if (name.value.trim() === "") { //на пустое
      showError(name, "Имя обязательно для заполнения");
      isValid = false;
    } else if (!/^[А-Яа-яЁёA-Za-z\s]+$/.test(name.value)) { // регулярное выражение для букв
      showError(name, "Имя должно содержать только буквы");
      isValid = false;
    }
  
    if (surname.value.trim() === "") {
      showError(surname, "Фамилия обязательна для заполнения");
      isValid = false;
    } else if (!/^[А-Яа-яЁёA-Za-z\s]+$/.test(surname.value)) {
      showError(surname, "Фамилия должна содержать только буквы");
      isValid = false;
    }
  
    if (email.value.trim() === "") {
      showError(email, "Email обязателен для заполнения");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { 
      showError(email, "Введите корректный email");
      isValid = false;
    }
  
    if (!gender) {
      genderError.style.display = 'block';
      isValid = false;
    } else {
      genderError.style.display = 'none'; 
    }
  
    if (isValid) {
      const result = `
        Данные формы:
        Имя: ${name.value}
        Фамилия: ${surname.value}
        Email: ${email.value}
        Пол: ${gender.value}
        Страна: ${country}
        Хобби: ${hobbies.length > 0 ? hobbies.join(', ') : 'Не выбрано'}
      `;
  
      alert(result);
    }
  }
  
  function resetErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(error => error.style.display = 'none');
  
    const inputs = document.querySelectorAll('.input-error');
    inputs.forEach(input => input.classList.remove('input-error'));
  }
  
  function showError(input, message) {
    input.classList.add('input-error');
    const errorElement = document.createElement('span');
    errorElement.className = 'error';
    errorElement.textContent = message;
    input.parentNode.insertBefore(errorElement, input.nextSibling);
  }
  
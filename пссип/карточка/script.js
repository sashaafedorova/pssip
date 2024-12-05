document.getElementById('contactForm').onsubmit = function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Пожалуйста, введите корректный email.');
            return;
        }

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h2>Полученные данные:</h2>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Сообщение:</strong> ${message}</p>
        `;

        document.cookie = `name=${encodeURIComponent(name)}; path=/;`;
        document.cookie = `email=${encodeURIComponent(email)}; path=/;`;
        document.cookie = `message=${encodeURIComponent(message)}; path=/;`;

        const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [key, value] = cookie.split('=');
            acc[key] = decodeURIComponent(value);
            return acc;
        }, {});

        resultDiv.innerHTML += `
            <h2>Данные из cookie:</h2>
            <p><strong>Имя:</strong> ${cookies.name || 'нет данных'}</p>
            <p><strong>Email:</strong> ${cookies.email || 'нет данных'}</p>
            <p><strong>Сообщение:</strong> ${cookies.message || 'нет данных'}</p>
        `;

        
        document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
        document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
        document.cookie = 'message=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
        
        const jsonData = JSON.stringify({ name, email, message });
        console.log('Данные в формате JSON:', jsonData);

    };
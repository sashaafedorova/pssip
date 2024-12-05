    document.getElementById('testButton').onclick = function() {
        const inputText = document.getElementById('inputText').value;
        const regexInput = document.getElementById('regexInput').value;
        const regex = new RegExp(regexInput, 'i');
        const result = regex.test(inputText);
        document.getElementById('result').innerText = `Результат test(): ${result}`;
    };

    document.getElementById('execButton').onclick = function() {
        const inputText = document.getElementById('inputText').value;
        const regexInput = document.getElementById('regexInput').value;
        const regex = new RegExp(regexInput);
        const match = regex.exec(inputText);
        document.getElementById('result').innerText = match ? `Результат exec(): ${match[0]}` : 'Нет совпадений';
    };

    document.getElementById('splitButton').onclick = function() {
        const inputText = document.getElementById('inputText').value;
        const regexInput = document.getElementById('regexInput').value;
        const regex = new RegExp(regexInput);
        const result = inputText.split(regex);
        document.getElementById('result').innerText = `Результат split(): ${result.join(', ')}`;
    };

    document.getElementById('matchButton').onclick = function() {
        const inputText = document.getElementById('inputText').value;
        const regexInput = document.getElementById('regexInput').value;
        const regex = new RegExp(regexInput, 'g');
        const matches = inputText.match(regex);
        document.getElementById('result').innerText = matches ? `Результат match(): ${matches.join(', ')}` : 'Нет совпадений';
    };

    document.getElementById('searchButton').onclick = function() {
        const inputText = document.getElementById('inputText').value;
        const regexInput = document.getElementById('regexInput').value;
        const regex = new RegExp(regexInput);
        const index = inputText.search(regex);
        document.getElementById('result').innerText = `Результат search(): ${index >= 0 ? index : 'Нет совпадений'}`;
    };

    document.getElementById('replaceButton').onclick = function() {
        const inputText = document.getElementById('inputText').value;
        const regexInput = document.getElementById('regexInput').value;
        const regex = new RegExp(regexInput, 'g');
        const replacement = prompt('Введите текст для замены:');
        const result = inputText.replace(regex, replacement);
        document.getElementById('result').innerText = `Результат replace(): ${result}`;
    };
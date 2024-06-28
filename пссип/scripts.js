// Работа с объектом Math
function calculateX(a, x) {
    try {
        const numerator = Math.sqrt(12 * Math.pow(a, 2) + Math.sqrt(7 * a) - 16);
        const denominator = Math.sin(3 * x);
        
        if (denominator === 0) {
            throw new Error("Ошибка: деление на ноль");
        }
        
        const result = numerator / denominator;
        return result;
    } catch (error) {
        alert(error.message);
        return null;
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('calculateButton').addEventListener('click', () => {
        const a = parseFloat(document.getElementById('aInput').value);
        const x = parseFloat(document.getElementById('xInput').value);
        const result = calculateX(a, x);
        if (result !== null) {
            document.getElementById('mathOutput').innerText = "Результат вычисления: " + result;
        }
    });
});

// Работа со строками STRING
function stringTasks() {
    const s1 = "Я люблю Беларусь";
    const s2 = "Я учусь в Политехническом колледже";
    
    const lengthS2 = s2.length;

    const index = 9; 
    const charAt21 = s1.charAt(index);
    const asciiCode = charAt21.charCodeAt(0);

    const modifiedS1 = s1.replace("Беларусь", "Гродно");

    const output = `
        Длина строки S2: ${lengthS2}<br>
        21-й символ в строке S1: ${charAt21} (ASCII-код: ${asciiCode})<br>
        Измененная строка S1: ${modifiedS1}
    `;

    document.getElementById("stringOutput").innerHTML = output;
}

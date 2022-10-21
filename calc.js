button.onclick = function() {
    let result = 0;
    const numberString1 = prompt("Введите первое число:");
    let num1 = Number(numberString1);
    const numberString2 = prompt("Введите второе число:");
    let num2 = Number(numberString2);

    
    const action = prompt ("Введите действие:  +   сложить \n                                 -   вычесть \n                                 *   умножить \n                                 /   разделить");

    if (action == '+') {
      result = num1 + num2;;
    } else if (action == '*') {
      result = num1 * num2;
    } else if (action == '-') {
      result = num1 - num2;
    } else if (action == '/') {
      result = num1 / num2;  
    } else {
      alert('Неправильная операция');
      return;
    }

    alert('Ваш правильный результат: ' + result);
    
  };
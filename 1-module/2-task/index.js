/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...      let flag = false;
        flag = false;
        let numberOfElements = name.length; // считаем количество элементов в строке
        if (numberOfElements < 4 && flag == false) {
         flag = true;} else {
          for ( i = 0; i < numberOfElements; i++ ){
              if ( name[i] == ' ' && flag == false) {
                  flag = true;
                    } 
                 }
              }
              return(flag);
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

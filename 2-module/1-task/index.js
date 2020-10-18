/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    let Number = 0;
    for( let key in salaries){
        if (typeof(salaries[key]) === "number"){
            Number += salaries[key];
        } 
  }
    return(Number);
}


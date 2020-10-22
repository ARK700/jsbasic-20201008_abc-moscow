/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let i = 0;
  let kostyl = [];
  while(i < users.length){
      let orange = users[i];
      orange = orange.name;
      kostyl.push(orange);
      i++;

          }
  return kostyl;
}

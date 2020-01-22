/*jshint esversion: 6 */
function jsPractice3() {
var result=prompt("Какой ваш возраст?");

if(result) { 
   alert(`Поздравляем, вам ${result} полных лет`);
   if(result>18) {
      alert("Поздравляем, вы уже совершеннолетний пользователь");
   }
}
  
}
document.getElementById('jsPractice3').addEventListener('click', jsPractice3);

  /*jshint esversion: 6 */
  function jsPractice4(){
    var result;
  function ucFirst(str) {
     if (str === false) return str;
     str = str.toLowerCase();
     result = str[0].toUpperCase() + str.slice(1);
     return result;
  }


   var data = [
   {
     firstName: 'Ashton',
     lastName: 'Kutcher',
     age: 40
  }, {
     firstName: 'Bradley',
     lastName: 'Pitt',
     age: 54
  }, {
     firstName: 'Hannah',
     lastName: 'Dakota',
     age: 24
  }
  ];


  var str = prompt("Введите фамилию для поиска");

  ucFirst(str);
  str = result;
  if (str === true) {
   alert("Фамилия не выбрана");
   return;
}

for (var i = data.length - 1; i >= 0; i--) {
     result = "";
      if (data[i].lastName === str){

        result = "user name: " + data[i].firstName + " " + data[i].lastName + "\n";
        result += "user age: " + data[i].age; 
 
         break; 
      }
   }
   if (result){
      alert(result);
   }else{
     alert("Last name not found");
   }

}

document.getElementById('jsPractice4').addEventListener('click', jsPractice4);
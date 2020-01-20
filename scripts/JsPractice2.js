
function jsPractice2() {
    var varNumber = 12;
    var varString = "Lorem ipsum dolor.";
    var varBool = true;
    var varNull = null;
    var varUndef;
    var varObj = {};
    var varArr = ["arr"];

    alert(varNumber + "<==>" + varString + "<==>" + varBool  + "<==>" + varNull + "<==>" + varUndef + "<==>" + varObj + "<==>" + varArr);
    console.log(varNumber, varString, varBool, varNull, varUndef, varObj, varArr);
}
document.getElementById('jsPractice2').addEventListener('click', jsPractice2);
function process (){
    var name=document.getElementById("name").value;
    var agebox= document.getElementById("agebox").value;
    var monthlysalary= document.getElementById("total monthly salarybox").value;
    var total= monthlysalary*12;
    
    if(agebox>25 && total >= 100000)
{p1.innertext= name + ' your total yearly bonus amount is ' + total*.20;

}
        
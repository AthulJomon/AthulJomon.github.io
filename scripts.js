function solve()
{
    let num1=document.getElementById("number1").value;
    let num2=document.getElementById("number2").value;
    let ansH,ansL;
    let temp1=num1,temp2=num2;
    while(true){
        let q1=temp1%temp2;
        if(q1==0){
            ansH=temp2;
            ansL=temp1*temp2/ansH;
            break;
        }
        else{
            temp1=temp2;
            temp2=temp1/temp2;
        }
    }
    document.getElementById("intro").innerHTML="The given inputs are "+num1+ " and "+num2;
    document.getElementById("answerH").innerHTML="HCF : "+ansH;
    document.getElementById("answerL").innerHTML="LCM : "+ansL;
}
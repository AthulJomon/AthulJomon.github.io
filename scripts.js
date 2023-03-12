function solve()
{
    let num1=Number(document.getElementById("number1").value);
    let num2=Number(document.getElementById("number2").value);
    let rem,ansH,ansL,temp1,temp2;
    while(true){
        if(num1>num2){
            temp1=num1;
            temp2=num2;
        }
        else{
            temp1=num2;
            temp2=num1;
        }
        rem=temp1%temp2;
        if(rem==0){
            ansH=temp2;
            ansL=temp1*temp2/ansH;
            break;
        }
        else{
            temp1=temp2;
            temp2=temp1%temp2;
        }
    }
    document.getElementById("intro").innerHTML="The given inputs are "+num1+ " and "+num2;
    document.getElementById("answerH").innerHTML="HCF : "+ansH;
    document.getElementById("answerL").innerHTML="LCM : "+ansL;
}
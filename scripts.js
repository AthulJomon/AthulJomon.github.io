function solve()
{
    let num1=Number(document.getElementById("number1").value);
    let num2=Number(document.getElementById("number2").value);
    let ansH,ansL,temp1,temp2;
    
    if(num1==0||num2==0){
        ansH=num1!=0?num1:num2;
        ansL=NaN;
        print(num1,num2,ansH,ansL);
        return;
    }

    if(num1>num2){
        temp1=num1;
        temp2=num2;
    }
    else{
        temp1=num2;
        temp2=num1;
    }

    ansH=calculate(temp1,temp2);
    ansL=num1*num2/ansH;
    print(num1,num2,ansH,ansL);
    return;
}
function calculate(a,b){
    if(b==0)
        return a;
    calculate(b,a%b);
}
function print(num1,num2,ansH,ansL){
    document.getElementById("intro").innerHTML="The given inputs are "+num1+ " and "+num2;
    document.getElementById("answerH").innerHTML="HCF : "+ansH;
    document.getElementById("answerL").innerHTML="LCM : "+ansL;
}
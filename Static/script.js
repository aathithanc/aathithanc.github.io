
//Digital Clock (Top Right)
// Adapted from https://www.ricocheting.com/code/javascript/html-generator/date-time-clock

let dayIndex    = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthIndex  = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//Static Time
function digitalClock(){
let d=new Date();
let nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
let nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
let clocktext=""+dayIndex[nday]+", "+monthIndex[nmonth]+" "+ndate+", "+nyear+" "+nhour+" :"+nmin+" :"+nsec+"";
document.getElementById('clock-top-right').innerHTML=clocktext;
}
digitalClock();

//Ticking Time
setInterval(digitalClock,1000);


// Button-Balance

function btnBalance(){
    let remove1 = document.getElementById('text');
    remove1.classList.add('text1');

    let remove10 = document.getElementById('info');
    remove10.classList.add('information-2');
    
    let element = document.getElementById('image');
    element.classList.add('imageblur');
   
    document.getElementById('balanceTitle').style.display="block";
    document.getElementById('balanceMain').style.display="block";

    document.getElementById('incomingTitle').style.display="none";
    document.getElementById('incomingMain').style.display="none";

    document.getElementById('outgoingTitle').style.display="none";
    document.getElementById('outgoingMain').style.display="none";

    document.getElementById('dueTitle').style.display="none";
    document.getElementById('dueMain').style.display="none";

document.getElementById('info').style.display="none";

}

// Button-Incoming
function btnIncoming(){
    

    let remove2 = document.getElementById('text');
    remove2.classList.add('text2');

    let remove20 = document.getElementById('info');
    remove20.classList.add('information-2');

    let element = document.getElementById('image');
    element.classList.add('imageblur2');

    document.getElementById('balanceTitle').style.display="none";
    document.getElementById('balanceMain').style.display="none";

    document.getElementById('incomingTitle').style.display="block";
    document.getElementById('incomingMain').style.display="block";

    document.getElementById('outgoingTitle').style.display="none";
    document.getElementById('outgoingMain').style.display="none";

    document.getElementById('dueTitle').style.display="none";
    document.getElementById('dueMain').style.display="none";

    document.getElementById('information').style.display="none";
}

// Button Outgoing

function btnOutgoing(){
    let remove3 = document.getElementById('text');
    remove3.classList.add('text3');

    let remove30 = document.getElementById('info');
    remove30.classList.add('information-2');
    
    let element = document.getElementById('image');
    element.classList.add('imageblur3');

    document.getElementById('balanceTitle').style.display="none";
    document.getElementById('balanceMain').style.display="none";

    document.getElementById('incomingTitle').style.display="none";
    document.getElementById('incomingMain').style.display="none";

    document.getElementById('outgoingTitle').style.display="block";
    document.getElementById('outgoingMain').style.display="block";

    document.getElementById('dueTitle').style.display="none";
    document.getElementById('dueMain').style.display="none";

    document.getElementById('information').style.display="none";
}

// Button Due

function btnDue(){
    
    let remove4 = document.getElementById('text');
    remove4.classList.add('text4');

    let remove40 = document.getElementById('info');
    remove40.classList.add('information-2');

    let element = document.getElementById('image');
    element.classList.add('imageblur4');

    document.getElementById('balanceTitle').style.display="none";
    document.getElementById('balanceMain').style.display="none";

    document.getElementById('incomingTitle').style.display="none";
    document.getElementById('incomingMain').style.display="none";

    document.getElementById('outgoingTitle').style.display="none";
    document.getElementById('outgoingMain').style.display="none";

    document.getElementById('dueTitle').style.display="block";
    document.getElementById('dueMain').style.display="block";

    document.getElementById('information').style.display="none";
    


}



function addTwoNumbers(textBox1, textBox2, textBox3){
    var x=document.getElementById(textBox1).value;
    var y=document.getElementById(textBox2).value;
    var q=document.getElementById(textBox3).value;
    
     let sumOutput = document.getElementById('monthly-net-result');
     let sumOutput2 = document.getElementById('yearly-net-result');
     let overview1 = document.getElementById('total-earnings')


     
     var sum=0;
     sum=Number(x)+Number(q)+ (Number(y) * 0.25);
     
     var sum2=0;
     sum2= (Number(x)+Number(q)) * 12 + (Number(y) *2); 

    
  
    sumOutput.innerHTML = '$' + sum;
    sumOutput2.innerHTML = '$' + sum2;
    overview1.innerHTML = '$' + sum2;

    

    
    
}


function addTwoNumbersAgain(textBox10, textBox20, textBox30, textBox40, textBox50, textBox60, textBox70){
    
    
    var x2=document.getElementById(textBox10).value;
    var y2=document.getElementById(textBox20).value;
    var q2=document.getElementById(textBox30).value;
    var w2=document.getElementById(textBox40).value;
    var e2=document.getElementById(textBox50).value;
    var u2=document.getElementById(textBox60).value;
    var i2=document.getElementById(textBox70).value;
    

     let sumOutput3 = document.getElementById('monthly');
     let sumOutput4 = document.getElementById('yearly');
     let overview2 = document.getElementById('total-expenses');
     let monthlyProfit = document.getElementById('monthly-profits');
     
    var sum3=0;
    sum3=Number(x2)+(Number(y2)*0.25)+Number(q2)+Number(w2)+Number(e2)+Number(u2)+Number(i2);
    
    var sum4=0;
    sum4= (Number(x2)+Number(q2)+Number(w2)+Number(e2)+Number(u2)) * 12 +Number(i2) +(Number(y2)*2);

    

   

    
    sumOutput3.innerHTML = '$' + sum3;
    sumOutput4.innerHTML = '$' + sum4;
    overview2.innerHTML = '$' + sum4;
    
     
}






function calculate( textBox1, textBox2, textBox3, textBox10, textBox20, textBox30, textBox40, textBox50, textBox60, textBox70){
    var x=document.getElementById(textBox1).value;
    var y=document.getElementById(textBox2).value;
    var q=document.getElementById(textBox3).value;
    var x2=document.getElementById(textBox10).value;
    var y2=document.getElementById(textBox20).value;
    var q2=document.getElementById(textBox30).value;
    var w2=document.getElementById(textBox40).value;
    var e2=document.getElementById(textBox50).value;
    var u2=document.getElementById(textBox60).value;
    var i2=document.getElementById(textBox70).value;

     
     let monthlyProfit = document.getElementById('monthly-profits');
     let yearlyProfit = document.getElementById('yearly-profits');
     let savings = document.getElementById('savings');
     let emergency = document.getElementById('emergency');
     let free = document.getElementById('free-expenses');


     var sum=0;
     sum=Number(x)+Number(q)+ (Number(y) * 0.25);
     
     var sum2=0;
     sum2= (Number(x)+Number(q)) * 12 + (Number(y) *2); 

     var sum3=0;
     sum3=Number(x2)+(Number(y2)*0.25)+Number(q2)+Number(w2)+Number(e2)+Number(u2)+Number(i2);
     
     var sum4=0;
     sum4= (Number(x2)+Number(q2)+Number(w2)+Number(e2)+Number(u2)) * 12 +Number(i2) +(Number(y2)*2);

    var sum5=0;
    sum5= Number(sum)- Number(sum3);

    var sum6=0;
    sum6= parseInt(sum2) - parseInt(sum4);

    var sum7=0;
    sum7= parseInt(sum5) * 0.2;

    var sum8=0;
    sum8= parseInt(sum5) *0.1;

    var sum9=0;
    sum9= parseInt(sum5) * 0.7;

    var sum10=0;
    


    monthlyProfit.innerHTML = '$' + sum5;
    yearlyProfit.innerHTML = '$' + (sum6);
    savings.innerHTML = '$' + parseInt(sum7);
    emergency.innerHTML = '$' + parseInt(sum8);
    free.innerHTML = '$' + parseInt(sum9);

    
   
   

    if (sum7 < 0){
        savings.innerHTML = '$' + sum10;
    }

    if (sum8 < 0){
        emergency.innerHTML = '$' + sum10;
    }

    if (sum9 < 0){
        free.innerHTML = '$' + sum10;
    }

}


function refreshPage() {
    window.location.reload();
}



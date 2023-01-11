const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".cancel");
const input = document.querySelector(".orderno");
const btn = document.querySelector(".check");
const head=document.querySelector(".head4");
const head2=document.querySelector(".main");
const head3=document.querySelector(".orderid");
const head_2=document.querySelector(".head_2");
const cancel=document.querySelector(".five");
const canc=document.querySelector(".canc");
const checkstatus=()=>{
    console.log(input.value)
    head.innerHTML="Order No : #"+input.value
    const data={
        "id":"1",
		"SortAs": "SGML",
		"GlossTerm": "Standard Generalized Markup Language",
		"Acronym": "SGML",
		"Abbrev": "ISO 8879:1986",
        "status":"cancelled"
    }
    const val=(data.status);
    head_2.innerHTML="#"+val;
    head3.innerHTML="#"+input.value;
    if(val==="Picked"){
        one.classList.add("active");
        two.classList.remove("active");
        three.classList.remove("active");
        four.classList.remove("active");
        five.classList.remove("active");

    }
    else if(val==="Processing"){
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");

    }
    else if(val==="out for delivery"){
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");

    }
    else if(val==='delivered'){
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");

    }
    else if (val==="cancelled"){
        canc.style.display="none"
        five.style.display="block";
        cancel.classList.add("active1")
        
    }
}

btn.onclick=function(){
    checkstatus()
}



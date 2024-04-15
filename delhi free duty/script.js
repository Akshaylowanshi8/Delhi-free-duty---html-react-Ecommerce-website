
// =======================================================shop1=============================================================================================


async function cards(){
 try{ let data = await fetch("http://localhost:3000/products");
let response = await data.json();


document.getElementById("shop1").innerHTML= response.map( items => `<div onmouseenter="ent()" onmouseleave="out()" id="outcard">
<div id="card">
    <div id="qq">
    <img src="https://delhidutyfree.co.in/media/wysiwyg/product_labels/OFFER.png" id="logo1" width="120px" alt="logo1">
    <img src="https://delhidutyfree.co.in/media/wysiwyg/product_labels/BESTSELLER.png" id="cardimg2" width="120px" alt="logo2"> </div><br>

<div id="m">
    <div ><img id="simg" id="cardimg3" height="250px" width="250px" src="${items.main1img}"alt="mainimg">   
     </div> 
</div>
<p id="para">${items.discripion} <br><span id="accprice">${items.price}</span> <SPan id="overprice">${items.overprice}</SPan></p>

<br>
<button id="addcard">add card</button></div>

</div>`).join("");

}
catch (error) {
    alert("sorry server down")
  }
};
cards();

// ------------------------------cardcurser-----------------------------------------------------------
let a=1;
function crig(){

    if(a==1){
    document.getElementById("shop1").style.marginLeft="-600px"
    document.getElementById("shop1").style.transition="all 1s"
a=2;}
else if(a==2){
    document.getElementById("shop1").style.marginLeft="-1200px"
    document.getElementById("shop1").style.transition="all 2s"
a=3;}
else if(a==3){
    document.getElementById("shop1").style.marginLeft="-1800px"
    document.getElementById("shop1").style.transition="all 2s"
a=4;}
 else if(a==4){
    document.getElementById("shop1").style.marginLeft="-2400px"
    document.getElementById("shop1").style.transition="all 2s"
a=5;}
else if(a==5){
    document.getElementById("shop1").style.marginLeft="-3000px"
    document.getElementById("shop1").style.transition="all 2s"
a=6;}
 else if(a==6){
    document.getElementById("shop1").style.marginLeft="-3300px"
    document.getElementById("shop1").style.transition="all 2s"
a=7;}
else if(a==7){
    document.getElementById("shop1").style.marginLeft="-3600px"
    document.getElementById("shop1").style.transition="all 2s"
a=8;}
 else if(a==8){
    document.getElementById("shop1").style.marginLeft="-3900px"
    document.getElementById("shop1").style.transition="all 2s"
a=9;}
else if(a==9){
    document.getElementById("shop1").style.marginLeft="-4100px"
    document.getElementById("shop1").style.transition="all 2s"
a=9}
else if(a==9){
    document.getElementById("shop1").style.marginLeft="-4400px"
    document.getElementById("shop1").style.transition="all 2s"
a=1}
}

function crig1(){

    if(a==1){
    document.getElementById("beauty").style.marginLeft="-600px"
    document.getElementById("beauty").style.transition="all 1s"
a=2;}
else if(a==2){
    document.getElementById("beauty").style.marginLeft="-1200px"
    document.getElementById("beauty").style.transition="all 2s"
a=3;}
else if(a==3){
    document.getElementById("beauty").style.marginLeft="-1800px"
    document.getElementById("beauty").style.transition="all 2s"
a=4;}
 else if(a==4){
    document.getElementById("beauty").style.marginLeft="-2400px"
    document.getElementById("beauty").style.transition="all 2s"
a=5;}
else if(a==5){
    document.getElementById("beauty").style.marginLeft="-3000px"
    document.getElementById("beauty").style.transition="all 2s"
a=6;}
 else if(a==6){
    document.getElementById("beauty").style.marginLeft="-3300px"
    document.getElementById("beauty").style.transition="all 2s"
a=7;}
else if(a==7){
    document.getElementById("beauty").style.marginLeft="-3600px"
    document.getElementById("beauty").style.transition="all 2s"
a=8;}
 else if(a==8){
    document.getElementById("beauty").style.marginLeft="-3900px"
    document.getElementById("beauty").style.transition="all 2s"
a=9;}
else if(a==9){
    document.getElementById("beauty").style.marginLeft="-4100px"
    document.getElementById("beauty").style.transition="all 2s"
a=9}
else if(a==9){
    document.getElementById("beauty").style.marginLeft="1px"
    document.getElementById("beauty").style.transition="all 2s"
a=1}
}
aa=1
function  clef(){
    if(a==1){
        document.getElementById("shop1").style.marginLeft="600px"
        document.getElementById("shop1").style.transition="all 1s"
    a=2;}
}
    


// ----------------------------------------------------beauty--------------------------------------------------


async function cards2(){
    let data = await fetch("http://localhost:3000/products");
    let response = await data.json();
    let beauty=response.filter(items=>items.typei==="makup")
    
    document.getElementById("beauty").innerHTML= beauty.map( items => `<div onmouseenter="ent()" onmouseleave="out()" id="outcard">
    <div id="card">
        <div id="qq">
        <img src="https://delhidutyfree.co.in/media/wysiwyg/product_labels/OFFER.png" id="logo1" width="120px" alt="logo1">
        <img src="https://delhidutyfree.co.in/media/wysiwyg/product_labels/BESTSELLER.png" id="cardimg2" width="120px" alt="logo2"> </div><br>
    
    <div id="m">
        <div ><img id="simg" id="cardimg3" height="250px" width="250px" src="${items.main1img}"alt="mainimg">   
         </div> 
    </div>
    <p id="para">${items.discripion} <br><span id="accprice">${items.price}</span> <SPan id="overprice">${items.overprice}</SPan></p>
    
    <br>
    <button id="addcard">add card</button></div>
    
    </div>`).join("");
    
    }
    cards2();

// -----------------------------------------------perfume-------------


async function cards3(){
    let data = await fetch("http://localhost:3000/products");
    let response = await data.json();
    let per = response.filter(items=>items.typei==="perfumes")
    
    document.getElementById("perfume").innerHTML= per.map( items => `<div onmouseenter="ent()" onmouseleave="out()" id="outcard">
    <div id="card">
        <div id="qq">
        <img src="https://delhidutyfree.co.in/media/wysiwyg/product_labels/OFFER.png" id="logo1" width="120px" alt="logo1">
        <img src="https://delhidutyfree.co.in/media/wysiwyg/product_labels/BESTSELLER.png" id="cardimg2" width="120px" alt="logo2"> </div><br>
    
    <div id="m">
        <div ><img id="simg" id="cardimg3" height="250px" width="250px" src="${items.main1img}"alt="mainimg">   
         </div> 
    </div>
    <p id="para">${items.discripion} <br><span id="accprice">${items.price}</span> <SPan id="overprice">${items.overprice}</SPan></p>
    
    <br>
    <button id="addcard">add card</button></div>
    
    </div>`).join("");
    
    }
    cards3();


    function fff(){

        if(a==1){
        document.getElementById("perfume").style.marginLeft="-600px"
        document.getElementById("perfume").style.transition="all 1s"
    a=2;}
    else if(a==2){
        document.getElementById("perfume").style.marginLeft="-1200px"
        document.getElementById("perfume").style.transition="all 2s"
    a=3;}
    else if(a==3){
        document.getElementById("perfume").style.marginLeft="-1800px"
        document.getElementById("perfume").style.transition="all 2s"
    a=4;}
     else if(a==4){
        document.getElementById("perfume").style.marginLeft="-2400px"
        document.getElementById("perfume").style.transition="all 2s"
    a=5;}
    else if(a==5){
        document.getElementById("perfume").style.marginLeft="-3000px"
        document.getElementById("perfume").style.transition="all 2s"
    a=6;}
     else if(a==6){
        document.getElementById("perfume").style.marginLeft="-3300px"
        document.getElementById("perfume").style.transition="all 2s"
    a=7;}
    else if(a==7){
        document.getElementById("perfume").style.marginLeft="-3600px"
        document.getElementById("perfume").style.transition="all 2s"
    a=8;}
     else if(a==8){
        document.getElementById("perfume").style.marginLeft="-3900px"
        document.getElementById("perfume").style.transition="all 2s"
    a=9;}
    else if(a==9){
        document.getElementById("perfume").style.marginLeft="-4100px"
        document.getElementById("perfume").style.transition="all 2s"
    a=9}
    else if(a==9){
        document.getElementById("perfume").style.marginLeft="1px"
        document.getElementById("perfume").style.transition="all 2s"
    a=1}
    }
    aa=1
    function  clef3(){
        if(a==1){
            document.getElementById("perfumes").style.marginLeft="600px"
            document.getElementById("perfumes").style.transition="all 1s"
        a=2;}
    }
            
    
    
    setInterval(run,3000);
flag=1
    function run(){
        if (flag==1)
           {document.getElementById("3img1").style.marginLeft= "0px";
           document.getElementById("3img1").style.transition="all 2s";
        flag=2;}
        else if (flag==2){
            document.getElementById("3img1").style.marginLeft= "-1330px"
            flag=3;

        }
        else if (flag==3){
            document.getElementById("3img1").style.marginLeft= "-2650px"
            flag=4;
        }
        else if (flag==4){
            document.getElementById("3img1").style.marginLeft= "-3980px"
            flag=1;
        }


}
// ---------------------------------------popup-----------------------------------------------------------------------------------------
(function(){
    setTimeout(feb,100)
    function feb(){
     document.getElementById("onload").innerHTML=`
    <div id="body">

        <div id="box">
            <img height="150px" src="https://delhidutyfree.co.in/media/wysiwyg/imgpsh_fullsize_anim_1.jpeg" alt="img coming soon">
            <h1>
                are you of legal <br> drinking age? 
            </h1>
            <p>this website requires you to be 25 years or older enter <br>delhidutyfree.co.in  </p>
            <ul id="log">
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li> <i class="fa-brands fa-linkedin"></i></li>
            </ul>
            <div id="butt">
                <button onclick="rest()">yes,i am</button>
                <button onclick="rest1()">no, i'm not</button>

            </div>

        </div>
        
    </div>`


    document.getElementById("www").style.overflowY = "hidden";
    
     
}
})()


function rest(){
    document.getElementById("onload").style.display = "none"
    document.getElementById("www").style.overflowY = "auto";

}
function rest1(){

    document.getElementById("onload").innerHTML=`<div id="body">
    <div id="boxx">

<img height="160px" src="https://delhidutyfree.co.in/media/wysiwyg/imgpsh_fullsize_anim_1.jpeg" alt="img coming soon">

<h1> <i class="fa-solid fa-ban"></i>  we're sorry!</h1>

<h4>you must be 25 yeres of age or older to enter thid side</h4></div>
</div>`

    // document.getElementById("onload").style.display = "none"



}
// ------------------------------------------------------------------no----------------------------------------------------------------------------
// admindeshbor

let btn = document.getElementById("button");
btn.addEventListener("click",()=>{


    let names = document.getElementById("name").value;
let email= document.getElementById("email").value;
let passwerd = document.getElementById("pass").value;
let cpasswerd = document.getElementById("cpass").value

    if(names== "" && email =="" && mobile=="" && passwerd=="")
{alert("fill all detal");
location.reload();
}
   items={ 
            names:names,
            email:email,
            mobile:mobile,
            passwerd:passwerd,
            cpasswerd:cpasswerd
        }

        fetch(" http://localhost:3000/users",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(items)
        }).then(alert("ragistation succecessfully")
        .then(window.open("./login.html")))
});
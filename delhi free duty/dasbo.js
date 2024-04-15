async function allrec(){
try{
    let data = await fetch("http://localhost:3000/products");
   let response = await data.json();
   document.getElementById("allrec").innerHTML=  response.length;
  
   let user=response.filter(items=>items.typei==="users");
   document.getElementById("user").innerHTML =user.length;
   console.log(user);
   
   let beauty=response.filter(items=>items.typei==="makup");
   document.getElementById("makup").innerHTML =beauty.length;

   let dri=response.filter(items=>items.typei==="drink");
   console.log(dri);
   document.getElementById("brink").innerHTML =dri.length;
   
   let per = response.filter(items=>items.typei==="perfumes");

   document.getElementById("tecrec").innerHTML = per.length;

  }
  catch (error) {
    return error.message;
  }

}

  

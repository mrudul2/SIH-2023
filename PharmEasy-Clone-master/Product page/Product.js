

// Narbar Login

var loginstatus = JSON.parse(localStorage.getItem("PhoneNumber")) || [];

//log out funnction
function logoutFunc(){
    localStorage.clear();
    alert("Log Out Succesfully ");
    window.location.href="Product.html";  
}

function ShopFunc(){

}

function carFunc(){

}

function OfferFunc(){

}

//  Login Page 

if(loginstatus.length>0){
    // document.getElementById("loginbtn").innerHTML=<i class="fa-solid fa-user"></i>;
    document.getElementById("loginbtn").innerText="Team Titan";
    // document.getElementById("LoginToViewOffer").innerText="Hurray ! Click Here To View Offers"
    var div = document.createElement("div");
        div.setAttribute("class" ,"dropdown");
        var span = document.createElement("span");
        span.innerText="See More";
       
        var div2= document.createElement("div");
        div2.setAttribute('class', "dropdown-content");
        var p = document.createElement("p");
        p.setAttribute("id","logoutNavBar");
        p.addEventListener("click", logoutFunc);
        p.innerText= "Log Out";

        var p2 = document.createElement("p");
        p2.addEventListener("click", ShopFunc);
        p2.innerText= "Shop";

        var p3 = document.createElement("p");
        p3.addEventListener("click", carFunc);
        p3.innerText= "Cart";

        var p4 = document.createElement("p");
        p4.addEventListener("click", OfferFunc);
        p4.innerText= "Offer";

        div2.append(p2,p3,p4,p);
        div.append(span ,div2);
        document.getElementById("navbarLogin").append(div);

  }
 
document.querySelector("#loginbtn").addEventListener("click", validateLogin)


function validateLogin(){
        console.log(loginstatus.length)
      if(loginstatus.length==0){
        showlogin();
      }
      
}

function showlogin() {
    document.querySelector("#loginpage").style.display = "block";
  
    document.querySelector("#loginpage").style.opacity = "1";

}
document.querySelector("#closebtn").addEventListener("click", hidelogin)

function hidelogin() {
    document.querySelector("#loginpage").style.display = "none";
    document.querySelector('body').style.opacity = "1";

}
// var phnnumber = loginform.loginphone.value;
document.querySelector("#loginform").addEventListener("submit", function () {
    event.preventDefault()
    var phnnumber = loginform.loginphone.value;
    // console.log('number:', typeof(phnnumber))
    if (phnnumber.length == 10) {
        document.querySelector("#loginbottom").innerHTML = "";
        var para = document.createElement("p")
        para.innerText = "Enter OTP sent to +91 " + phnnumber;
        var otpinput = document.createElement("input");
        otpinput.setAttribute("type", "number");
        otpinput.setAttribute('placeholder', "Enter OTP here")
        var btn = document.createElement("input");
        btn.setAttribute('type', 'submit');
        btn.setAttribute('value', "CONTINUE");
        btn.style.backgroundColor = "#10847e";
        btn.style.color = "white"
        var paralast = document.createElement('p');
        var error = document.createElement('p');
        error.style.color = "red"

        paralast.innerText = "By clicking continue, you agree with our Privacy Policy"
        btn.addEventListener('click', function () {
            otpconfirm(otpinput.value, error,phnnumber)
        })

        document.querySelector("#loginbottom").append(para, otpinput, error, btn, paralast);

    } else {
        document.querySelector("#errormsg").innerText = "Enter a 10 Digit Valid Mobile number"
        document.querySelector("#errormsg").style.color = "red";
    }


})
function otpconfirm(v, error, phnnumber) {
   
    if (v == "1234") {
        localStorage.setItem("PhoneNumber",JSON.stringify(phnnumber));
        document.querySelector("#loginpage").style.display = "none";
        document.querySelector("#loginbtn").innerText = "Team Titan"

        alert("Login Succesfully");
        
        window.location.href="Product.html";  
        

 
    } else {
        error.innerText = "The OTP entered is incorrect."
    }
    
}
// window.location.href="Product.html";  


// Product Details

var ProductDetail = JSON.parse(localStorage.getItem("ProductDetail")) || [];
display();
// Appending product From ls to page
function display(){
    var img = document.getElementById("largeProdImg");
    img.innerHTML = "";
    var largeimg = document.createElement("img");
    // largeimg.setAttribute("src", ProductDetail(0));
    largeimg.setAttribute("src", JSON.parse(localStorage.getItem("ProductImg")));
    img.append(largeimg);
    document.getElementById("smallProdImage").setAttribute("src", JSON.parse(localStorage.getItem("ProductImg")))
    document.getElementById("prodname").innerText =
     JSON.parse(localStorage.getItem("ProductName"));
     var prodprice = document.getElementById("Prodprice");
     
     price = JSON.parse(localStorage.getItem("ProductPrice"));
     prodprice.innerText = "₹ "+price;

    var prodMrp = document.createElement("span");
    var Mrp = JSON.parse(localStorage.getItem("ProductMRP"));
    prodMrp.innerText =" MRP "+Mrp;
    prodMrp.setAttribute("id","mrp");
    prodprice.append(prodMrp);

    var prodOff = document.createElement("span");
    var Off = JSON.parse(localStorage.getItem("ProductOff"));
    prodOff.setAttribute("id","off");
    prodOff.innerText=" "+Off+" OFF";
    prodprice.append(prodOff);

    //appeding Delivery date day Month
    let date = new Date()
    let day = date.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const d = new Date();
    // document.write("The current month is " + monthNames[d.getMonth()]);
    let month = date.getMonth();
    document.getElementById("deliveryDate").innerText="Delivery by "+
    parseInt(day+3)+" - "+parseInt(day+6)+" "+monthNames[month];
}
//Deal of the day
var DealsOftheDayOBJ = [{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/I40513/softovac-sf-constipation-powder-bottle-of-250-g-2-1654166050.jpg?dim=1280x0",
    name: "Softovac Sf Constipation Powder",
    mrp: "849.00",
    price: "619.77",
    off: "27%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/270551/revital-h-men-multivitamin-with-zinc-ginseng-for-immunity-strong-bones-energy-10-capsules-1-1654078581.jpg?dim=1280x0",
    name: "Revital H Men Multivitamin With Zinc",
    mrp: "599.00",
    price: "269.55",
    off: "55%"
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1658316798.jpg?dim=1280x0",
    name: "Pharmeasy Multivitamin Multimineral - Immunit",
    mrp: "54.90",
    price: "52.16",
    off: "34%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/D47230/everyuth-naturals-body-lotion-sun-care-berries-100ml-2-1641795165.jpg?dim=1280x0",
    name: "Everyuth Naturals Body Lotion Sun Care Berries",
    mrp: "975.00",
    price: "750.00",
    off: "22%",
},

{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=1280x0",
    name: "Evion 400mg Strip Of 10 Capsules",
    mrp: "399.00",
    price: "199.50",
    off: "50%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/F38564/livogen-adult-tonic-200ml-2-1656661939.jpg?dim=1280x0",
    name: "Livogen Adult Tonic 200ml",
    mrp: "110.00",
    price: "93.50",
    off: "15%",
},
]

DealsOftheDayOBJ.map(function (ele,index) {
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    div2.setAttribute("id", "DealsofTheDayImg");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    div2.append(img);

    var p = document.createElement("p");
    p.setAttribute("id", "DealsofTheDayProdName");
    p.innerText = ele.name;

    var p2 = document.createElement("p");
    p2.setAttribute("id", "DealsofTheDayMRP");
    p2.innerText = "MRP ";
    var span = document.createElement("span");

    span.innerText = "₹ " + ele.mrp;
    p2.append(span);

    var p3 = document.createElement("p");
    p3.setAttribute("id", "DealsofTheDayPrice");

    p3.innerText = "₹ " + ele.price;
    var span2 = document.createElement("span");
    span2.innerText = ele.off + " OFF";
    p3.append(span2)

    div.append(div2, p, p2, p3);
    document.getElementById("DealsofTheDay").append(div);

    img.addEventListener("click", function(){
        FetchDealOftheDay(index);
        
    });

})


// In the Spot Light
var InTheSpotLightOBJ = [{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1654234653.jpg?dim=256x0",

    name: "Everherb Karela Jamun Juice - Helps",
    mrp: "399.00",
    price: "207.48",
    off: "48%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=256x0",
    name: "Liveasy Wellness Calcium, Magnesium,",
    mrp: "599.00",
    price: "329.45",
    off: "45%"
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1654233812.jpg?dim=256x0",
    name: "Pharmeasy All-in -one Vaporizer",
    mrp: "599.00",
    price: "269.15",
    off: "55%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/B39499/pharmeasy-hot-water-bag-blue-2-1656420198.jpg?dim=256x0",
    name: "Pharmeasy Hot Water Bag - Relieves Pain -",
    mrp: "349.00",
    price: "244.30",
    off: "30%",
},

{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/G67452/pharmeasy-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-2-1656417512.jpg?dim=256x0",
    name: "Pharmeasy Calcium, Magnesium, Vitamin",
    mrp: "499.00",
    price: "299.40",
    off: "40%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1658316798.jpg?dim=256x0",
    name: "Pharmeasy Multivitamin",
    mrp: "699.00",
    price: "419.40",
    off: "40%",
},
]

InTheSpotLightOBJ.map(function (ele,index) {
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    div2.setAttribute("id", "InTheSpotLightImg");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    div2.append(img);

    var p = document.createElement("p");
    p.setAttribute("id", "InTheSpotLightProName");
    p.innerText = ele.name;

    var p2 = document.createElement("p");
    p2.setAttribute("id", "InTheSpotLightMRP");
    p2.innerText = "MRP ";
    var span = document.createElement("span");

    span.innerText = "₹ " + ele.mrp;
    p2.append(span);

    var p3 = document.createElement("p");
    p3.setAttribute("id", "InTheSpotLightPrice");

    p3.innerText = "₹ " + ele.price;
    var span2 = document.createElement("span");
    span2.innerText = ele.off + " OFF";
    p3.append(span2)

    div.append(div2, p, p2, p3);
    document.getElementById("InTheSpotLight").append(div);

    img.addEventListener("click", function(){
        FecthSpotLightProduct(index);
        
    });

})


// Haalth Articles
var HealthArticlesOBJ = [
    {
        img_url: "https://blog-images.pharmeasy.in/2021/03/25132209/shutterstock_1256347666-1.jpg?dim=1440x0",
        name: "Home Remedies For Nausea By Dr. Rajeev Singh",
    },
    {
        img_url: "https://blog-images.pharmeasy.in/2018/05/25135059/PE_Blog35.png?dim=1440x0",
        name: "Best Home Remedies For Hypertension By Dr. Rajeev Singh",
    },

    {
        img_url: "https://blog-images.pharmeasy.in/2022/08/02193521/Shutterstock-Images-07.jpg?dim=1440x0",

        name: "Red Chilli: Uses, Benefits, Side Effects By Dr. Smita Barode",
    },
    {
        img_url: "https://blog-images.pharmeasy.in/2022/09/02193717/Blog-Images-2-Sep.jpg?dim=1440x0",
        name: "Eating Healthy During The Festive Season",
    },
    {
        img_url: "https://blog-images.pharmeasy.in/2022/08/02191258/Shutterstock-Images-20.jpg?dim=1440x0",
        name: "Tomato Juice: Uses, Benefits, Side Effects By Dr. Smita Barode",
    },

]

HealthArticlesOBJ.map(function (ele) {
    var div = document.createElement("div");
    div.setAttribute("id", "HealthArticlesDiv");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    var p = document.createElement("p");
    p.innerText = ele.name;
    div.append(img, p);
    document.getElementById("HealthArticles").append(div);
})

//  Storing Product in Local Storage to append it in product page


function FetchDealOftheDay(i){
    event.preventDefault();
    var arr = DealsOftheDayOBJ.filter(function(ele,index){
        if(index===i){
            localStorage.setItem("ProductImg",JSON.stringify(ele.img_url));
            localStorage.setItem("ProductName",JSON.stringify(ele.name));
            localStorage.setItem("ProductPrice",ele.price);
            localStorage.setItem("ProductMRP",ele.mrp);
            localStorage.setItem("ProductOff",JSON.stringify(ele.off));
        }
        display();
    })
   
   window.location.href="Product.html"; 
}

function FecthSpotLightProduct(i){
    event.preventDefault();
    var arr = InTheSpotLightOBJ.filter(function(ele,index){
        if(index===i){
            localStorage.setItem("ProductImg",JSON.stringify(ele.img_url));
            localStorage.setItem("ProductName",JSON.stringify(ele.name));
            localStorage.setItem("ProductPrice",ele.price);
            localStorage.setItem("ProductMRP",ele.mrp);
            localStorage.setItem("ProductOff",JSON.stringify(ele.off));
        }
        display();
    })
   
   window.location.href="Product.html"; 
}
 

document.getElementById("addqtybtn").addEventListener("click",Add_To_cart);

var pimg = JSON.parse(localStorage.getItem("ProductImg"));
var pname = JSON.parse(localStorage.getItem("ProductName"));
 var  price = JSON.parse(localStorage.getItem("ProductPrice"));
var pmrp = JSON.parse(localStorage.getItem("ProductMRP"));
 var poff = JSON.parse(localStorage.getItem("ProductOff"));

function Add_To_cart( pimg,pname, price, pmrp, poff,pqty){
    let cart = localStorage.getItem("cart");
    if(cart==null){
      let products =[];
      let product = { productImg : JSON.parse(localStorage.getItem("ProductImg")),
       productName: JSON.parse(localStorage.getItem("ProductName")) ,
         productPrice: (localStorage.getItem("ProductPrice")),
          productMrp : (localStorage.getItem("ProductMRP")), 
          productOff: JSON.parse(localStorage.getItem("ProductOff")),
        productQuantity : 1,};
      products.push(product);
      localStorage.setItem("cart", JSON.stringify(products));
      console.log("Product added first ftime")
      
    }
    else{
        let pcart = JSON.parse(cart);
        var curProdname = JSON.parse(localStorage.getItem("ProductName"));
       let oldproduct = pcart.find((item)=>item.productName==curProdname);
   


       console.log(oldproduct)
       if(oldproduct){
       oldproduct.productQuantity=parseInt(oldproduct.productQuantity)+1;
        pcart.map((item)=>{
            if(item.productPrice==oldproduct.productPrice){
                item.productQuantity= oldproduct.productQuantity;
            }
        })
       localStorage.setItem("cart", JSON.stringify(pcart));
       console.log("product qty increased")
       }
       
       else{
        let product = { productImg : JSON.parse(localStorage.getItem("ProductImg")),
        productName: JSON.parse(localStorage.getItem("ProductName")) ,
          productPrice: (localStorage.getItem("ProductPrice")),
           productMrp : (localStorage.getItem("ProductMRP")), 
           productOff: JSON.parse(localStorage.getItem("ProductOff")),
         productQuantity : 1,};
          pcart.push(product);
          localStorage.setItem("cart", JSON.stringify(pcart));
          console.log("prodcut is added")
       }
        
    }
}
updateCart();
function updateCart(){
   
  let cart =  JSON.parse(localStorage.getItem("cart"));
//   var ItemInCartLine = document.getElementById("addedtoCartSuccess");
  if(cart==null || cart.length==0){
  console.log("cart is empty");
  document.getElementById("ItemAddedToCartDiv").innerHTML="";
  var h4 =document.createElement("h4");
  h4.innerText = "Cart Is Empty"
  h4.setAttribute("id","addedtoCartSuccess");
  var p =document.createElement("p");
  p.setAttribute("id",  "PleaseAddItem");
  p.innerText="Please Add Item To cart"
  document.getElementById("ItemAddedToCartDiv").append(h4,p);
  var cartIcon = document.getElementById("carticonQty");
     cartIcon.innerText = "(0)";
    
  }
  else{
    var h4 =document.createElement("h4");
    document.getElementById("ItemAddedToCartDiv").innerHTML="";
  h4.innerText = cart.length+ " Item Added  to Cart";
  h4.setAttribute("id","addedtoCartSuccess");
  document.getElementById("ItemAddedToCartDiv").append(h4);
  var cartIcon = document.getElementById("carticonQty");
     cartIcon.innerText = "("+cart.length+")";
     
  }
  


   
}

document.getElementById("addqtybtn").addEventListener("click", function(){
    document.getElementById("addqtybtn").innerText= "Added";
    launch_toast();
    updateCart();
    
});

// Toast Fucntion
function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}



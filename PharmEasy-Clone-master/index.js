 // Home page Slider

 function Sliders(o) {
    "use strict";
    var time = o.time || 500,
        autoTime = o.autoTime || 5000,
        selector = o.selector,
        width_height = o.width_height || 100 / 70,
        sliders = document.querySelectorAll(selector),
        i;
    function css(elm, prop, val) {
        elm.style[prop] = val;
        prop = prop[0].toUpperCase() + prop.slice(1);
        elm.style["webkit" + prop] = elm.style["moz" + prop] =
            elm.style["ms" + prop] = elm.style["o" + prop] = val;
    }
    function anonimFunc(slider) {
        var buttonLeft = slider.children[2],
            buttonRight = slider.children[1],
            ul = slider.children[0],
            li = ul.children,
            activeIndex = 0,
            isAnimate = false,
            i,
            s;
        ul.style.paddingTop = (100 / width_height) + "%";
        for (i = 0; i < li.length; i += 1) {
            css(li[i], "animationDuration", time + "ms");
        }
        li[activeIndex].classList.add("active");
        function left() {
            if (isAnimate) { return; }
            clearTimeout(s);
            isAnimate = true;
            var nextIndex = (activeIndex < li.length - 1) ? (activeIndex + 1) : (0);
            li[nextIndex].classList.add("next");
            li[activeIndex].classList.add("left");
            li[nextIndex].classList.add("active");
            setTimeout(function () {
                li[activeIndex].classList.remove("active");
                li[activeIndex].classList.remove("left");
                li[nextIndex].classList.remove("next");
                li[nextIndex].classList.add("active");
                activeIndex = nextIndex;
                isAnimate = false;
                s = setTimeout(left, autoTime);
            }, time);
        }
        function right() {
            if (isAnimate) { return; }
            clearTimeout(s);
            isAnimate = true;
            var nextIndex = (activeIndex > 0) ? (activeIndex - 1) : (li.length - 1);
            li[nextIndex].classList.add("previous");
            li[activeIndex].classList.add("right");
            li[nextIndex].classList.add("active");
            setTimeout(function () {
                li[activeIndex].classList.remove("active");
                li[activeIndex].classList.remove("right");
                li[nextIndex].classList.remove("previous");
                li[nextIndex].classList.add("active");
                activeIndex = nextIndex;
                isAnimate = false;
                s = setTimeout(right, autoTime);
            }, time);
        }
        buttonLeft.addEventListener("click", left);
        buttonRight.addEventListener("click", right);
        s = setTimeout(right, autoTime);
    }
    for (i = 0; i < sliders.length; i += 1) {
        anonimFunc(sliders[i]);
    }
}



var sliders = new Sliders({
    selector: ".slider",
    time: 500,
    autoTime: 3000,
    width_height: 350 / 250
});


///

var loginstatus = JSON.parse(localStorage.getItem("PhoneNumber")) || [];

//log out funnction
function logoutFunc(){
    localStorage.clear();
    alert("Log Out Succesfully ");
    window.location.href="index.html";  
}

function ShopFunc(){
    window.location.href="/Product_Catogery.html";  
}

function carFunc(){

    window.location.href="/Cart_page/Cart_Page.html"; 

}

function OfferFunc(){
    window.location.href="/Offer_Page.html";  
}

function CatogeryFunc(){
    window.location.href="Filter_page/Filter.html";  
}

//  Login Page 

if(loginstatus.length>0){
    // document.getElementById("loginbtn").innerHTML=<i class="fa-solid fa-user"></i>;
    document.getElementById("loginbtn").innerText="Team Titan";
    var getOffer = document.getElementById("LoginToViewOffer")
    getOffer.innerText="Hurray ! Click Here To View Offers";
    
    getOffer.addEventListener("click", function(){
        window.location.href="Offer_Page.html";  
    })
    
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
        p4.addEventListener("click",OfferFunc);
        div2.append(p2,p3,p4,p);
        div.append(span ,div2);
        document.getElementById("navbarLogin").append(div);

  }

document.querySelector("#loginbtn").addEventListener("click", validateLogin)
document.getElementById("OfferJustForYou3rdDIV").addEventListener('click', validateLogin);

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
        
        window.location.href="index.html";  
        

 
    } else {
        error.innerText = "The OTP entered is incorrect."
    }
    
}


// Below Search Grid
var BelowSearchGridOBJ = [
    {
        img_url: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0",
        name: "Medicine",
        discount: "UPTO 50% OFF",
    },
    {
        img_url: "https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0",
        name: "Lab Test",
        discount: "UPTO 70% OFF",
    },
    {
        img_url: "https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0",
        name: "Healthcare",
        discount: "UPTO 60% OFF",
    },
    {
        img_url: "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0",
        name: "Health Blogs",
        discount: "UPTO 40% OFF",
    },
    {
        img_url: "https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0",
        name: "PLUS Member",
        discount: "Save 5% Extra",
    },
    {
        img_url: "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0",
        name: "Offers",
        discount: "UPTO 50% Off",

    },
    {
        img_url: "https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=720x0",
        name: "Surgeries",
        discount: "UPTO 50% OFF",

    },
    {
        img_url: "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0",
        name: "value Store",
        discount: "Value Store",
    }
];

// Below Search Grid

BelowSearchGridOBJ.map(function (ele) {
    var div = document.createElement("div");
    
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    var h6 = document.createElement("h6");
    h6.setAttribute("id", "BelowSearchGridDiscountpara");
    h6.innerText = ele.name;
    var p = document.createElement("p");
    p.setAttribute("id", "BelowSearchGridDiscounth5");
    p.innerText = ele.discount;
    div.append(img, h6, p);
    div.addEventListener("click", ShopFunc);
    document.querySelector("#BelowSearchGrid").append(div);

})

//    Shop By Categories Grid

var ShopByCategoriesGridOBJ = [
    {
        img_url: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0",
        name: "Covid essentials",
    },
    {
        img_url: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0",
        name: "Personal care",
    },
    {
        img_url: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0",
        name: "Health Food and Drinks",
    },
    {
        img_url: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3c7ab4d29c6631f7a5cb7eafd3bfbc79.png?f=png?dim=256x0",
        name: "Beauty",
    },
    {
        img_url: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png?f=png?dim=256x0",
        name: "Skin Care",
    },
    {
        img_url: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0",
        name: "Home Care",
    },
    {
        img_url: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0",
        name: "Ayurvedic care",
    }


]

ShopByCategoriesGridOBJ.map(function (ele) {
    var div = document.createElement("div");
    var imgdiv = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    imgdiv.append(img);
    var p = document.createElement("p");
    p.innerText = ele.name;
    div.append(imgdiv, p);
    div.addEventListener("click", CatogeryFunc );
    document.getElementById("ShopByCategoriesGrid").append(div);

})

// New launches Grid

var NewLaunchObj = [{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/B76697/drodin-clinical-thermometer-regular-2-1641794511.jpg?dim=1440x0",
    name: "Dr.odin Clinical Thermometer -regular",
    mrp: "210.00",
    price: "195.30",
    off: "7%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/R76285/pharmeasy-multivitamin-women-bottle-of-60-2-1658471942.jpg?dim=1440x0",
    name: "Pharmeasy Multivitamin Women -",
    mrp: "799.00",
    price: "399.50",
    off: "50%"
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/F91916/fixderma-scar-gel-15ml-2-1652259958.jpg?dim=1440x0",
    name: "Fixderma Scar Gel 15ml",
    mrp: "385.00",
    price: "254.10",
    off: "34%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/H68051/godrej-hit-flies-mosquitoes-black-insect-killer-spray-400-ml-2-1641793715.jpg?dim=1440x0",
    name: "Godrej Hit Flies & Mosquitoes Black",
    mrp: "225.00",
    price: "202.50",
    off: "10%",
},

{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/K20372/liveasy-ortho-care-cotton-crepe-bandage-reduces-strain-sprain-swelling-15-cms-x-4-meters-2-1656420314.jpg?dim=1440x0",
    name: "Liveasy Ortho Care Cotton Crepe Bandage",
    mrp: "349.00",
    price: "90.74",
    off: "74%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/O98495/upglam-onion-oil-shampoo-2-1659342340.jpg?dim=1440x0",
    name: "Upglam Onion Oil Shampoo",
    mrp: "399.00",
    price: "299.00",
    off: "20%",
},
]

NewLaunchObj.map(function (ele,index) {
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    div2.setAttribute("id", "NewLaunchImg");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    div2.append(img);

    var p = document.createElement("p");
    p.setAttribute("id", "NewLaunchProdName");
    p.innerText = ele.name;

    var p2 = document.createElement("p");
    p2.setAttribute("id", "NewLaunchMRP");
    p2.innerText = "MRP ";
    var span = document.createElement("span");
    // span.innerHTML= <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>;
    span.innerText = "₹ " + ele.mrp;
    p2.append(span);

    var p3 = document.createElement("p");
    p3.setAttribute("id", "NewLaunchPrice");
    // p3.innerHTML = &#x20B9;
    p3.innerText = "₹ " + ele.price;
    var span2 = document.createElement("span");
    span2.innerText = ele.off + " OFF";
    p3.append(span2)

    div.append(div2, p, p2, p3);
    document.getElementById("NewLaunches").append(div);

    img.addEventListener("click", function(){
        FecthNewlaunchProduct(index);
        
    });

})

//Trending Near To You Grid

var TrendingNearToYouOBJ = [{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1654168216.jpg?dim=1440x0",
    name: "Dr Morepen Gluco One Bg 03 Glucometer Ter",
    mrp: "849.00",
    price: "619.77",
    off: "27%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1654233812.jpg?dim=1440x0",
    name: "Pharmeasy All-in -one Vaporizer",
    mrp: "599.00",
    price: "269.55",
    off: "55%"
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=1440x0",
    name: "Supradyn Daily Multivitamin Tablets",
    mrp: "54.90",
    price: "52.16",
    off: "34%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1654077435.jpg?dim=1440x0",
    name: "Accu-chek Active Glucometer Test Strips",
    mrp: "975.00",
    price: "750.00",
    off: "22%",
},

{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/D52223/liveasy-foods-healthy-roasted-seed-mix-blend-of-6-fibre-rich-healthy-roasted-seeds-200-gms-2-1656420865.jpg?dim=1440x0",
    name: "Liveasy Foods Healthy Roasted Seed Mix -",
    mrp: "399.00",
    price: "199.50",
    off: "50%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/177755/unwanted-72-strip-of-1-tablet-2-1641787823.jpg?dim=1440x00",
    name: "Unwanted 72 Strip Of 1 Tablet",
    mrp: "110.00",
    price: "93.50",
    off: "15%",
},
]

TrendingNearToYouOBJ.map(function (ele,index) {
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    div2.setAttribute("id", "TrendingNearToYouImg");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    div2.append(img);

    var p = document.createElement("p");
    p.setAttribute("id", "TrendingNearToYouProdName");
    p.innerText = ele.name;

    var p2 = document.createElement("p");
    p2.setAttribute("id", "TrendingNearToYouMRP");
    p2.innerText = "MRP ";
    var span = document.createElement("span");
    // span.innerHTML= <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>;
    span.innerText = "₹ " + ele.mrp;
    p2.append(span);

    var p3 = document.createElement("p");
    p3.setAttribute("id", "TrendingNearToYouPrice");
    // p3.innerHTML = &#x20B9;
    p3.innerText = "₹ " + ele.price;
    var span2 = document.createElement("span");
    span2.innerText = ele.off + " OFF";
    p3.append(span2)

    div.append(div2, p, p2, p3);
    document.getElementById("TrendingNearToYou").append(div);

    img.addEventListener("click", function(){
        FecthTrendingNearToYouProduct(index);
        
    });

})

//Lab Tests by Health Concern

var LabTestDivImgObj = [
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/e9fec637561-Vitamins.jpg?dim=256x0",

    },
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/f055b8d7606-Fever_Infection.jpg?dim=256x0",

    },
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/0108134f09b-Health_Checkups.jpg?dim=256x0",

    },
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/686b12c5c64-Heart.jpg?dim=256x0",

    },
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/6c5765fb3e7-Diabetes.jpg?dim=256x0",

    },
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/453e093976a-thyroid.png?dim=256x0",

    },
]

LabTestDivImgObj.map(function (ele) {
    var div = document.createElement("div");
    div.setAttribute("id", "LabTestDiv");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    div.append(img);
    document.getElementById("LabTestByHealthConcernDIV").append(div);

})

//Shop By Concern

var ShopbyConcernOBJ = [
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/923a665cc6f-Skin_care.png?dim=128x0",
        name: "Sking Care",
    },
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/18d2e2ee86b-Vitamins.png?dim=128x0",
        name: "Vitamins & Supplements",
    },
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/0af9ac9f350-Diabetes.webp?dim=128x0",
        name: "Dibetes Care & Sugar..",
    },

    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/24a0d2c733e-Heart.webp?dim=128x0",
        name: "Cardiac Care",
    },
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/68369c9df98-Pregnancy.webp?dim=128x0",
        name: "Baby & Mom Care",
    },
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/16ab65c0826-Covid.webp?dim=128x0",
        name: "Covid care",
    },
    {
        img_url: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/26bbd7a9e98-Lifestyle.webp?dim=128x0",
        name: "Lifestyle Disorder",
    },

]

ShopbyConcernOBJ.map(function (ele) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    var p = document.createElement("p");
    p.innerText = ele.name;
    div.append(img, p);
    document.getElementById("ShopByConcern").append(div);

})

//Featured Brands

var FeatureBrandOBJ = [
    {
        img_url: "https://cms-contents.pharmeasy.in/carousel_item/1151b7d7c0e-LivEasy-min.png?dim=1440x0",
        name: "LivEasy",
    },
    {
        img_url: "https://cms-contents.pharmeasy.in/carousel_item/c9fc0cd6ef6-Revital-min.png?dim=1440x0",
        name: "Revital",
    },
    {
        img_url: "https://cms-contents.pharmeasy.in/carousel_item/e8a5cabe9f3-Volini-min.png?dim=1440x0",
        name: "Volini",
    },

    {
        img_url: "https://cms-contents.pharmeasy.in/carousel_item/2318a0e5326-App_Abzorb.jpg?dim=1440x0",
        name: "Abzorb",
    },
    {
        img_url: "https://cms-contents.pharmeasy.in/carousel_item/d0a5680bd13-OneTouchApp.jpg?dim=1440x0",
        name: "One Touch",
    },
    {
        img_url: "https://cms-contents.pharmeasy.in/carousel_item/201210bc27d-App_Huggies.jpg?dim=1440x0",
        name: "Huggies",
    },


]

FeatureBrandOBJ.map(function (ele) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    var p = document.createElement("p");
    p.innerText = ele.name;
    div.append(img, p);
    document.getElementById("FeatureBrand").append(div);

})

//  Deals Of The Days

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
        FecthDealsOftheDayProduct(index);
        
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

InTheSpotLightOBJ.map(function (ele , index) {
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

//  New launch Product

function FecthNewlaunchProduct(i){
    event.preventDefault();
    var arr = NewLaunchObj.filter(function(ele,index){
        if(index===i){
            localStorage.setItem("ProductImg",JSON.stringify(ele.img_url));
            localStorage.setItem("ProductName",JSON.stringify(ele.name));
            localStorage.setItem("ProductPrice",ele.price);
            localStorage.setItem("ProductMRP",ele.mrp);
            localStorage.setItem("ProductOff",JSON.stringify(ele.off));
        }
        
    })

   location.replace("Product page/Product.html")
}

//Trending Product Near to You

function FecthTrendingNearToYouProduct(i){
    event.preventDefault();
    var arr = TrendingNearToYouOBJ.filter(function(ele,index){
        if(index===i){
            localStorage.setItem("ProductImg",JSON.stringify(ele.img_url));
            localStorage.setItem("ProductName",JSON.stringify(ele.name));
            localStorage.setItem("ProductPrice",ele.price);
            localStorage.setItem("ProductMRP",ele.mrp);
            localStorage.setItem("ProductOff",JSON.stringify(ele.off));
        }
        
    })

   location.replace("Product page/Product.html")
}


// Deals of the day product

function FecthDealsOftheDayProduct(i){
    event.preventDefault();
    var arr = DealsOftheDayOBJ.filter(function(ele,index){
        if(index===i){
            localStorage.setItem("ProductImg",JSON.stringify(ele.img_url));
            localStorage.setItem("ProductName",JSON.stringify(ele.name));
            localStorage.setItem("ProductPrice",ele.price);
            localStorage.setItem("ProductMRP",ele.mrp);
            localStorage.setItem("ProductOff",JSON.stringify(ele.off));
        }
        
    })
   
   location.replace("Product page/Product.html")
}

// in the spotlight function

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
        
    })
   location.replace("Product page/Product.html")
}




 


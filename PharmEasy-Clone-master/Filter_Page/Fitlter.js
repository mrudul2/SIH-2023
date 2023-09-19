// Narbar Login

var loginstatus = JSON.parse(localStorage.getItem("PhoneNumber")) || [];

//log out funnction
function logoutFunc() {
  localStorage.clear();
  alert("Log Out Succesfully ");
  window.location.href = "Filter.html";
}

function ShopFunc() {}

function carFunc() {}

function OfferFunc() {}

//  Login Page

if (loginstatus.length > 0) {
  // document.getElementById("loginbtn").innerHTML=<i class="fa-solid fa-user"></i>;
  document.getElementById("loginbtn").innerText = "Team Titan";
  // document.getElementById("LoginToViewOffer").innerText="Hurray ! Click Here To View Offers"
  var div = document.createElement("div");
  div.setAttribute("class", "dropdown");
  var span = document.createElement("span");
  span.innerText = "See More";

  var div2 = document.createElement("div");
  div2.setAttribute("class", "dropdown-content");
  var p = document.createElement("p");
  p.setAttribute("id", "logoutNavBar");
  p.addEventListener("click", logoutFunc);
  p.innerText = "Log Out";

  var p2 = document.createElement("p");
  p2.addEventListener("click", ShopFunc);
  p2.innerText = "Shop";

  var p3 = document.createElement("p");
  p3.addEventListener("click", carFunc);
  p3.innerText = "Cart";

  var p4 = document.createElement("p");
  p4.addEventListener("click", OfferFunc);
  p4.innerText = "Offer";

  div2.append(p2, p3, p4, p);
  div.append(span, div2);
  document.getElementById("navbarLogin").append(div);
}

document.querySelector("#loginbtn").addEventListener("click", validateLogin);

function validateLogin() {
  console.log(loginstatus.length);
  if (loginstatus.length == 0) {
    showlogin();
  }
}

function showlogin() {
  document.querySelector("#loginpage").style.display = "block";

  document.querySelector("#loginpage").style.opacity = "1";
}
document.querySelector("#closebtn").addEventListener("click", hidelogin);

function hidelogin() {
  document.querySelector("#loginpage").style.display = "none";
  document.querySelector("body").style.opacity = "1";
}
// var phnnumber = loginform.loginphone.value;
document.querySelector("#loginform").addEventListener("submit", function () {
  event.preventDefault();
  var phnnumber = loginform.loginphone.value;
  // console.log('number:', typeof(phnnumber))
  if (phnnumber.length == 10) {
    document.querySelector("#loginbottom").innerHTML = "";
    var para = document.createElement("p");
    para.innerText = "Enter OTP sent to +91 " + phnnumber;
    var otpinput = document.createElement("input");
    otpinput.setAttribute("type", "number");
    otpinput.setAttribute("placeholder", "Enter OTP here");
    var btn = document.createElement("input");
    btn.setAttribute("type", "submit");
    btn.setAttribute("value", "CONTINUE");
    btn.style.backgroundColor = "#10847e";
    btn.style.color = "white";
    var paralast = document.createElement("p");
    var error = document.createElement("p");
    error.style.color = "red";

    paralast.innerText =
      "By clicking continue, you agree with our Privacy Policy";
    btn.addEventListener("click", function () {
      otpconfirm(otpinput.value, error, phnnumber);
    });

    document
      .querySelector("#loginbottom")
      .append(para, otpinput, error, btn, paralast);
  } else {
    document.querySelector("#errormsg").innerText =
      "Enter a 10 Digit Valid Mobile number";
    document.querySelector("#errormsg").style.color = "red";
  }
});
function otpconfirm(v, error, phnnumber) {
  if (v == "1234") {
    localStorage.setItem("PhoneNumber", JSON.stringify(phnnumber));
    document.querySelector("#loginpage").style.display = "none";
    document.querySelector("#loginbtn").innerText = "Team Titan";

    alert("Login Succesfully");

    window.location.href = "Filter.html";
  } else {
    error.innerText = "The OTP entered is incorrect.";
  }
}

// Login Script end

var Data = [
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/156765/savlon-antiseptic-disinfectant-liquid-1000-ml-2-1658475751.jpg",
    name: "Dettol Disinfectant Sanitizer Spray Bottle",
    offer: "15%",
    strikedoffprice: "310",
    price: "263.50",
    category: "Covid Essentials",
    sub_category: "Disinfectants",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/R18677/lizol-jasmine-disinfectant-floor-cleanerliquid-bottle-of-500-ml-2-1653995388.jpg",
    name: "Lizol Jasmine Disinfectant Floor",
    offer: "8%",
    strikedoffprice: "103",
    price: "94.50",
    category: "Covid Essentials",
    sub_category: "Disinfectants",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/O26428/savlon-surface-disinfectant-spray-170g-2-1654234199.jpg",
    name: "Savlon Surface Disinfectant Spray 170g",
    offer: "17%",
    strikedoffprice: "150",
    price: "136.95",
    category: "Covid Essentials",
    sub_category: "Disinfectants",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/O70942/coviself-covid-self-test-kit-2-1644415093.jpg",
    name: "Coviself Covid Self Test Kit",
    offer: "10%",
    strikedoffprice: "250",
    price: "225.00",
    category: "Covid Essentials",
    sub_category: "Covid test kit",
    brand: "Meril",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/Z70690/covifind-covid-19-rapid-antigen-self-test-by-meril-easy-self-test-ai-powered-result-in-15-min-2-1654249383.jpg",
    name: "Covifind Covid-19 Rapid Antigen Self Test By Meril",
    offer: "10%",
    strikedoffprice: "325",
    price: "293.00",
    category: "Covid Essentials",
    sub_category: "Covid test kit",
    brand: "Meril",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/V11600/harpic-hygienic-lavender-toilet-block-packet-of-26-g-2-1662195239.jpg",
    name: "Harpic Power Plus Original Toilet Cleaner",
    offer: "31%",
    strikedoffprice: "40",
    price: "38.80",
    category: "Covid Essentials",
    sub_category: "Home Hygiene Essentials",
    brand: "Meril",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/N29621/lizol-neem-disinfectant-floor-cleaner-liquid-bottle-of-500-ml-2-1653995456.jpg",
    name: "Harpic Floral Bathroom Cleaner Bottle Of 200 ml",
    offer: "5%",
    strikedoffprice: "46.00",
    price: "43.70",
    category: "Covid Essentials",
    sub_category: "Home Hygiene Essentials",
    brand: "Panbio",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/P22801/anchor-pilot-surface-cleaner-jasmine-500ml-2-1637572130.jpg",
    name: "Anchor Pilot Surface Cleaner ",
    offer: "23%",
    strikedoffprice: "93",
    price: "71.61",
    category: "Covid Essentials",
    sub_category: "Home Hygiene Essentials",
    brand: "Panbio",
  },

  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/C39672/face-shield-2-1641788816.jpg",
    name: "Face Shield",
    offer: "30%",
    strikedoffprice: "100",
    price: "70",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "Panbio",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/Z57528/honeywell-ff-2100-pm-adult-pollution-mask-pack-of-5-2-1641791809.jpg",
    name: "Honeywell Ff 2100 Pm Adult Pollution Mask Pack Of 5",
    offer: "67%",
    strikedoffprice: "245",
    price: "80.85",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/J78809/savlon-mask-singles-pack-2-1641790420.jpg",
    name: "Savlon Mask - Singles Pack",
    offer: "17%",
    strikedoffprice: "95",
    price: "78.95",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/R35230/carriall-adult-unisex-3-layer-reusable-washable-cotton-mask-camsl077-pack-of-3-2-1641791082.jpg",
    name: "Carriall Adult Unisex 3 Layer Reusable Mask",
    offer: "17%",
    strikedoffprice: "150",
    price: "136.95",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/X00898/medlife-advanced-hand-sanitizer-strawberry-50-ml-2-1632779115.jpg",
    name: "Samrvir Forest Herbs Hand Sanitizer 500 Ml",
    offer: "9%",
    strikedoffprice: "250",
    price: "227.95",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/Q60802/lifebuoy-total-hand-sanitizer-bottle-of-50-ml-2-1632777904.jpg",
    name: "Lifebuoy Total Hand Sanitizer Bottle Of 50 Ml",
    offer: "7%",
    strikedoffprice: "25",
    price: "23.30",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/U93990/bisleri-by-the-bay-hand-sanitizer-gel-50-ml-6.1-1641795285.jpg",
    name: "Bisleri By The Bay Hand Sanitizer Gel - 50 Ml",
    offer: "5%",
    strikedoffprice: "25",
    price: "22.50",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/C34354/ciphands-hand-sanitizer-bottle-of-100-ml-2-1641789437.jpg",
    name: "Ciphands Hand Sanitizer Bottle Of 100 Ml",
    offer: "9%",
    strikedoffprice: "50",
    price: "45.50",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/Q21846/vize-hand-sanitizer-with-75-isopropyl-alcohol-ip-500-ml-2-1641790470.jpg?dim=320x320&dpr=1&q=100",
    name: "Vize Hand Sanitizer With 75% Isopropyl Alcohol Ip - 500 Ml",
    offer: "28%",
    strikedoffprice: "250",
    price: "180",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/V91286/dettol-combikit-clinical-strength-hand-sanitizer-500ml-original-skin-surface-wipes-80-spring-blossom-surface-disinfectant-spray-225ml-surface-disinfectant-spray-sanitizer-500ml-3-1641790938.jpg",
    name: "Kabir Hand Sanitizer 5000 Ml",
    offer: "53%",
    strikedoffprice: "2500",
    price: "1175",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/E15198/sanfe-sanitizer-bottle-of-1000-ml-pack-of-2-x-500ml-2-1632778578.jpg",
    name: "Sanfe Sanitizer Bottle Of 1000 Ml (Pack Of 2 X 500ml)",
    offer: "50%",
    strikedoffprice: "500",
    price: "250",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/X20133/steriall-alcohol-based-hand-sanitizer-solution-spray-200ml-pack-of-1-with-2-refill-pack--2-1641790169.jpg",
    name: "Namyaa Silver Shield Multi-Purpose Surface Sanitizer",
    offer: "10%",
    strikedoffprice: "390",
    price: "380",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/H74649/raho-safe-germ-free-surface-sanitizer-bottle-of-100-ml-2-1641789030.jpg",
    name: "Khadi Essentials Pure&Safe Hand Sanitizer Liquid Spray",
    offer: "22%",
    strikedoffprice: "499",
    price: "398",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/V01925/dettol-disinfectant-sanitizer-spray-bottle-original-pine-225ml-2-1654233461.jpg?dim=320x320&dpr=1&q=100",
    name: "Dettol Disinfectant Sanitizer,",
    offer: "8%",
    strikedoffprice: "159",
    price: "146",
    category: "Covid Essentials",
    sub_category: "Home Hygiene Essentials",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/I40098/dettol-liquid-disinfectant-for-floor-cleaner-surface-disinfection-lime-fresh-200ml-2-1654251040.jpg?dim=320x320&dpr=1&q=100",
    name: "Dettol Liquid Disinfectant For Floor Cleaner,",
    offer: "3%",
    strikedoffprice: "98",
    price: "95",
    category: "Covid Essentials",
    sub_category: "Home Hygiene Essentials",
    brand: "Panbio",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/M13039/tri-activ-disinfectant-spray-for-multi-surfaces-70-alcohol-based-230ml-2-1654234507.jpg?dim=320x320&dpr=1&q=100",
    name: "Tri-Activ Disinfectant Spray ",
    offer: "33%",
    strikedoffprice: "159",
    price: "106",
    category: "Covid Essentials",
    sub_category: "Home Hygiene Essentials",
    brand: "Panbio",
  },

  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/I40099/dettol-liquid-disinfectant-for-personal-hygiene-menthol-cool-200ml-2-1654251172.jpg?dim=320x320&dpr=1&q=100",
    name: "Dettol Liquid Disinfectant For Personal Hygiene",
    offer: "3%",
    strikedoffprice: "98",
    price: "95",
    category: "Covid Essentials",
    sub_category: "Home Hygiene Essentials",
    brand: "Meril",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/D09658/harpic-floral-bathroom-cleaner-bottle-of-500-ml-2-1660820630.jpg?dim=320x320&dpr=1&q=100",
    name: "Harpic Floral Bathroom Cleaner Bottle Of 500 Ml",
    offer: "3%",
    strikedoffprice: "99",
    price: "96",
    category: "Covid Essentials",
    sub_category: "Home Hygiene Essentials",
    brand: "Meril",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/Y52950/lizol-floral-disinfectant-floor-cleaner-liquid-bottle-of-500-ml-2-1654255926.jpg?dim=320x320&dpr=1&q=100",
    name: "Lizol Floral Disinfectant Floor Cleaner Liquid Bottle Of 500 Ml",
    offer: "8%",
    strikedoffprice: "103",
    price: "94",
    category: "Covid Essentials",
    sub_category: "Home Hygiene Essentials",
    brand: "Meril",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/N29621/lizol-neem-disinfectant-floor-cleaner-liquid-bottle-of-500-ml-2-1653995456.jpg?dim=320x320&dpr=1&q=100",
    name: "Lizol Neem Disinfectant Floor Cleaner",
    offer: "8%",
    strikedoffprice: "103",
    price: "94",
    category: "Covid Essentials",
    sub_category: "Home Hygiene Essentials",
    brand: "Meril",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/P72443/panbio-covid-antigen-self-test-4-test-kits-icmr-approved-test-results-in-15-mins-2-1641793889.jpg?dim=320x320&dpr=1&q=100",
    name: "Panbio Covid Antigen Self Test - 4 ",
    offer: "14%",
    strikedoffprice: "1250",
    price: "1012",
    category: "Covid Essentials",
    sub_category: "Covid Test Kits",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/O70942/coviself-covid-self-test-kit-2-1644415093.jpg?dim=320x320&dpr=1&q=100",
    name: "Coviself Covid Self Test Kit",
    offer: "14%",
    strikedoffprice: "331",
    price: "250",
    category: "Covid Essentials",
    sub_category: "Covid Test Kits",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/Z70690/covifind-covid-19-rapid-antigen-self-test-by-meril-easy-self-test-ai-powered-result-in-15-min-2-1654249383.jpg?dim=320x320&dpr=1&q=100",
    name: "Covifind Covid-19 Rapid Antigen Self Test By Meril ",
    offer: "10%",
    strikedoffprice: "250",
    price: "225",
    category: "Covid Essentials",
    sub_category: "Covid Test Kits",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/H73193/3-ply-mask-packet-of-50-2-1654168779.jpg?dim=320x320&dpr=1&q=100",
    name: "3 Ply Mask Packet Of 50",
    offer: "75%",
    strikedoffprice: "800",
    price: "200",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/M26466/n95-mask-packet-of-5-buy-2-get-3-free-1-1654234405.jpg?dim=320x320&dpr=1&q=100",
    name: "N95 Mask Packet Of 5 (Buy 2 & Get 3 Free)",
    offer: "51%",
    strikedoffprice: "1500",
    price: "735",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/K63117/tri-activ-n95-masks-with-6-layer-protection-anti-virus-coating-995-filtration-efficiency-1-1654165670.jpg?dim=320x320&dpr=1&q=100",
    name: "Tri-Activ N95 Masks With 6 Layer ",
    offer: "53%",
    strikedoffprice: "149",
    price: "70",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/A92874/savlon-mask-pack-of-4-2-1641790220.jpg?dim=320x320&dpr=1&q=100",
    name: "Savlon Mask - Pack Of 4",
    offer: "12%",
    strikedoffprice: "360",
    price: "316",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/H36342/dettol-d95-mask-anti-virus-reusable-washable-black-medium-2-1654251704.jpg?dim=320x320&dpr=1&q=100",
    name: "Dettol D95 Mask Anti Virus Reusable & Washable Black Medium",
    offer: "11%",
    strikedoffprice: "299",
    price: "266",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/X87342/safent-pm-25-air-pollution-n95-mask-black-white-2-1641789837.jpg?dim=320x320&dpr=1&q=100",
    name: "Safent Pm-2.5 Air Pollution N95 Mask Black/White",
    offer: "31%",
    strikedoffprice: "500",
    price: "345",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/J78809/savlon-mask-singles-pack-2-1641790420.jpg?dim=320x320&dpr=1&q=100",
    name: "Savlon Mask - Singles Pack",
    offer: "17%",
    strikedoffprice: "95",
    price: "78",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/P22638/hi-life-multi-layered-kn95-mask-single-pack-2-1641794486.jpg?dim=320x320&dpr=1&q=100",
    name: "Hi Life Multi Layered Kn95 Mask- Single Pack",
    offer: "20%",
    strikedoffprice: "199",
    price: "159",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/I40675/dettol-n95-mask-anti-virus-reusable-washable-black-medium-2-1641788130.jpg?dim=320x320&dpr=1&q=100",
    name: "Dettol N95 Mask Anti Virus Reusable",
    offer: "11%",
    strikedoffprice: "799",
    price: "711",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/D83357/bodyguard-n95-pm25-ffp2-anti-pollution-face-mask-with-5-layers-protection-pack-of-3-1-1641790477.jpg?dim=320x320&dpr=1&q=100",
    name: "Bodyguard N95 + Pm2.5 Ffp2 ",
    offer: "20%",
    strikedoffprice: "375",
    price: "300",
    category: "Covid Essentials",
    sub_category: "Mask",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/O80282/panbio-covid-antigen-self-test-1-test-kits-icmr-approved-test-results-in-15-mins-2-1654250352.jpg?dim=320x320&dpr=1&q=100",
    name: "Panbio Covid Antigen Self Test",
    offer: "14%",
    strikedoffprice: "331",
    price: "245",
    category: "Covid Essentials",
    sub_category: "Covid Test Kits",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/P72443/panbio-covid-antigen-self-test-4-test-kits-icmr-approved-test-results-in-15-mins-2-1641793889.jpg?dim=320x320&dpr=1&q=100",
    name: "Panbio Covid Antigen Self Test Panbio Covid Antigen",
    offer: "14%",
    strikedoffprice: "1250",
    price: "1012",
    category: "Covid Essentials",
    sub_category: "Covid Test Kits",
    brand: "coviself",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/G99739/liveasy-essentials-instant-hand-sanitizer-kills-999-germs-gel-based-200ml-2-1661760163.jpg",
    name: "Living easy hand sanitizer",
    offer: "52%",
    strikedoffprice: "100",
    price: "48",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/H51947/dermec-ea-instant-hand-sanitizer-bottle-of-100-ml-2-1641788996.jpg",
    name: "dermec-ea-instant-hand-sanitizer",
    offer: "6%",
    strikedoffprice: "50",
    price: "47",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/V40703/savlon-moisturizing-sanitizer-100ml-2-1641795707.jpg",
    name: "savlon hand sanitizer",
    offer: "10%",
    strikedoffprice: "165",
    price: "148",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid testv",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/X41246/tri-activ-instant-hand-sanitizer-500ml-with-pump-2-1641793659.jpg",
    name: "tri-activ-instant-hand-sanitizer",
    offer: "12%",
    strikedoffprice: "250",
    price: "175",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/P95184/khadi-essentials-basics-pure-safe-hand-sanitizer-bottle-of-330-ml-2-1641789002.jpg",
    name: "khadi-essentials-basics-pure-safe-hand-sanitizer",
    offer: "22%",
    strikedoffprice: "499",
    price: "389",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/B16797/dr-vaidyas-herbocleanse-plus-hand-sanitizer-bottle-of-200-ml-2-1641789536.jpg",
    name: "hand-sanitizer",
    offer: "31%",
    strikedoffprice: "100",
    price: "68",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/Y54240/herbatol-plus-all-purpose-hygiene-spray-with-9999-germ-protection-75mlpack-of-2-2-1643274610.jpg",
    name: "herbatol-plus-all-purpose-hygiene-spray",
    offer: "27%",
    strikedoffprice: "310",
    price: "228",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/F68867/bodyguard-alcohol-based-hand-sanitizer-with-refreshing-lemon-500ml-2-1641789483.jpg",
    name: "bodyguard-alcohol-based-hand-sanitizer",
    offer: "20%",
    strikedoffprice: "250",
    price: "210",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/I40675/dettol-n95-mask-anti-virus-reusable-washable-black-medium-2-1641788130.jpg?dim=320x320&dpr=1&q=100",
    name: "Dettol N95 Mask Anti Virus Reusable",
    offer: "11%",
    strikedoffprice: "799",
    price: "711",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
  {
    image_url:
      "https://cdn01.pharmeasy.in/dam/products_otc/Y64580/colorbar-pure-izer-hand-gel-250-ml-2-1642499304.jpg",
    name: "colorbar-pure-izer-hand-gel-250-ml",
    offer: "20%",
    strikedoffprice: "175",
    price: "110",
    category: "Covid Essentials",
    sub_category: "senetizer",
    brand: "Covid test",
  },
];
localStorage.setItem("ShopByCatagory", JSON.stringify(Data));
dispalaydata(Data);
function dispalaydata(data, index) {
  document.querySelector(".rhs").innerHTML = "";
  var temp = data.map(function (elem, index) {
    var div = document.createElement("div");
    div.setAttribute("id", "product");
    var image = document.createElement("img");
    image.setAttribute("src", elem.image_url);

    var h4 = document.createElement("h3");
    h4.innerText = elem.name;
    h4.setAttribute("id", "heading");

    var otherdiv = document.createElement("div");
    otherdiv.setAttribute("id", "minidiv");

    var offer = document.createElement("p");
    offer.innerText = elem.offer + "Off";

    var strikedoffprice = document.createElement("p");
    strikedoffprice.innerText = "₹ " + elem.strikedoffprice;
    strikedoffprice.setAttribute("id", "strikprice");

    var h3 = document.createElement("h3");
    h3.innerText = "₹ " + elem.price;
    h3.setAttribute("id", "price");

    otherdiv.append(strikedoffprice, offer);
    div.append(image, h4, otherdiv, h3);
    document.querySelector(".rhs").append(div);

    image.addEventListener("click", function () {
      FecthProductDetails(index);
    });
  });
}
var arrShow = JSON.parse(localStorage.getItem("ShopByCatagory")) || [];
//  filter By All(Covid Essential)
document.getElementById("all").addEventListener("click", showAll);
function showAll() {
  dispalaydata(Data);
  document.getElementById("sortByPrice").addEventListener("change", sortPrice);
  function sortPrice() {
    var Asort = document.getElementById("sortByPrice").value;

    if (Asort === "lth") {
      dispalaydata(arrShow);
    }
    dispalaydata(arrShow);
    if (Asort === "htl") {
      arrShow.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
    dispalaydata(arrShow);
  }
}

// filter by Disinfectants
document
  .getElementById("filterByDisinfectants")
  .addEventListener("click", filterDisinfectants);

function filterDisinfectants() {
  var Disinfectants = arrShow.filter(function (elem) {
    return elem.sub_category === "Disinfectants";
  });
  dispalaydata(Disinfectants);
  document.getElementById("sortByPrice").addEventListener("change", sortPrice);
  function sortPrice() {
    var Asort = document.getElementById("sortByPrice").value;
    if (Asort === "lth") {
      Disinfectants.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });
    }

    if (Asort === "htl") {
      Disinfectants.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
    dispalaydata(Disinfectants);
  }

  dispalaydata(Disinfectants);
}
// filter by covidKit
document.getElementById("covidKit").addEventListener("click", filterCovid);
function filterCovid() {
  var covid = arrShow.filter(function (elem) {
    return elem.sub_category === "Covid test kit";
  });
  dispalaydata(covid);
  document.getElementById("sortByPrice").addEventListener("change", sortPrice);
  function sortPrice() {
    var Asort = document.getElementById("sortByPrice").value;
    if (Asort === "lth") {
      covid.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });
    }

    if (Asort === "htl") {
      covid.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
    dispalaydata(covid);
  }

  dispalaydata(covid);
}
// filter by hygiene
document.getElementById("hygiene").addEventListener("click", hygieneEssential);
function hygieneEssential() {
  var hygiene = arrShow.filter(function (elem) {
    return elem.sub_category === "Home Hygiene Essentials";
  });
  dispalaydata(hygiene);
  document.getElementById("sortByPrice").addEventListener("change", sortPrice);
  function sortPrice() {
    var Asort = document.getElementById("sortByPrice").value;
    if (Asort === "lth") {
      hygiene.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });
    }

    if (Asort === "htl") {
      hygiene.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
    dispalaydata(hygiene);
  }

  dispalaydata(hygiene);
}
// filter by handSenitizer
document.getElementById("handSenitizer").addEventListener("click", senitizer);
function senitizer() {
  var senitizer = arrShow.filter(function (elem) {
    return elem.sub_category === "senetizer";
  });
  dispalaydata(senitizer);
  document.getElementById("sortByPrice").addEventListener("change", sortPrice);
  function sortPrice() {
    var Asort = document.getElementById("sortByPrice").value;
    if (Asort === "lth") {
      senitizer.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });
    }

    if (Asort === "htl") {
      senitizer.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
    dispalaydata(senitizer);
  }

  dispalaydata(senitizer);
}
// filter by Mask
document.getElementById("mask").addEventListener("click", myMask);
function myMask() {
  var mask = arrShow.filter(function (elem) {
    return elem.sub_category === "Mask";
  });
  dispalaydata(mask);
  document.getElementById("sortByPrice").addEventListener("change", sortPrice);
  function sortPrice() {
    var Asort = document.getElementById("sortByPrice").value;
    if (Asort === "lth") {
      mask.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });
    }

    if (Asort === "htl") {
      mask.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
    dispalaydata(mask);
  }

  dispalaydata(mask);
}

// filter by coviselfFilter
document.getElementById("coviself").addEventListener("click", coviselfFilter);
function coviselfFilter() {
  var covidself = arrShow.filter(function (elem) {
    return elem.brand === "coviself";
  });
  dispalaydata(covidself);
  document.getElementById("sortByPrice").addEventListener("change", sortPrice);
  function sortPrice() {
    var Asort = document.getElementById("sortByPrice").value;
    if (Asort === "lth") {
      covidself.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });
    }

    if (Asort === "htl") {
      covidself.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
    dispalaydata(covidself);
  }

  dispalaydata(covidself);
}
// filter by merilBrand
document.getElementById("meril").addEventListener("click", merilBrand);
function merilBrand() {
  var merile = arrShow.filter(function (elem) {
    return elem.brand === "Meril";
  });
  dispalaydata(merile);
  document.getElementById("sortByPrice").addEventListener("change", sortPrice);
  function sortPrice() {
    var Asort = document.getElementById("sortByPrice").value;
    if (Asort === "lth") {
      merile.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });
    }

    if (Asort === "htl") {
      merile.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
    dispalaydata(merile);
  }

  dispalaydata(merile);
}
// filter by panbioBrand
document.getElementById("panbio").addEventListener("click", panbioBrand);

function panbioBrand() {
  var panb = arrShow.filter(function (elem) {
    return elem.brand === "Panbio";
  });
  dispalaydata(panb);
  document.getElementById("sortByPrice").addEventListener("change", sortPrice);
  function sortPrice() {
    var Asort = document.getElementById("sortByPrice").value;
    if (Asort === "lth") {
      panb.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });
    }

    if (Asort === "htl") {
      panb.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
    dispalaydata(panb);
  }

  dispalaydata(panb);
}
// filter by covidBrand
document.getElementById("covid").addEventListener("click", covidBrand);
function covidBrand() {
  var covidTest = arrShow.filter(function (elem) {
    return elem.brand === "Covid test";
  });
  dispalaydata(covidTest);
  document.getElementById("sortByPrice").addEventListener("change", sortPrice);
  function sortPrice() {
    var Asort = document.getElementById("sortByPrice").value;
    if (Asort === "lth") {
      covidTest.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      });
    }

    if (Asort === "htl") {
      covidTest.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      });
    }
    dispalaydata(covidTest);
  }

  dispalaydata(covidTest);
}
//  Sort By Prices low to high and high to low

document.getElementById("sortByPrice").addEventListener("change", sortPrice);
function sortPrice() {
  var priceSort = document.getElementById("sortByPrice").value;
  if (priceSort === "lth") {
    arrShow.sort(function (a, b) {
      return parseInt(a.price) - parseInt(b.price);
    });
  }
  // dispalaydata(arrShow);
  if (priceSort === "htl") {
    arrShow.sort(function (a, b) {
      return parseInt(b.price) - parseInt(a.price);
    });
  }
  dispalaydata(arrShow);
}

//   Fetxh data from obj redirect to product page whenn user click on any product

function FecthProductDetails(i) {
  event.preventDefault();
  var arr = Data.filter(function (ele, index) {
    if (index === i) {
      console.log(arr);
      localStorage.setItem("ProductImg", JSON.stringify(ele.image_url));
      localStorage.setItem("ProductName", JSON.stringify(ele.name));
      localStorage.setItem("ProductPrice", ele.price);
      localStorage.setItem("ProductMRP", ele.strikedoffprice);
      localStorage.setItem("ProductOff", JSON.stringify(ele.offer));
    }

    // dispalaydata();
  });

  window.location.href = "/Product page/Product.html";
}
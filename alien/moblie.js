let allProductImage = [{
    mobile:[
        {
              id:0,
              mobileName:"Realme C11 2021 (Cool Blue, 128 GB) (6 GB RAM)",
              frontImage:"./img/realme1.jpeg", 
              backImage:"./img/realme2+.jpeg", 
              sideImage:"./img/realme1.jpeg",    
              halfSimage:"./img/realme4+.jpeg", 
              price:7000,

    },

              {
                id:1,
                mobileName:"Realme C11 2021 (Cool Blue, 128 GB) (6 GB RAM)",
                frontImage:"./img/realmef1.jpeg", 
                backImage:"./img/realmef2+.jpeg", 
                sideImage:"./img/realmef3+.jpeg",    
                halfSimage:"./img/realmeb1.jpeg", 
                price:6000,
              },

    ],

    stabilizer:[{
        id:0,
        mobileName:"Realme C11 2021 (Cool Blue, 128 GB) (6 GB RAM)",
        frontImage:"./img/realmef1.jpeg", 
        backImage:"./img/realmef2+.jpeg", 
        sideImage:"./img/realmef3+.jpeg",    
        halfSimage:"./img/realmeb1.jpeg", 
        price:7000,  

        }]
    

    
}]

document.addEventListener("DOMContentLoaded", loadProductsView)
let mobilecCategory  = document.querySelector(".mobilecCategory")

function loadProductsView(){
    console.log(localStorage.getItem("onClickProductImg"));
    // console.log(allProductImage[0].length);
    // localStorage.getItem("onClickProductImg")
    
    let productsList = allProductImage[0][localStorage.getItem("onClickProduct")]
    let diplayProduct = productsList[localStorage.getItem("onClickProductImg")]
 

        mobilecCategory.innerHTML=`<div class="mobile">
        <div class="slideveiw">
            <img src="${diplayProduct.frontImage}" alt="" srcset="" class="phoneImg" onclick="changeImage(this)">
        </div>
    
        <div class="slideveiw">
            <img src="${diplayProduct.backImage}" alt="" srcset="" class="phoneImg" onclick="changeImage(this)" >
        </div>
    
        <div class="slideveiw">
            <img src="${diplayProduct.sideImage}" alt="" srcset="" class="phoneImg" onclick="changeImage(this)">
        </div>
    
        <div class="slideveiw">
            <img src="${diplayProduct.frontImage}" alt="" srcset="" class="phoneImg" onclick="changeImage(this)" >
        </div>
    
        <div class="slideveiw">
            <img src="${diplayProduct.halfSimage}" alt="" srcset="" class="phoneImg" onclick="changeImage(this)" >
        </div>
    </div>
    
    <div class="mobileView">
        <div class="productView">
            <img src="${diplayProduct.backImage}" alt="" srcset="" class="phoneviewg" onclick="changeImage(this)">
         
        </div>
    
        <div class="mobileBtn">
            <button class="addCart">add to cart</button>
            <button class="buyNow">Buy Now</button>
    
        </div>
    </div>
    <div class="mobileSpiec">
    
        <!-- <div class="mobile"> -->
        <h4 class="mobileName">realme C11 2021 (Cool Blue, 32 GB) (2 GB RAM)</h4>
    
        <!-- </div> -->
    
    
        <div class="star">
            <button class="starBtn">4.4 <i class="fa fa-star stars"></i></button>
            1,62,344 Ratings & 7,440 Reviews
    
    
        </div>
    
        <div class="price">
            <h1> Rs : 7,900 </h1>
    
    
        </div>
    
        <div class="offer">
            <h3 class="offerName"> available offer</h3>
    
            <div class="offerTag">
                <i class="fa fa-bookmark" style="font-size:16px;color:green"></i>
                <p class="bankOffer"><b class="bold">Bank Offer</b> 5% Unlimited Cashback on Flipkart Axis Bank
                    Credit Card</p>
                <a href="#" class="turnCondition">
                    <h4 class="turnConditionTag">Tc</h4>
                </a>
    
            </div>
    
    
            <div class="offerTag">
                <i class="fa fa-bookmark" style="font-size:16px;color:green"></i>
                <p class="bankOffer"><b class="bold">Freebie </b>Free ₹100 Cashback - ZebPay</p>
                <a href="#" class="turnCondition">
                    <h4 class="turnConditionTag">Tc</h4>
                </a>
    
            </div>
    
            <div class="offerTag">
                <i class="fa fa-bookmark" style="font-size:16px;color:green"></i>
                <p class="bankOffer"><b class="bold">Freebie </b>Get ₹500 cash bonus</p>
                <a href="#" class="turnCondition">
                    <h4 class="turnConditionTag">Tc</h4>
                </a>
    
            </div>
    
            <div class="offerTag">
                <i class="fa fa-bookmark" style="font-size:16px;color:green"></i>
                <p class="bankOffer"><b class="bold">Freebie </b>Upto 25% off on PharmEasy</p>
                <a href="#" class="turnCondition">
                    <h4 class="turnConditionTag">Tc</h4>
                </a>
    
            </div>
    
            <div class="offerTag">
                <i class="fa fa-bookmark" style="font-size:16px;color:green"></i>
                <p class="bankOffer"><b class="bold">Partner Offer </b>Sign up for Flipkart Pay Later and get
                    Flipkart Gift Card worth ₹100*</p>
                <a href="#" class="turnCondition">
                    <h4 class="turnConditionTag">know more</h4>
                </a>
    
            </div>
        </div>
    
    
    
    </div>`
    
    }












// window.onload = displayImage;




// function displayImage(){
    
//     for (let index = 0; index < sideImg.length; index++) {
//         sideImg[index].addEventListener("click",changeImage)
//         // alert("jkjk")
        
//     }
// }



function changeImage(e){
    // console.log(e.productView);
    let productView = document.querySelector(".productView")
    productView.innerHTML =`<img src=${e.attributes.src.value} class="phoneviewg"/>`
// console.log(e.target);
}






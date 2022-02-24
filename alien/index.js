document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 4,
        focus  : 'center',
        } );
        // splide1
    splide.mount();
} );

document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide1', {
      type   : 'loop',
      perPage: 4,
      focus  : 'center',
      } );
      
  splide.mount();
} );


  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-slider' ).mount();
  } );

 

  var elem = document.querySelector('.carousel');
  var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true
  });


  // document.addEventListener("DOMContentLoaded", selectedProduct)
  
  // function selectedProduct(e) {
    
  //   let selected = document.querySelector(".Name")

  //   selected.addEventListener("click",pageloader)

  //   function pageloader(e){

  //     if(e.target.innerHTML === "moblie"){
  //       window.location.href ="http://127.0.0.1:5500/frontPage.html"
  //     }
  //   }

    
    
  // }

  function setProductName(e){
    let loading = document.querySelector(".loading")
    loading.style.display ="block";

    localStorage.setItem("onClickProduct",e.attributes.prodname.value)
    setTimeout(()=>{
      window.location.href ="http://127.0.0.1:5500/frontPage.html"
    },1000)
  }
  

// element argument can be a selector string
//   for an individual element

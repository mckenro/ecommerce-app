//backend

var total = 0;
var ship = 0;
var taxCalc = 0;
var cartCounter = 0;


function NewProduct(title, category, description, price, images, thumbnails, swatches, colors, sizes, propertiesList){
 this.title = title;
 this.category = category;
 this.description = description;
 this.price = price;
 this.images = images;
 this.thumbnails = thumbnails;
 this.swatches = swatches;
 this.colors = colors;
 this.sizes = sizes;
 this.propertiesList = propertiesList;
}


var womanShirtOne = new NewProduct("Lady Shirt One", "Women's", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25, ["img/dolman_sample_gray.png", "img/dolman_sample_blue.png", "img/dolman_sample_red.png"], ["img/dolman_sample_gray_thumb.jpg", "img/dolman_sample_blue_thumb.jpg", "img/dolman_sample_red_thumb.jpg"], ["img/gray_thumb.jpg", "img/blue_thumb.jpg", "img/red_thumb.jpg"], ["Heather Gray", "Ocean Blue", "Deep Red"], ["Small", "Medium", "Large", "Extra Large"], ["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Loose, flowy fit"]);


NewProduct.prototype.productdetail = function(){

  //loop to add all product thumbnail images
  for (var i = 0; i< this.thumbnails.length; i++) {
    $("#thumbnail-area").append("<img class=" + "'thumb" + i + "'" + " " + "src=" + this.thumbnails[i] + "></img>");
  };

  //loop to add all product images
  for (var i = 0; i< this.images.length; i++) {
    $("#product-image-large").append("<div id='product" + i + "' style='background-image:url(" + this.images[i] + ");'>");
  };

  //loop to add all product color swatch images
  for (var i = 0; i< this.swatches.length; i++) {
    $("#swatch-area").append("<img id=" + "'swatch" + i + "'" + " " + "src=" + this.swatches[i] + "></img>");
  };

  $("h1.product-title").append(this.title);

  $("h2.product-price").append("$" + this.price.toFixed(2));

  $("p.product-description").append(this.description);

  for (var i = 0; i< this.colors.length; i++) {
    $("#selColor").append("<option " + "value=" + this.colors[i] + "class=" + '"product-color">' + this.colors[i] + "</option>");
  };

  for (var i = 0; i< this.sizes.length; i++) {
    $("#selSize").append("<option " + "class=" + '"product-size">' + this.sizes[i] + "</option>");
  };

  for (var i = 0; i< this.sizes.length; i++) {
    $("#product-properties").append("<li " + "class=" + '"product-property">' + this.propertiesList[i] + "</li>");
  };

}

 function CustomerInfo(names, address, city, state, zip, phone, shipAddress, shipCity,  shipState, shipZip, cardNumber, expire, cvc){
   this.names = names;
   this.address = address;
   this.city = city;
   this.state = state;
   this.zip = zip;
   this.phone = phone;
   this.shipAddress = shipAddress;
   this.shipCity = shipCity;
   this.shipState = shipState;
   this.shipZip = shipZip;
   this.cardNumber = cardNumber;
   this.expire = expire;
   this.cvc = cvc;
 }

 NewProduct.prototype.calculatePrice = function(){
   $("#purchase").show();
   $(".emptyCart").hide();
   cartCounter = cartCounter + 1;
   $(".cartItems").append("<li class='orderStyle'>" + this.title + " $" + this.price + "</li>");
   $("#cartCount").text(cartCounter);
   return total += this.price
 }

 NewProduct.prototype.tax = function(){
    taxCalc = total * .096;
    taxDisplay = taxCalc.toFixed(2);
   $("#tax").text("Tax: $" + taxDisplay);
 }
 NewProduct.prototype.shipping = function(){
    if((total<= 25)&&(total>=1)){
     $("#shippingTotal").text("Shipping: $3.25")
     ship = 3.25;
   }else if ((total >25) && (total<51)){
     $("#shippingTotal").text("Shipping: $5.50")
     ship = 5.5;
   }else{
     $("#shippingTotal").text("Shipping: Free")
     ship =  0;
   };
 }


 NewProduct.prototype.shopInfo = function() {
 $(".title").append( this.title + " $" + this.price);
 }

 NewProduct.prototype.shopDisplay = function() {
 $(".row").append(
   "<div class='col-md-3'>" +
   "<a href='#'><img class="shop" src=" + this.images"></a>"
   + "<p class='title'></p>" + "</div>")
}

CustomerInfo.prototype.makethingsappear = function(){
  $("#userInput").hide();
  $(".userConformation").show();
  $("#payInfo").append("<li>" + "Name: " + this.names + "</li>");
  $("#payInfo").append("<li>" + "Address: "+ this.address + " " + this.city + ", " + this.state + " " + this.zip + "</li>");
  $("#payInfo").append("<li>" + "Phone: " + this.phone + "</li>");
  $("#shipInfo").append("<li>" + "Ship to: " + this.names + "</li>");
  $("#shipInfo").append("<li>" + "Address: "+ this.shipAddress + " " + this.shipCity + ", " + this.shipState + " " + this.shipZip + "</li>");
}
//frontend

//product detail page thumbnail gallery
$(document).ready(function() {

//  var colorSelection = $("#selColor").val();

  womanShirtOne.productdetail();
  $(".thumb0").click(function(event) {
    event.preventDefault();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product1").hide();
    $("#product0").show();
  });
  $(".thumb1").click(function(event) {
    event.preventDefault();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product0").hide();
    $("#product1").show();
  });
  $(".thumb2").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product0").hide();
    $("#product2").show();
  });
  $(".thumb3").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product6").hide();
    $("#product3").show();
  });
  $(".thumb4").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product5").hide();
    $("#product0").hide();
    $("#product4").show();
  });
  $(".thumb5").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product0").hide();
    $("#product5").show();
  });
  //swatch hover events
$("#swatch0").hover(function(event) {
  event.preventDefault();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product1").hide();
  $("#product0").show();
} , function(event) {
  event.preventDefault();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product1").hide();
  $("#product0").show();
});
$("#swatch1").hover(function(event) {
  event.preventDefault();
  $("#product0").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product2").hide();
  $("#product1").show();
} , function(event) {
  event.preventDefault();
  $("#product0").show();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product2").hide();
  $("#product1").hide();
});
$("#swatch2").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product0").hide();
  $("#product2").show();
} , function(event) {
  event.preventDefault();
  $("#product0").show();
  $("#product2").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product1").hide();
  $("#product2").hide();
});
$("#swatch3").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product3").hide();
  $("#product5").hide();
  $("#product0").hide();
  $("#product3").show();
} , function(event) {
  event.preventDefault();
  $("#product0").show();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product1").hide();
});
$("#swatch4").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product3").hide();
  $("#product5").hide();
  $("#product0").hide();
  $("#product4").show();
} , function(event) {
  event.preventDefault();
  $("#product0").show();
  $("#product3").hide();
  $("#product1").hide();
  $("#product5").hide();
  $("#product2").hide();
  $("#product4").hide();
});
$("#swatch5").hover(function(event) {
  event.preventDefault();
  $("#product0").hide();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product1").hide();
  $("#product5").show();
} , function(event) {
  event.preventDefault();
  $("#product0").show();
  $("#product3").hide();
  $("#product4").hide();
  $("#product1").hide();
  $("#product6").hide();
  $("#product5").hide();
});

  $("#userInput").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    var phone = $("#phone").val();
    var shipAddress = $("#shipAddress").val();
    var shipCity = $("#shipCity").val();
    var shipState = $("#shipState").val();
    var shipZip = $("#shipZip").val();
    var cardNumber = $("#cardNumber").val();
    var expire = $("#expire").val();
    var cvc = $("#cvc").val();
    var customer = new CustomerInfo(name, address, city, state, zip, phone, shipAddress, shipCity, shipState, shipZip, cardNumber, expire, cvc);
    customer.makethingsappear();
  })
  $("#purchase").click(function(event){
    event.preventDefault();
    $(".hideUserInput").show();
    $("#emailDiscount").hide();
    $(".emptyCart").hide();
    $("#purchase").hide();
    $(".cartItems").hide();
  });
  $("#addToCart").click(function(event){
    event.preventDefault();
    womanShirtOne.calculatePrice();
    womanShirtOne.shipping();
    womanShirtOne.tax();
  });
  // $("#showCart").click(function(event){
  //   event.preventDefault();
  //   $(product-detail.html).hide();
  //   $(checkout.html).show();
  // });




  womanShirtOne.shopInfo();
  womanShirtOne.shopDisplay();

  $("#itemTotal").append(total);
  var totalWithTax = total + ship + taxCalc;
  var totalFix = totalWithTax.toFixed(2);
  $("#grandTotal").text("Total: $" + totalFix);


  $("#emailDiscount").submit(function(event){
    event.preventDefault();
    var discount = (totalWithTax * .2);
    var discountFix = discount.toFixed(2);
    var newPrice = totalWithTax - discountFix;
    $("#discountTotal").text("Total with E-mail Discount: $" + newPrice);
  });
  $("#thanks").click(function(event){
    event.preventDefault();
    $(".userConformation").hide();
    $("#priceCalculator").hide();
    $("#purchase").hide();
    $(".thankYou").show();

  });
});

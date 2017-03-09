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

// womens shirt prototypes go below here
var womanShirtOne = new NewProduct("Womens Shirt One", "Womens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25,
["img/W1_coral.png","img/W1_blue.png", "img/W1_purple.png", "img/W1_gray.png"],
["img/Thumbs/W1_coral_thumb.jpg", "img/Thumbs/W1_blue_thumb.jpg", "img/Thumbs/W1_purple_thumb.jpg", "img/Thumbs/W1_gray_thumb.jpg"],
["img/swatch/W1_coral_Swatch.jpg", "img/swatch/W1_blue_Swatch.jpg", "img/swatch/W1_purple_Swatch.jpg", "img/swatch/W1_gray_Swatch.jpg"],
["Heather Gray", "Ocean Blue", "Purple", "Coral"],
["Small", "Medium", "Large", "Extra Large"],
["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Loose, flowy fit"]);

var womanShirtTwo = new NewProduct("Womens Shirt Two", "Womens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25,
["img/W2_black.png","img/W2_Gray.png", "img/W2_Navy.png", "img/W2_Turqouise.png"],
["img/Thumbs/W2_black_thumb.jpg", "img/Thumbs/W2_Gray_thumb.jpg", "img/Thumbs/W2_Navy_thumb.jpg", "img/Thumbs/W2_Turqouise_thumb.jpg"],
["img/swatch/M4_Black_Swatch.jpg", "img/swatch/W2_Gray_Swatch.jpg", "img/swatch/W2_Navy_Swatch.jpg", "img/swatch/W2_Turqouise_Swatch.jpg"],
["Heather Black", "Heather Gray", "Navy", "Turqouise"], ["Small", "Medium", "Large", "Extra Large"],
["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Loose, flowy fit"]);

var womanShirtThree = new NewProduct("Womens Shirt Three", "Womens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25,
["img/W3_Red.png","img/W3_Aqua.png", "img/W3_Purple.png", "img/W3_Dark-Gray.png"],
["img/Thumbs/W3_Red_thumb.jpg", "img/Thumbs/W3_Aqua_thumb.jpg", "img/Thumbs/W3_Purple_thumb.jpg", "img/Thumbs/W3_Dark-Gray_thumb.jpg"],
["img/swatch/W3_Red_Swatch.jpg", "img/swatch/W3_Aqua_Swatch.jpg", "img/swatch/W3_Purple_Swatch.jpg", "img/swatch/W3_Dark-Gray_Swatch.jpg"],
["Deep Red", "Aqua", "Purple", "Dark Gray"], ["Small", "Medium", "Large", "Extra Large"], ["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Loose, flowy fit"]);

var womanShirtFour = new NewProduct("Womens Shirt Four", "Womens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25,
["img/W4_Gold.png","img/W4_Blue.png", "img/W4_Red.png", "img/W4_Gray.png"],
["img/Thumbs/W4_Gold_thumb.jpg", "img/Thumbs/W4_Blue_thumb.jpg", "img/Thumbs/W4_Red_thumb.jpg", "img/Thumbs/W4_Gray_thumb.jpg"],
["img/swatch/W4_Gold_Swatch.jpg", "img/swatch/W4_Blue_Swatch.jpg", "img/swatch/W4_Red_Swatch.jpg", "img/swatch/W4_Gray_Swatch.jpg"],
["Gold Heather", "Ocean Blue", "Deep Red", "Heather Gray"], ["Small", "Medium", "Large", "Extra Large"], ["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Loose, flowy fit"]);

// mens shirt prototypes go below here
var menShirtOne = new NewProduct("Mens Shirt One", "Mens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25,
["img/M1_Red.png","img/M1_Blue.png", "img/M1_Green.png", "img/M1_Gray.png"],
["img/Thumbs/M1_Red_thumb.jpg", "img/Thumbs/M1_Blue_thumb.jpg", "img/Thumbs/M1_Green_thumb.jpg", "img/Thumbs/M1_Gray_thumb.jpg"],
["img/swatch/M1_Red_Swatch.jpg", "img/swatch/M1_Blue_Swatch.jpg", "img/swatch/M1_Green_Swatch.jpg", "img/swatch/M1_Gray_Swatch.jpg"],
["Heather Red", "Ocean Blue", "Heather Green", "Heather Gray"],
["Small", "Medium", "Large", "Extra Large"],
["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Fashion fit"]);

var menShirtTwo = new NewProduct("Mens Shirt Two", "Mens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 37,
["img/M2_Red.png","img/M2_Navy.png", "img/M2_Purple.png", "img/M2_Gray.png"],
["img/Thumbs/M2_Red_thumb.jpg", "img/Thumbs/M2_Navy_thumb.jpg", "img/Thumbs/M2_Purple_thumb.jpg", "img/Thumbs/M2_Gray_thumb.jpg"],
["img/swatch/M2_Red_Swatch.jpg", "img/swatch/M2_Navy_Swatch.jpg", "img/swatch/M2_Purple_Swatch.jpg", "img/swatch/M2_Gray_Swatch.jpg"],
["Heather Red", "Navy", "Heather Purple", "Heather Gray"],
["Small", "Medium", "Large", "Extra Large"],
["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Fashion fit"]);

var menShirtThree = new NewProduct("Mens Shirt Three", "Mens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25,
["img/M3_Blue.png","img/M3_Eggplant.png", "img/M3_Olive.png", "img/M3_Gray.png"],
["img/Thumbs/M3_Blue_thumb.jpg", "img/Thumbs/M3_Egplant_thumb.jpg", "img/Thumbs/M3_Olive_thumb.jpg", "img/Thumbs/M3_Gray_thumb.jpg"],
["img/swatch/M3_Blue_Swatch.jpg", "img/swatch/M3_Eggplant_Swatch.jpg", "img/swatch/M3_Olive_Swatch.jpg", "img/swatch/M3_Gray_Swatch.jpg"],
["Heather Blue", "Eggplant", "Olive", "Heather Gray"],
["Small", "Medium", "Large", "Extra Large"],
["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Fashion fit"]);

var menShirtFour = new NewProduct("Mens Shirt Four", "Mens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 28,
["img/M4_Navy.png","img/M4_Green.png", "img/M4_Brown.png", "img/M4_Black.png"],
["img/Thumbs/M4_Navy_thumb.jpg", "img/Thumbs/M4_Green_thumb.jpg", "img/Thumbs/M4_Brown_thumb.jpg", "img/Thumbs/M4_Black_thumb.jpg"],
["img/swatch/M4_Navy_Swatch.jpg", "img/swatch/M4_Green_Swatch.jpg", "img/swatch/M4_Brown_Swatch.jpg", "img/swatch/M4_Black_Swatch.jpg"],
["Midnight Navy", "Heather Green", "Espresso", "Heather Black"],
["Small", "Medium", "Large", "Extra Large"],
["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Fashion fit"]);

// youth shirt prototypes go below here
var youthShirtOne = new NewProduct("Youth Shirt One", "Mens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25,
["img/Y1_Gray.png","img/Y1_Navy.png", "img/Y1_Espresso.png", "img/Y1_Red.png"],
["img/Thumbs/Y1_Gray_thumb.jpg", "img/Thumbs/Y1_Navy_thumb.jpg", "img/Thumbs/Y1_Espresso_thumb.jpg", "img/Thumbs/Y1_Red_thumb.jpg"],
["img/swatch/Y1_Gray_Swatch.jpg", "img/swatch/Y1_Navy_Swatch.jpg", "img/swatch/Y1_Espresso_Swatch.jpg", "img/swatch/Y1_Red_Swatch.jpg"],
["Heather Gray", "Navy", "Espresso", "Heather Red"],
["Small", "Medium", "Large", "Extra Large"],
["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Fashion fit"]);

var youthShirtTwo = new NewProduct("Youth Shirt Two", "Mens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25,
["img/Y2_Orange.png","img/Y2_Blue.png", "img/Y2_Purple.png", "img/Y2_Gray.png"],
["img/Thumbs/Y2_Orange_thumb.jpg", "img/Thumbs/Y2_Blue_thumb.jpg", "img/Thumbs/Y2_Purple_thumb.jpg", "img/Thumbs/Y2_Gray_thumb.jpg"],
["img/swatch/Y2_Orange_Swatch.jpg", "img/swatch/Y2_Blue_Swatch.jpg", "img/swatch/Y2_Purple_Swatch.jpg", "img/swatch/Y2_Gray_Swatch.jpg"],
["Heather Orange", "Ocean Blue", "Heather Purple", "Heather Gray"],
["Small", "Medium", "Large", "Extra Large"],
["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Fashion fit"]);

var youthShirtThree = new NewProduct("Youth Shirt Three", "Mens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25,
["img/Y3_Red.png","img/Y3_Blue.png", "img/Y3_Green.png", "img/Y3_Gray.png"],
["img/Thumbs/Y3_Red_thumb.jpg", "img/Thumbs/Y3_Blue_thumb.jpg", "img/Thumbs/Y3_Green_thumb.jpg", "img/Thumbs/Y3_Gray_thumb.jpg"],
["img/swatch/Y3_Red_Swatch.jpg", "img/swatch/Y3_Blue_Swatch.jpg", "img/swatch/Y3_Green_Swatch.jpg", "img/swatch/Y3_Gray_Swatch.jpg"],
["Heather Red", "Ocean Blue", "Heather Green", "Heather Gray"],
["Small", "Medium", "Large", "Extra Large"],
["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Fashion fit"]);

var youthShirtFour = new NewProduct("Youth Shirt Four", "Mens", "Gastropub pork belly mustache vaporware kogi artisan. Bicycle rights flexitarian butcher 3 wolf moon meh selvage, neutra narwhal tbh humblebrag. Fingerstache kitsch keffiyeh, crucifix migas gochujang you probably haven't heard of them waistcoat pitchfork vape distillery fixie.</p><p>Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25,
["img/Y4_Maroon.png","img/Y4_Blue.png", "img/Y4_Purple.png", "img/Y4_Slate.png"],
["img/Thumbs/Y4_Maroon_thumb.jpg", "img/Thumbs/Y4_Blue_thumb.jpg", "img/Thumbs/Y4_Purple_thumb.jpg", "img/Thumbs/Y4_Slate_thumb.jpg"],
["img/swatch/Y4_Maroon_Swatch.jpg", "img/swatch/Y4_Blue_Swatch.jpg", "img/swatch/Y4_Purple_Swatch.jpg", "img/swatch/Y4_Slate_Swatch.jpg"],
["Maroon", "Ocean Blue", "Purple", "Slate"],
["Small", "Medium", "Large", "Extra Large"],
["Blended fabric construction gives a heathered look", "Polyester retains shape and elasticity, Cotton lends both comfort and durability", "Durable rib neckband", "Fashion fit"]);

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

 NewProduct.prototype.shopDisplay = function() {

 $("#shopGrid").append(
   "<div class='col-md-3'>" +
   "<a href='#'><img class='shop' src='" + this.images[0] + "'></a>"
   + "<p class='title'>" + this.title + " $" + this.price +
   "</p>" + "</div>")
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

  womanShirtOne.shopDisplay();
  womanShirtTwo.shopDisplay();
  womanShirtThree.shopDisplay();
  womanShirtFour.shopDisplay();
  menShirtOne.shopDisplay();
  menShirtTwo.shopDisplay();
  menShirtThree.shopDisplay();
  menShirtFour.shopDisplay();
  youthShirtOne.shopDisplay();
  youthShirtTwo.shopDisplay();
  youthShirtThree.shopDisplay();
  youthShirtFour.shopDisplay();

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
    $("#product0").hide();
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
  //Nav bar commands
  $("#cartButton").click(function(event){
    event.preventDefault();
    $(".startPage").hide();
    $(".shopPage").hide();
    $(".productDescription").hide();
    $(".checkout").show();
  });
  $("#HomeButton").click(function(event){
    event.preventDefault();
    $(".startPage").show();
    $(".shopPage").hide();
    $(".productDescription").hide();
    $(".checkout").hide();
  });
  $(".everyoneClick").click(function(event){
    event.preventDefault();
    $(".startPage").hide();
    $(".shopPage").show();
    $(".productDescription").hide();
    $(".checkout").hide();
  });
  $(".manClick").click(function(event){
    event.preventDefault();
    $(".startPage").hide();
    $(".shopPage").show();
    $(".productDescription").hide();
    $(".checkout").hide();
  });
  $(".womanClick").click(function(event){
    event.preventDefault();
    $(".startPage").hide();
    $(".shopPage").show();
    $(".productDescription").hide();
    $(".checkout").hide();
  });
  $(".kidClick").click(function(event){
    event.preventDefault();
    $(".startPage").hide();
    $(".shopPage").show();
    $(".productDescription").hide();
    $(".checkout").hide();
  });
});

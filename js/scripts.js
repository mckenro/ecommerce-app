//backend
var total = 0;
var ship = 0;
var taxCalc = 0;

 function NewProduct(title, category, description, price, images){
   this.title = title;
   this.category = category;
   this.description = description;
   this.price = price;
   this.images = [];
 }
var womanShirtOne = new NewProduct("Lady Shirt One", "Women's", "Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25, ["img/dolman_sample_gray.png", "img/dolman_sample_blue.png", "img/dolman_sample_red.png"], ["img/gray_thumb.jpg", "img/blue_thumb.jpg", "img/red_thumb.jpg"]);
var manShirtOne = new NewProduct("Man Shirt One", "Man's", "Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 20, ["img/dolman_sample_gray.png", "img/dolman_sample_blue.png", "img/dolman_sample_red.png"], ["img/gray_thumb.jpg", "img/blue_thumb.jpg", "img/red_thumb.jpg"]);
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
   $(".cartItems").append("<li class='orderStyle'>" + this.title + " $" + this.price + "</li>");
   return total += this.price
   console.log(total);
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
  $(".thumb1").click(function(event) {
    event.preventDefault();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product1").show();
  });
  $(".thumb2").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product2").show();
  });
  $(".thumb3").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product4").hide();
    $("#product3").show();
  });
  $(".thumb4").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").show();
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
    console.log(customer);
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

  womanShirtOne.calculatePrice();
  manShirtOne.calculatePrice();
  womanShirtOne.shipping();
  manShirtOne.shipping();
  womanShirtOne.tax();
  manShirtOne.tax();
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

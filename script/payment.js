var payData = JSON.parse(localStorage.getItem("cartPricing"));
console.log(payData)
document.querySelector(
  ".box2>div:nth-child(1)"
).innerHTML = `₹ ${payData.totalPrice}`;
document.querySelector(
  ".box2>div:nth-child(2)"
).innerHTML = `₹ ${payData.finalTotal}`;
document.querySelector(
  ".box2>div:nth-child(3)"
).innerHTML = `₹ ${payData.totalDisc}`;
document.querySelector(
  ".box2>div:nth-child(4)"
).innerHTML = `₹ ${payData.shippingCharge}`;
document.querySelector(
  ".box2>div:nth-child(5)"
).innerHTML = `₹ ${payData.finalPay}`;
if (payData.couponDisc > 0) {
  payData.finalPay =
    payData.finalPay -
    Math.floor(payData.finalPay * (payData.couponDisc / 100));
  document.querySelector(
    ".box2>div:nth-child(5)"
  ).innerHTML = `₹ ${payData.finalPay}`;
  document.querySelector(
    ".box1>div:nth-child(6)"
  ).innerHTML = `<div style="font-size:20px;">Grand Total   <div style="font-size:13px; font-weight:bold; color:green; display:block;">Applied ${payData.couponDisc}% off</div></div>`;
}

// Showing shipping details

var addData = JSON.parse(localStorage.getItem("addressData"));
console.log(addData)
document.querySelector("#shippingInfo > h5").textContent = addData.fullName;
document.querySelector("#shippingInfo > h6").textContent = addData.mobNo;
var addDiv = document.querySelector("#shippingInfo > p")
addDiv.textContent =
  addData.country + "  " + addData.addLine1 + " " + addData.addLine2 + addData.pin;


// Pay now button function 
document.getElementById("payNow").addEventListener("click", function () {
  document.querySelector(".credit-container1").style.display = "none";
  document.getElementById("orderPlaced").style.display = "block";
  document.querySelector(".credit-container").style.display = "none";
  document.querySelector(".payT").textContent = "";

})


//continue shopping button
document.querySelector("#orderPlaced>*:nth-child(4)").addEventListener("click", function () {
  localStorage.removeItem("nykaaCartDataNew");
  window.location.href = "women.html";
})



//Mask the Credit Card Number Input
var cardnumber_mask = new IMask(cardnumber, {
  mask: [
      {
          mask: '0000 000000 00000',
          regex: '^3[47]\\d{0,13}',
          cardtype: 'american express'
      },
      {
          mask: '0000 0000 0000 0000',
          regex: '^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}',
          cardtype: 'discover'
      },
      {
          mask: '0000 000000 0000',
          regex: '^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}',
          cardtype: 'diners'
      },
      {
          mask: '0000 0000 0000 0000',
          regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
          cardtype: 'mastercard'
      },
      // {
      //     mask: '0000-0000-0000-0000',
      //     regex: '^(5019|4175|4571)\\d{0,12}',
      //     cardtype: 'dankort'
      // },
      // {
      //     mask: '0000-0000-0000-0000',
      //     regex: '^63[7-9]\\d{0,13}',
      //     cardtype: 'instapayment'
      // },
      {
          mask: '0000 000000 00000',
          regex: '^(?:2131|1800)\\d{0,11}',
          cardtype: 'jcb15'
      },
      {
          mask: '0000 0000 0000 0000',
          regex: '^(?:35\\d{0,2})\\d{0,12}',
          cardtype: 'jcb'
      },
      {
          mask: '0000 0000 0000 0000',
          regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
          cardtype: 'maestro'
      },
      // {
      //     mask: '0000-0000-0000-0000',
      //     regex: '^220[0-4]\\d{0,12}',
      //     cardtype: 'mir'
      // },
      {
          mask: '0000 0000 0000 0000',
          regex: '^4\\d{0,15}',
          cardtype: 'visa'
      },
      {
          mask: '0000 0000 0000 0000',
          regex: '^62\\d{0,14}',
          cardtype: 'unionpay'
      },
      {
          mask: '0000 0000 0000 0000',
          cardtype: 'Unknown'
      }
  ],
  dispatch: function (appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');

      for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
          let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
          if (number.match(re) != null) {
              return dynamicMasked.compiledMasks[i];
          }
      }
  }
});

//Mask the Expiration Date
var expirationdate_mask = new IMask(expirationdate, {
    mask: 'MM{/}YY',
    groups: {
        YY: new IMask.MaskedPattern.Group.Range([0, 99]),
        MM: new IMask.MaskedPattern.Group.Range([1, 12]),
    }
});

//Mask the security code
var securitycode_mask = new IMask(securitycode, {
    mask: '0000',
});

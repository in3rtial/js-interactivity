/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
  // acquire the shipping values (don't really need the elements)
  var name = document.getElementById("shippingName").value;
  var zip = document.getElementById("shippingZip").value;

  // acquire the billing fields
  var billingNameNode = document.getElementById("billingName");
  var billingZipNode = document.getElementById("billingZip");

  if (document.getElementById("same").checked) {
    // copy the values from Shipping Name and Shipping Zip into the Billing Name and Billing Zip
    billingNameNode.setAttribute("value", name);
    billingZipNode.setAttribute("value", zip);
  } else {
    // Billing Name and Billing Zip should go blank
    billingNameNode.setAttribute("value", "");
    billingZipNode.setAttribute("value", "");
  }
}

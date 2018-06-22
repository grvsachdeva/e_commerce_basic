$(function () {

    let itemList = $('#cart-items')

    fetchItems(function (items) {
      let totalPrice = 0;
        html = `<table cellspacing="10" cellpadding="10" >
          <thead>
            <th>Product Name</th>
            <th>Per unit price</th>
            <th>Product Quantity</th>
            <th>Price</th>
          </thead>
        `
        for (item of items) {
            html = html + `<tr><td><b>${item.name}</b></td><td>${item.price}</td><td>${item.quantity}</td><td>${item.quantity * item.price}</td><td><i style="width:20px; height:20px;" class="fa fa-times-circle red" onclick="removeProduct('${item.name}')"></i></td></tr>`
            totalPrice += item.price * item.quantity;
        }
        html = html + `</table><hr><div class="row" id="totalPrice"><h3 style='text-align:center; margin-left:300px; color:red;'>Grand Total: <span style="color:black;">&#8377  ${totalPrice}</span></h3></div><br><br>`
        html = html + `<button class="col btn btn-success m-3"  onclick="">Proceed to Checkout >> </button>`

        itemList.append(html);
    })
})

function buyNow(name, price){
  console.log("params",name,"  ",price);
  addItemToCart(
      name,
      price,
      function (addedItem) {
          window.alert("Added " + addedItem.name + " to Cart")
          window.location="/cart.html";
      }
  )
}

function addItemCart(name, price){
  console.log("params",name,"  ",price);
  addItemToCart(
      name,
      price,
      function (addedItem) {
          window.alert("Added " + addedItem.name + " to Cart")
      }
  )
}

function createCartItem (product) {
    return $(`
    <div class="col-4 card mx-2 p-4">
        <h4 class="product-name">${product.name}</h4>
        <div class="product-manufacturer">${product.quantity}</div
        <div class="row">
            <div class="col m-3 p-3">
                <b>Rs. ${product.price}</b>
            </div>
        </div>
    </div>`
        )
}

function fetchItems (done) {
    $.get('/api/cart', function (data) {
        done(data)
    })
}

function removeProduct(name){
  console.log("Remove innn",name);

  $.post('api/cart/deleteProduct',{
    name: name
    },function (data) {
    console.log(data);
  })
  window.location = "/cart.html"

}

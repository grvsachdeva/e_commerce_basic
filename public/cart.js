// $(function () {
//
//     let cartItems = $('#cart-items')
//
//     $.get('/api/cart', function (items) {
//       cartItems.empty()
//       for (item of items) {
//           console.log(item);
//       }
//     })
//
//
//
//
// })

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

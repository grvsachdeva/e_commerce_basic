$(function () {
    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')

    $('#btnProductAdd').click(function () {

        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function (addedProduct) {
              $('body').prepend(`<div class="alert alert-success alert-dismissible">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <strong>${addedProduct.name}</strong> is successfully added to the database.</div>`);
            }
        )


    })


})

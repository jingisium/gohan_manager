$(document).on('turbolinks:load', function() {
  $('#add-form-btn').on('click', () => {
    const cloneCode = $('.box:last').clone(true);

    const cloneNo = cloneCode.attr('data-formno');
    const cloneNo2 = parseInt(cloneNo) + 1;

    cloneCode.attr('data-formno', cloneNo2);
    
    // var nameCode = cloneCode.find('#input-ingredient-name').attr('name');
    // var amountCode = cloneCode.find('#input-amount').attr('name');
    // var priceCode = cloneCode.find('#input-price').attr('name');

    // nameCode = nameCode.replace(/[0-9]{1,2}/, cloneNo2 );
    // amountCode = amountCode.replace(/[0-9]{1,2}/, cloneNo2 );
    // priceCode = priceCode.replace(/[0-9]{1,2}/, cloneNo2 );

    cloneCode.find('#input-ingredient-name');
    cloneCode.find('#input-amount');
    cloneCode.find('#input-price');

    cloneCode.insertBefore($('.box:last'));
  });
});



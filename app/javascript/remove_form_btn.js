$(document).on('turbolinks:load', function() {
  $('#delete-form-btn').on('click', function() {
    const len = $('.box').length;

    if ( len == 1 ) {
      alert("入力欄が1つしか無いため、削除できません");
      return
    }else{
      $(this).parents('.box').remove();
      
      var boxCount = 0;

      $('.box').each(function() {
        
        $(this).attr('data-formno', boxCount);

        $(this).find('.form-control').each(function() {
          var name = $(this).attr('name');
          name = name.replace(/[0-9]{1,2}/, boxCount);
        });

        boxCount += 1;
      });
    };
  });
});
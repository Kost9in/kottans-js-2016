$(() => {

  /* radio */
  $('.custom-radio').each((idx, element) => {
    const value = $(element).find('input[type="radio"]').prop('checked');
    if (value) $(element).addClass('checked');
  });
  $('.custom-radio').on('click', (e) => {
    e.preventDefault();
    const link = $(e.currentTarget);
    $(link).addClass('checked').parent('li').siblings('li').find('.custom-radio').removeClass('checked');
    $(link).find('input[type="radio"]').prop('checked', true);
    checkForm();
  });

  function checkForm () {
    console.log('check form');
  }

});

$(document).ready(function() {
    $('.prays-box').hide();
    $('.prays-box:first-child').show();
    $('.filter-btn').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.prays-box').hide();
      $('.' + pageInfo).show();
    })
  });
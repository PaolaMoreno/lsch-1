//= require modernizr.custom
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require classie
//= require cbpAnimatedHeader.min
//= require owl.carousel.min
//= require scrollReveal
//= require jquery.scrollTo
//= require jquery.nav
//= require imagesloaded.pkgd.min
//= require isotope.min
//= require jquery.magnific-popup.min
//= require jqBootstrapValidation
//= require custom

$(document).ready(function(){
  isotope();
  signupOverlay();
  $('#myTab a:last').tab('show');
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    e.target // activated tab
    e.relatedTarget // previous tab
    });

  $('.dropdown-toggle').dropdown();

  $('[data-toggle="popover"]').popover({
     
        trigger: 'hover'   }); 
  

});

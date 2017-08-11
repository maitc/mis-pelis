$(document).ready(function(){
    $(".button-collapse").sideNav();

    $('#user').append(localStorage.getItem('username'));
    $('#name').append(localStorage.getItem('name'));
    $('#country').append(localStorage.getItem('country'));


    /*$('').each(function(i, elem){
    		elem.click(function(){
          $('favs').append(`<div class="col s6 favs">
            <img src="`++`" alt="" class="img-favs responsive-img">
            <div class="titles-favs">
              <p class='red-text title'>`++`</p><i class="material-icons icon">more_vert</i>
            </div>
          </div>`)
        });
    });*/

});

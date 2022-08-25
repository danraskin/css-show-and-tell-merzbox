$(document).ready(onReady);

function onReady(){
    $('img').on('click',changeDisplayOrder);
    
}


function changeDisplayOrder(){
    $(self).css('order', shiftOrder);
}

//set albumImage variable to equal a selected CSS element

function shiftOrder(albumImage){
    //creates array of all css album orders
    //shifts selected album order to end of array
    //re-assigns album orders

}
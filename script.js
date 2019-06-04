function hideAllToppings() {
    $(".pepperoni").hide();
    $(".olives").hide();
    $(".mushrooms").hide(); 
}

function addPepperoni(){
    $(".pepperoni").show();
    }
    
function addOlives(){
    $(".olives").show();
    }
    
function addMushrooms(){
    $(".mushrooms").show();
    }
    
$(".pepperoni-olives").click(function() {
    addPepperoni();
    addOlives();
    $(".mushrooms").hide(); 
}); 

$(".pepperoni-mushrooms").click(function() {
   addPepperoni();
   addMushrooms();
   $(".olives").hide();
   
});

$(".vegetarian").click(function() {
    addOlives();
    addMushrooms();
    $(".pepperoni").hide();
});
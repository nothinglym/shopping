app.directive("shop",function(){
    return{
        rectrict:"EA",
        transclude:true,
        templateUrl:"content/view/_shop.html",
        scope:{
            item:"=items",
            index:"@index"
        },
        controller:"shopitemcontroller"
    }
});
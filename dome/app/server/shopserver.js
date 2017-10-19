app.factory("shopserver",["ajaxserver",function(ajaxserver){
    var factory={
        getinfo:function(){
            var arr=ajaxserver.ajax("get","http://localhost:8080/?data");
            return arr;
        }
    };
    return factory;
}]);
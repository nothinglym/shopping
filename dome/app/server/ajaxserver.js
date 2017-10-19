//自定义ajaxserver服务
app.factory("ajaxserver",["$http","$q",function($http,$q){
    return {
        ajax:function(type,url){
            //defer对promise封装
            var def=$q.defer();
            //http服务
            $http({
                method:type,
                url:url
                //成功回调
                }).then(function(data){
                 def.resolve(data);
                //错误回调
                },function (err) {
                 def.reject(err)
                })

            //返回promise对象
            return def.promise;
        }
    }
}])
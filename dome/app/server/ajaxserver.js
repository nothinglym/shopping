//�Զ���ajaxserver����
app.factory("ajaxserver",["$http","$q",function($http,$q){
    return {
        ajax:function(type,url){
            //defer��promise��װ
            var def=$q.defer();
            //http����
            $http({
                method:type,
                url:url
                //�ɹ��ص�
                }).then(function(data){
                 def.resolve(data);
                //����ص�
                },function (err) {
                 def.reject(err)
                })

            //����promise����
            return def.promise;
        }
    }
}])
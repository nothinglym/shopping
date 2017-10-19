app.controller("shopcontroller",["$scope","shopserver",function($scope,shopserver){
    //获取数据
    shopserver.getinfo().then(function(result){
        $scope.arr=result.data;
        price();
    });
    //删除项
    $scope.$on("deleteitem",function(event,index){
        $scope.arr.splice(index,1);
    });
    //全选
    $scope.allchecked = function () {
        if (!$scope.flag){
            $scope.flag = true;
            $scope.arr.forEach(function (item, index) {
                console.log(item.state);
                item.state = true;
            });
        } else {
            $scope.flag = false;
            $scope.arr.forEach(function (item, index) {
                item.state = false;
            });
        }
        price();
    };
    //选中每项
    $scope.$on("checkitem", function (event, index) {
        var items = $scope.arr;
        var count = 0;
        items[index].state = !items[index].state;
        for (var i = 0; i < items.length; i++) {
            if (items[i].state) {
                count++;
            }
        }
        if (count == items.length) {
            $scope.flag = true;
        } else {
            $scope.flag = false;
        }
        price();
    });
    //价格
    function price() {
        $scope.goodsCount = 0;
        $scope.goodsPrice = 0;
        $scope.arr.forEach(function (item) {
            if (item.state) {
                $scope.goodsCount += item.num;
                $scope.goodsPrice += item.num * item.price;
            }
        })
    }
    //改变数量
    $scope.$on('changeCount', function (event) {
        price();
    })

}]);
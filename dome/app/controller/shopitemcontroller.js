app.controller("shopitemcontroller",function($scope){
           //删除
           $scope.deleteitem=function(index){
               $scope.$emit("deleteitem",index);
           };
           //选中每项
            $scope.itemchecked=function(index){
             $scope.$emit("checkitem",index);
            };
           //点击事件
            $scope.itemcount = function (flag) {
                if (flag == "+") {
                    $scope.item.num += 1;
                } else {
                    if ($scope.item.num <= 1) return;
                    $scope.item.num -= 1;
                }
                $scope.$emit("changeCount");
            }

});
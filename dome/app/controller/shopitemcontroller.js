app.controller("shopitemcontroller",function($scope){
           //ɾ��
           $scope.deleteitem=function(index){
               $scope.$emit("deleteitem",index);
           };
           //ѡ��ÿ��
            $scope.itemchecked=function(index){
             $scope.$emit("checkitem",index);
            };
           //����¼�
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
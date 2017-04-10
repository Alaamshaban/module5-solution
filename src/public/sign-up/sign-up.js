(function () {
"use strict";

angular.module('public')
.controller('regController', regController);
regController.$inject = ['$http','userService'];
function regController($http,userService) {
  var reg = this;
reg.submit=function(){
var promise = userService.submit(reg.menu_number);
promise.then(function (response) {
reg.item=userService.show();
if(reg.item){
  userService.add(reg.firstname,reg.lastname,reg.Phone,reg.mail,reg.menu_number);
  reg.here=true;
  reg.nothere=false;
}
else {
  reg.here=false;
  reg.nothere=true;
}
});
};
}

})();

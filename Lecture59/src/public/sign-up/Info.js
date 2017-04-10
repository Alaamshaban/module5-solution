(function () {
"use strict";

angular.module('public')
.controller('userInfoController',userInfoController);
userInfoController.$inject = ['userService'];

function userInfoController(userService){
var reguser=this;
reguser.ok=userService.done();
reguser.saveduser=userService.get();
reguser.showItem=userService.showItem();
}


})();

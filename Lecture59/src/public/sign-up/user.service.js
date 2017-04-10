(function () {
"use strict";

angular.module('public')
.service('userService', userService);

userService.$inject = ['$http'];
function userService($http){
var service=this;
var saved={};
service.submit=function(menu_number){
  return $http({
     method: "GET",
     url: ("https://alaamshaban.herokuapp.com/menu_items.json")
   }).then(function (response) {
     service.show=function(){
     for(var i=0;i<response.data.menu_items.length;i++){
       if(response.data.menu_items[i].short_name==menu_number){
           service.item=response.data.menu_items[i];
           if(service.item){
             service.ok=true;
           }
       }
     }
             return service.item;
   };
});
};
service.done=function(){
  return service.ok;
}
service.showItem=function(){
      return service.item;
}
service.add=function(firstName,lastName,mobile,mail,menuNumber){
  var userinfo={
    firstName:firstName,
    lastName:lastName,
    mobile:mobile,
    mail:mail,
    menuNumber:menuNumber
  };
  saved=userinfo;
};
service.get=function(){
  return saved;
};
}
})();

var vm = require("vm");
var util = require("util");
 
var window = {
    p: 2
};
 
var p = 5;
 
global.p = 11;
 
vm.createContext(window);
vm.runInContext('p = 3;a = 4;console.log(typeof global);', window); // global是undefined
 
console.log(window.p);// 被改变为3
 
console.log(util.inspect(window));
Number.prototype.times = function(args) {
  var args = Array.prototype.slice.apply(arguments);
  for(var i = 0; i < this; i++) {
      args[0].apply(null, args.slice(1))
      }
};


function Bye(num) {console.log(num)};
function Hello() {console.log("hello");}
function Something(num, num2) {console.log(num, num2);}

(3).times(Hello, 4, 5, 6);
(2).times(Bye, 3);
(2).times(Something, 2, 3);
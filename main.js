var obj = {num:2};

var addTothis = function(a,b,c){

    return this.num + a +b + c;
};

console.log(addTothis.call(obj,3,4,5));  //  functionname.call(obj, functionargumnt)

var arr = [1,2,3];
console.log(addTothis.apply(obj,arr));

var bound = addTothis.bind(obj);

console.log(bound(2,2,3));

//   ASSIGNMENT   //

var Student = {age:23};

var adding = function(){
    console.log("Student age is "+this.age);
}

var prtage = adding.bind(Student);
prtage();

class student  {
    static count = 0;
    constructor(name,age,phno,marks){
        this.name = name;
        this.age = age;
        this.phno = phno;
        this.marks = marks;
        student.countstd();
    }

    static countstd(){
        return this.count++;
    }

     checkeligible(){
        if(this.marks>40) console.log("elibible for college");
        else console.log("Not eligible for college");
    
    }

    elgplsmnt(minmarks){
        return (minage) => {
            if(this.age>minage && this.marks>minmarks){
                console.log('Eligible for placement');
            }
            else console.log('Not eligible for placement');
        };


    }
}



let john = new student('john','21','9090','55');
let mayank = new student('mayank','23','9898','100');
let nm3 = new student('nm3','34','123','25');
let dkk = new student('dkk','18','456','45');
let jkk = new student('jkk','55','19191','12');

john.checkeligible();
jkk.checkeligible();
console.log(student.countstd());

john.elgplsmnt(65)(25);

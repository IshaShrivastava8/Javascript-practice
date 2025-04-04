class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`Username is :   ${this.userName}`);
    }
}

class teacher extends User{
    constructor(userName,email,password){
        super(userName) //just like java
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.userName}`)
    }
}

const teacher1 = new teacher('Hitesh','hitesh@123',123)
// console.log(teacher1)
// teacher1.addCourse()
const user1 = new User('isha')
// user1.addCourse()
// user1.logMe()
// teacher1.logMe()


// console.log(teacher1 === user1)
// console.log(teacher1 === teacher)
// console.log(teacher1 instanceof teacher)
console.log(teacher1 instanceof User)
class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`Username is :   ${this.userName}`);
    }
    static createId(){ //Now the access to this method has been stopped
        return `123`
    }
}

// const Akash = new User('Akash')
// console.log(Akash.createId())

class teacher extends User{
    constructor(userName,email){
        super(userName)
        this.email = email
    }
}

const newTeacher = new teacher('Manav','manav@123')
console.log(newTeacher)
console.log(newTeacher.logMe())
console.log(newTeacher.createId())//Won't allow inheritance because of static
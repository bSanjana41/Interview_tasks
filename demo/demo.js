// // let myPromise = new Promise((resolve, reject) => {

// // import { useEffect } from "react"

// //     let event = false

// //     event ? resolve(" Promise resolved") : reject("Promise rejected")

// // })
// // console.log ("after promise")

// // myPromise
// //     .then((e) => console.log(e))
// //     .catch((error) => console.log(error))


// const fetchAPI=()=>{
// console.log("test")
// }
// useEffect(()=>{
// fetchAPI()
// },[])


// const UserSchema= new Schema({
//     name:{type:String,required:true},
//     email:{type:String,unique:true}
// })

// const User= model("User",UserSchema)


//OOPs

class Car{
constructor(model){
    this.model=model
}
printModel(){
    console.log(this.model)
}
}

const bmwCar=new Car("BMW")
const audiCar=new Car("AUDI")
bmwCar.printModel()
audiCar.printModel()

let a=null
let b=NaN
console.log(typeof(a))
console.log(typeof(b));;
console.log(typeof(Car));;//type of class is function

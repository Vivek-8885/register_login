import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/LoginRegisterDB",{
    useNewUrlParser: true,
    useUnifiedTopology:true
},()=>{
    console.log('DB connected')
})

//ROUTES

app.post('/login',(req,res)=>{
    const{email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                // below we also returning the user details
                res.send({message:'Login Success',user:user})
            }
            else{
                res.send({message:'Password did not match'})
            }
        } 
        else{
            res.send({message:'User Not Found'});
        }
    })
})



app.post('/register',(req,res)=>{
    // here below reueat bosy will contain the data that is sent from the web
    // how it came here
    // in that file we have use axios.post ('this page url')
    // so that data is sent to this link in the .post that is how ot ir retrieved.
    // console.log(req.body)
    const{name,email,password}=req.body
    
    // checking if it already present in the document.
    User.findOne({email:email},(err,user)=>{
    if(user){
        console.log('Already Exists')
        res.send({message:"User Already Registered Please Login"});
    }
    else{
        console.log('Inserting new data')
        // inserting new data
        const user = new User({
            // name:name ???
            name,
            email,
            password
        })
    
        user.save(err=>{
            if(err){
                res.send(err);
            }
            else{
                res.send({message:' Successfully Registered Login now'})
            }
        })
    }
    })

})

// Declaring schema of document
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const User = new mongoose.model("User",userSchema)



app.listen(4000,()=>{
    console.log('Port Connected')
})
let mongoose=require('mongoose');

let userSchema=mongoose.Schema({
  name:{
    type:String,
    required:true
  }
  ,email:{
    type:String,
    required:true,
    unique:true
  }
  ,phone:{
    type:String,
    required:true
  }
  ,message:{
    type:String,
    required:true
  }
})
let Enquiry=mongoose.model('enquiry',userSchema);
module.exports=Enquiry
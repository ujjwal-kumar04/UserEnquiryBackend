const e = require('express');
const Enquiry = require('../models/enquiry');

let enquiryInsert = (req, res) => {
  let { name, email, phone, message } = req.body;
  let enquiryData = new Enquiry({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
  enquiryData.save()
  .then(()=>
  {
    res.send({ status: 1, message: "Enquiry saved successfully" });
  })
  .catch((err) => {
    res.send({ status: 0, message: "Error in saving enquiry", error: err.message });
  });

}


let enquiryList=async(req,res)=>
{
  let enquiryList = await Enquiry.find();
  res.status(200).send({ status: 1, message: "enquiryList1",data: enquiryList });
}

let enquiryDelete = async (req, res) => {
  let enquiryId=req.params.id;
  let deleteEnquiry=await Enquiry.deleteOne({_id:enquiryId});
  res.send({status:1,message:"Enquiry deleted successfully",id: enquiryId,delResult: deleteEnquiry});
}

let singleOne = async (req, res) => {
  let enquiryId= req.params.id;
  let enquiryData = await Enquiry.findOne({_id: enquiryId});
   res.send({status:1,enquiryData});


}
let enquiryUpdate = async (req, res) => {
  let enquiryId= req.params.id;
  let { name, email, phone, message } = req.body;
  let updateobj={
    name: name,
    email: email,
    phone: phone,
    message: message
  }
let updateEnquiry = await Enquiry.updateOne({_id: enquiryId}, updateobj);
  res.send({ status: 1, message: "Enquiry updated successfully", updateEnquiry});

}

module.exports={
  enquiryInsert,
  enquiryList,
  enquiryDelete,
  enquiryUpdate,
  singleOne
}
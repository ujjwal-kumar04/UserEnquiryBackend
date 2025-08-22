let express=require("express");
const {enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate, singleOne} = require('../controller/usercontroller');
let router = express.Router();
router.post('/enquiry-insert', enquiryInsert);
router.get('/enquiry-list', enquiryList);
router.delete('/enquiry-delete/:id', enquiryDelete);
router.get('/enquiry-edit/:id', singleOne);
router.put('/enquiry-update/:id', enquiryUpdate);
module.exports = router;
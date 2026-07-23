const Razorpay = require("razorpay");
const crypto = require("crypto");
 
 
const razorpay = new Razorpay({
 
    key_id: process.env.RAZORPAY_KEY_ID,
 
    key_secret: process.env.RAZORPAY_KEY_SECRET
 
});
 
 
// CREATE ORDER
 
exports.createOrder = async(req,res)=>{
 
try{
 
 
let {amount}=req.body;
 
 
// amount should be paise — also catches undefined/missing amount now
if(!amount || typeof amount !== "number" || amount < 100){
 
return res.status(400).json({
 
message:"Minimum amount is ₹1 (amount must be sent in paise, e.g. 50000 for ₹500)"
 
});
 
}
 
 
const order = await razorpay.orders.create({
 
amount:amount,
 
currency:"INR",
 
receipt:"receipt_"+Date.now()
 
});
 
 
res.json({
 
key:process.env.RAZORPAY_KEY_ID,
 
order_id:order.id,
 
amount:order.amount,
 
currency:order.currency
 
});
 
 
}
catch(error){
 
// log the real Razorpay error detail, not just a generic message
console.error("Razorpay create-order error:", error?.error || error);
 
res.status(error?.statusCode === 401 ? 401 : 500).json({
 
message:"Order creation failed"
 
});
 
 
}
 
 
};
 
 
 
 
// VERIFY PAYMENT
 
 
exports.verifyPayment=(req,res)=>{
 
 
const {
 
razorpay_order_id,
 
razorpay_payment_id,
 
razorpay_signature
 
 
}=req.body;
 
 
 
if(
!razorpay_order_id ||
!razorpay_payment_id ||
!razorpay_signature
){
 
return res.status(400).json({
 
message:"Missing fields"
 
});
 
}
 
 
 
const body =
razorpay_order_id
+
"|"
+
razorpay_payment_id;
 
 
 
const expectedSignature =
crypto
.createHmac(
"sha256",
process.env.RAZORPAY_KEY_SECRET
)
.update(body)
.digest("hex");
 
 
 
if(expectedSignature === razorpay_signature){
 
 
return res.json({
 
success:true,
 
message:"Payment Verified"
 
});
 
 
}
 
 
 
return res.status(400).json({
 
success:false,
 
message:"Invalid Signature"
 
});
 
 
};
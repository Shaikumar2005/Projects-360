const Razorpay = require("razorpay");
const crypto = require("crypto");

// Check whether ENV variables are loaded
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.error("❌ Razorpay ENV variables are missing.");
}

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// =========================
// CREATE ORDER
// =========================
exports.createOrder = async (req, res) => {
    try {
        let { amount } = req.body;

        // Validate amount (must be in paise)
        if (!amount || typeof amount !== "number" || amount < 100) {
            return res.status(400).json({
                success: false,
                message:
                    "Minimum amount is ₹1 (Amount must be sent in paise)",
            });
        }

        const options = {
            amount,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return res.status(200).json({
            success: true,
            key: process.env.RAZORPAY_KEY_ID,
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (error) {
        console.error("❌ Razorpay Order Error");
        console.error(error);

        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.error?.description || error.message || "Order creation failed",
        });
    }
};

// =========================
// VERIFY PAYMENT
// =========================
exports.verifyPayment = (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        } = req.body;

        if (
            !razorpay_order_id ||
            !razorpay_payment_id ||
            !razorpay_signature
        ) {
            return res.status(400).json({
                success: false,
                message: "Missing payment fields",
            });
        }

        const generatedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (generatedSignature === razorpay_signature) {
            return res.status(200).json({
                success: true,
                message: "Payment Verified Successfully",
            });
        }

        return res.status(400).json({
            success: false,
            message: "Invalid Signature",
        });
    } catch (error) {
        console.error("❌ Verify Payment Error");
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Verification failed",
        });
    }
};
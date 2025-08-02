import payment from "../payment.js";

export const paymentController = async (req, res) => {
  try {
    const { number, amount, cvc, exp_month, exp_year } = req.body;
    console.log(number, amount, cvc, exp_month, exp_year);

    
    if (!number || !amount || !cvc || !exp_month || !exp_year) {
      return res.status(400).json({
        success: false,
        message:
          "All fields (number, amount, cvc, exp_month, exp_year) are required.",
      });
    }

    
    if (typeof number !== "string" || number.length < 16) {
      return res.status(400).json({
        success: false,
        message: "Card number must be a 16 digit .",
      });
    }

    if (typeof cvc !== "string" || cvc.length < 3) {
      return res.status(400).json({
        success: false,
        message: "CVC must be a 3 digit .",
      });
    }

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Amount must be a valid number greater than 0.",
      });
    }

     
    const result = await payment(number, cvc, exp_month, exp_year, amount);

   
    if (result?.error) {
      return res.status(400).json({
        success: false,
        message: "Stripe error",
        error: result.error,
      });
    }

    
    res.status(200).json({
      success: true,
      message: "Payment processed successfully.",
      result,
    });
  } catch (error) {
    console.error("PAYMENT CONTROLLER ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong while processing payment.",
      error: error.message,
    });
  }
};

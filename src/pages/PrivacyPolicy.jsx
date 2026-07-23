import "./PolicyPages.css";

const RefundPolicy = () => {
  return (
    <section className="policy-page">
      <div className="policy-container">
        <h1>Refund Policy</h1>
        <p className="policy-updated">Last updated: July 23, 2026</p>

        <p className="policy-highlight">
          <strong>Registration fees for Projects360 workshops are
          non-refundable</strong>, except in the specific circumstances
          described below.
        </p>

        <h2>1. General Policy</h2>
        <p>
          The workshop registration fee is a nominal amount charged to
          reserve your seat and cover workshop-related costs. Once payment
          is successfully completed, the registration fee will not be
          refunded for reasons such as change of mind, inability to attend,
          or missing the session.
        </p>

        <h2>2. Exceptions</h2>
        <p>A refund will be issued only in the following cases:</p>
        <ul>
          <li>The workshop is cancelled or indefinitely postponed by Projects360</li>
          <li>A duplicate payment was made in error for the same registration</li>
          <li>A technical error resulted in a payment being deducted without a successful registration being created</li>
        </ul>

        <h2>3. How to Request a Refund (for eligible cases)</h2>
        <p>
          If your situation falls under one of the exceptions above, please
          contact us within 7 days of the payment date at{" "}
          <strong>[your business email here]</strong>, including your
          registered email address, phone number, and the payment
          reference/transaction ID.
        </p>

        <h2>4. Refund Processing Time</h2>
        <p>
          Approved refunds will be processed back to the original payment
          method (UPI/card/netbanking) via Razorpay within 5–7 business days
          from approval. Actual credit to your account may take a few
          additional days depending on your bank or payment provider.
        </p>

        <h2>5. Contact Us</h2>
        <p>
          For any refund-related queries, reach out to us at:{" "}
          <strong>[your business email here]</strong> or{" "}
          <strong>[your business phone number here]</strong>.
        </p>
      </div>
    </section>
  );
};

export default RefundPolicy;
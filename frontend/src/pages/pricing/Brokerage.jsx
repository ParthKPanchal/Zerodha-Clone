export default function Brokerage() {
  return (
    <section className="container py-5">
      <div className="row border-top py-5 g-5">
        <div className="col-12 col-lg-8">
          <h3 className="fs-5 text-primary mb-4">Brokerage Calculator</h3>

          <ul className="text-start lh-lg text-muted mb-0 ps-4">
            <li className="mb-2">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="mb-2">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-2">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note.
            </li>
            <li className="mb-2">Courier charges apply.</li>
            <li className="mb-2">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mb-2">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-4">
          <h3 className="fs-5 text-primary mb-4">List of Charges</h3>
        </div>
      </div>
    </section>
  );
}

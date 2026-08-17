export default function Pricing() {
  return (
    <section className="container p-lg-5">
      <div className="row text-lg-start text-center">
        <div className="col-lg-6 p-lg-5 pb-5">
          <h2 className="pt-3">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="text-decoration-none">
            See pricing <i class="fa-solid fa-right-long"></i>
          </a>
        </div>
        <div className="col-lg-6 p-lg-5">
          <div className="row text-center">
            <div className="col border p-3">
              <h2>₹0</h2>
              <p className="mt-2">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col border p-3">
              <h2>₹20</h2>
              <p className="mt-2">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

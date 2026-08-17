import ecosystem from "../../assets/images/ecosystem.png";

export default function Stats() {
  return (
    <section className="container p-lg-5">
      <div className="row">
        <div className="col-lg-6 p-lg-5">
          <h2 className="fs-3 pt-3">Trust with confidence</h2>
          <h3 className="fs-4 mt-4">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h3 className="fs-4 mt-4">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h3 className="fs-4 mt-4">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-4 mt-4">Do better with money</h3>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-lg-6 p-lg-5">
          <img src={ecosystem} alt="Ecosystem" className="img-fluid" />
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
            <a href="" className="text-decoration-none">
              Explore our products <i class="fa-solid fa-right-long"></i>
            </a>
            <a href="" className="text-decoration-none">
              Try Kite Demo <i class="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

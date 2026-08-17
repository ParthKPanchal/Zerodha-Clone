import education from "../../assets/images/education.svg";
export default function Education() {
  return (
    <section className="container p-lg-5">
      <div className="row">
        <div className="col-lg-6 p-lg-5">
          <img src={education} alt="Education" className="img-fluid" />
        </div>
        <div className="col-lg-6 p-lg-5 text-lg-start text-center">
          <h2 className="fs-2 pt-3">Free and open market education</h2>
          <p className="mt-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="text-decoration-none">
            Varsity <i class="fa-solid fa-right-long"></i>
          </a>
          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="text-decoration-none">
            TradingQ&A <i class="fa-solid fa-right-long"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

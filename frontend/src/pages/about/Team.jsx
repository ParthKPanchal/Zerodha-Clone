import nithinKamath from "../../assets/images/nithinKamath.jpg";
export default function Team() {
  return (
    <section className="container">
      <div className="row p-5 border-top">
        <h2 className="text-center">People</h2>
      </div>
      <div className="row p-5 text-muted fs-5">
        <div className="col-lg-6 p-5 text-center">
          <img
            src={nithinKamath}
            alt="Nithin Kamath"
            className="img-fluid rounded-circle"
            style={{ width: "70%" }}
          />
          <h3 className="mt-3">Nithin Kamath</h3>
          <h4>Founder, CEO</h4>
        </div>
        <div className="col-lg-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </section>
  );
}

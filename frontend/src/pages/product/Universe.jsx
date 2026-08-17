import smallcaseLogo from "../../assets/images/smallcaseLogo.png";
import streakLogo from "../../assets/images/streakLogo.png";
import sensibullLogo from "../../assets/images/sensibullLogo.svg";
import zerodhaFundhouse from "../../assets/images/zerodhaFundhouse.png";
import goldenpiLogo from "../../assets/images/goldenpiLogo.png";
import dittoLogo from "../../assets/images/dittoLogo.png";

export default function Universe() {
  return (
    <section className="container py-5 text-center">
      <div className="row g-4">
        <div className="col-12 mb-3">
          <h1 className="mb-3">The Zerodha Universe</h1>

          <p className="mb-0">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={smallcaseLogo}
            alt="Smallcase"
            className="img-fluid"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={streakLogo}
            alt="Streak"
            className="img-fluid"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={sensibullLogo}
            alt="Sensibull"
            className="img-fluid"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={zerodhaFundhouse}
            alt="Zerodha Fund House"
            className="img-fluid"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={goldenpiLogo}
            alt="GoldenPi"
            className="img-fluid"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={dittoLogo}
            alt="Ditto"
            className="img-fluid"
            style={{
              width: "200px",
              height: "100px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <button className="btn btn-primary px-5 fs-5 mt-3">
        Sign Up for free
      </button>
    </section>
  );
}

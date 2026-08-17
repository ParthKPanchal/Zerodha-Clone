import largestBroker from "../../assets/images/largestBroker.svg";
import pressLogos from "../../assets/images/pressLogos.png";
export default function Awards() {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img src={largestBroker} alt="Largest Broker" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 className="pt-3">Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all the volumes
            in India daily by trading and investing in:
          </p>
          <div className="row my-4">
            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>
                  <p>Stocks & IPO</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src={pressLogos} alt="Press Logos" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

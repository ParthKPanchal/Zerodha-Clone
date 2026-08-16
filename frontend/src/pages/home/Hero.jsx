import heroImage from "../../assets/images/homeHero.png";
export default function Hero() {
  return (
    <section className="container">
      <div className="row text-center">
        <div className="col">
          <img src={heroImage} alt="Hero Image" className="img-fluid" />
          <h1>Invest in everything</h1>
          <p className="mt-2">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button className="btn btn-primary px-5 fs-5 mt-2">
            Sign Up now
          </button>
        </div>
      </div>
    </section>
  );
}

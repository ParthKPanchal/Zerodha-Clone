import googlePlayBadge from "../../assets/images/googlePlayBadge.svg";
import appstoreBadge from "../../assets/images/appstoreBadge.svg";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="container py-5 mt-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h2 className="mb-3">{productName}</h2>

          <p className="mb-4 lh-lg">{productDescription}</p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo
            </a>

            <a href={learnMore} className="text-decoration-none">
              Learn More
            </a>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <a href={googlePlay}>
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                style={{ height: "40px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src={appstoreBadge}
                alt="Download on the App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

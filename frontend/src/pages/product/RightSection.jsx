export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <h2 className="mb-3">{productName}</h2>

          <p className="mb-4 lh-lg">{productDescription}</p>
          <div className="d-flex flex-wrap gap-3">
            <a href={learnMore} className="text-decoration-none">
              Learn More
            </a>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

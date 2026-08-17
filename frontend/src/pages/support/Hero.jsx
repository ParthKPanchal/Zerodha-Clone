export default function Hero() {
  return (
    <section className="container-fluid bg-primary text-light">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Support Portal</h3>

          <a href="" className="text-light text-decoration-none">
            Track Tickets
          </a>
        </div>
      </div>
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7">
            <h1 className="mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              type="text"
              placeholder="Eg. how do I activate F&O"
              className="form-control form-control-lg mb-4"
            />
            <div className="d-flex flex-wrap gap-3">
              <a href="" className="text-light">
                Track account opening
              </a>

              <a href="" className="text-light">
                Track segment activation
              </a>

              <a href="" className="text-light">
                Intraday margins
              </a>

              <a href="" className="text-light">
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <h2 className="mb-4">Featured</h2>

            <ol className="lh-lg">
              <li>
                <a href="" className="text-light">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>

              <li>
                <a href="" className="text-light">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

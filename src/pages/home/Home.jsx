import PageNav from "../../components/PageNav";
import "./home.css";

function Home() {
  return (
    <div>
      <PageNav />
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">Heavenly taste from home</h1>
            <p className="hero-description">
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            </p>
            <a href="#" className="btn btn-full margin-right-sm">
              Order now
            </a>
            <a href="#" className="btn btn-outline">
              Learn more
            </a>
          </div>
          <div className="hero-img-box">
            <img src="img/home-cake.jpeg" alt="alt" className="hero-img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

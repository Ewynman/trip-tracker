// import featureImage1 from './Images/Home-BG.jpg';

const Home = () => {
  return (
    <div className="MainHome">
      {/* LANDING CONTAINER */}
      <div className="home" id="pagetop">
        <div className="image-container"></div>
        <div className="content">
          <div className="content-text">
            <h2>All Your Trips In One Place</h2>
            <p>
              Here you can find all the information you need about my services
              and products.
            </p>
            <button>
              <a href="#about">Lean More</a>
            </button>
          </div>
        </div>
      </div>
      {/* FEATURES SECTION */}
      <div className="featHead">
        <h2>Features:</h2>
      </div>
      <div class="features">
        <div class="feature">
        <img src="#" alt="Feature 1" />
          <h3>Feature 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
            sagittis augue vel tristique.
          </p>
        </div>
        <div class="feature">
          <img src="feature-2.jpg" alt="Feature 2" />
          <h3>Feature 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
            sagittis augue vel tristique.
          </p>
        </div>
        <div class="feature">
          <img src="feature-3.jpg" alt="Feature 3" />
          <h3>Feature 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
            sagittis augue vel tristique.
          </p>
        </div>
      </div>

      {/* End Main export Div put all content above */}
    </div>
  );
};

export default Home;

import featureImage1 from "./Images/Feature1.jpg";
import featureImage2 from "./Images/Feature2.jpg";
import featureImage3 from "./Images/Feature3.jpg";
import AboutPicture from "./Images/AboutPic.png";

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
          <img src={featureImage1} alt="Feature 1" />
          <h3>Track Places You've Been To</h3>
          <p>
            Trip Tracker is designed to help you keep a record of all the places
            you've visited. With Trip Tracker, you can easily view your travel
            history on a map, add notes to each location, and more. Travel
            Tracker is perfect for anyone who loves to travel and wants to keep
            a digital record of their adventures
          </p>
        </div>
        <div class="feature">
          <img src={featureImage2} alt="Feature 2" />
          <h3>Keep Track of Your Total Miles</h3>
          <p>
            Keeping track of your total miles is important for many reasons,
            from calculating your vehicle's fuel efficiency to tracking your
            fitness progress. Our app allows you to easily log and monitor your
            total miles, whether you're traveling by car, bike, or on foot. With
            our user-friendly interface and customizable tracking options, you
            can stay on top of your mileage and reach your goals with ease.
          </p>
        </div>
        <div class="feature">
          <img src={featureImage3} alt="Feature 3" />
          <h3>Have Your Own Travel Journal</h3>
          <p>
            A travel journal feature in a travel-tracking app allows users to
            document their travel experiences and memories in a personalized
            way. Users can upload photos, write notes, and make recommendations
            for future reference, making it easier to plan and relive past
            trips. With a travel journal, users can create a digital scrapbook
            of their travels, preserving their memories for years to come.
          </p>
        </div>
      </div>
      {/* About Section */}
      <div className="about" id="About">
        <div className="abtHead">
          <h2>About</h2>
        </div>
        <div className="aboutMain">
          <div className="aboutContent">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              fugit perspiciatis! Temporibus harum neque optio, obcaecati
              numquam ullam, quis quibusdam porro aliquid reiciendis molestias
              quidem illum. Accusamus nulla totam quas. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Obcaecati numquam velit fugiat
              et, iste error, laborum corporis, non temporibus fugit repellat id
              laudantium in illum porro fuga sequi voluptatem debitis? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
              ex ullam sunt cupiditate ad tenetur enim quia autem architecto
              similique eaque cum debitis molestiae laudantium eligendi minus,
              voluptas quo repellendus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sed culpa esse quas vel id mollitia odit veniam,
              minus numquam magnam velit nulla, eum tempora asperiores
              reprehenderit laborum? Suscipit, magni adipisci!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              fugit perspiciatis! Temporibus harum neque optio, obcaecati
              numquam ullam, quis quibusdam porro aliquid reiciendis molestias
              quidem illum. Accusamus nulla totam quas. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Obcaecati numquam velit fugiat
              et, iste error, laborum corporis, non temporibus fugit repellat id
              laudantium in illum porro fuga sequi voluptatem debitis? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
              ex ullam sunt cupiditate ad tenetur enim quia autem architecto
              similique eaque cum debitis molestiae laudantium eligendi minus,
              voluptas quo repellendus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sed culpa esse quas vel id mollitia odit veniam,
              minus numquam magnam velit nulla, eum tempora asperiores
              reprehenderit laborum? Suscipit, magni adipisci!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              fugit perspiciatis! Temporibus harum neque optio, obcaecati
              numquam ullam, quis quibusdam porro aliquid reiciendis molestias
              quidem illum. Accusamus nulla totam quas. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Obcaecati numquam velit fugiat
              et, iste error, laborum corporis, non temporibus fugit repellat id
              laudantium in illum porro fuga sequi voluptatem debitis? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
              ex ullam sunt cupiditate ad tenetur enim quia autem architecto
              similique eaque cum debitis molestiae laudantium eligendi minus,
              voluptas quo repellendus. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sed culpa esse quas vel id mollitia odit veniam,
              minus numquam magnam velit nulla, eum tempora asperiores
              reprehenderit laborum? Suscipit, magni adipisci!
              <br />
            </p>
          </div>
          <div className="aboutphoto">
            <img src={AboutPicture} alt="" />
          </div>
        </div>
      </div>
      {/* End Main export Div put all content above */}
    </div>
  );
};

export default Home;

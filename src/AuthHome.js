import AuthNavbar from "./AuthNavBar";
import AuthFooter from "./AutFooter";
import trip1 from "./Images/Trip1.jpg";
import './CSS/AuthHome.css';

const AuthHome = () => {
  return (
    <div>
      <AuthNavbar />
      <div className="HomeContainer">
        <div className="HomeStats">
          <p>Your total trips: 10</p>
          <p>Your total miles: 5000</p>
          <p>Total countries visited: 5</p>
        </div>
      </div>

      <div className="tripHead">
        <h2>Recent Trips</h2>
      </div>
      <div className="trip-history">
        <div className="trip-card">
          <div className="info">
            <h3>London, England</h3>
            <p>January 2nd - January 9th 2023</p>
          </div>
          <img src={trip1} alt="Trip 1" />
        </div>
        <div className="trip-card">
          <div className="info">
            <h3>Destination Name</h3>
            <p>Trip Dates</p>
          </div>
          {/* <img src="#" alt="Trip Image" /> */}
        </div>
        <div className="trip-card">
          <div className="info">
            <h3>Destination Name</h3>
            <p>Trip Dates</p>
          </div>
          {/* <img src="#" alt="Trip Image" /> */}
        </div>
      </div>

      {/* UPCOMMING TRIPS */}
      <div className="upHead">
        <h2>Upcoming Trips</h2>
      </div>
      <div className="trip-history">
        <div className="trip-card">
          <div className="info">
            <h3>Miami, Flordia</h3>
            <p>28 Days</p>
          </div>
          {/* <img src={trip1} alt="Trip 1" /> */}
        </div>
        <div className="trip-card">
          <div className="info">
            <h3>Austin, Texas</h3>
            <p>34 Days</p>
          </div>
          {/* <img src="#" alt="Trip Image" /> */}
        </div>
        <div className="trip-card">
          <div className="info">
            <h3>New York City, New York</h3>
            <p>97 Days</p>
          </div>
          {/* <img src="#" alt="Trip Image" /> */}
        </div>
      </div>
      <AuthFooter/>
      {/* All Divs above here */}
    </div>
  );
};

export default AuthHome;

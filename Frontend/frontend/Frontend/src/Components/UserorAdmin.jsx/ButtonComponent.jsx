import './ButtonComponent.css';
import { Link } from 'react-router-dom';
function ButtonComponent() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <header>
          <div className="navbar-logo1">
           <strong>Job</strong>Search <i className="fab fa-typo3"></i>
           <img
            src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1708685407/online-recruitment_9631356_nyc0ep.png"
            alt="img"
            className="logoimg"
          />
        </div>
          </header>
          <div className='des'>
          <h>Discover your dream career with our user-friendly job portal! Explore diverse opportunities, connect with top employers, and streamline your job search effortlessly. Our platform offers personalized job recommendations, easy application processes, and a supportive community to guide you towards success. Join us in shaping your professional journey  where every click brings you closer to the perfect job!</h></div>
          <br/>
          <h1><b>Who you are?....</b></h1>
          <div className="hero-content">
            
            <Link to={'/logadmin'}><button className='bt-app'>Admin</button></Link>
            <a href='/login'><button className='bt-app1'>User</button></a>
          </div>
        </div>
        <div className="image">
          <section className="hero">
            <div className="hero-image">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-4836622-4032953.png" alt="Students studying" />
            </div>
          </section>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default ButtonComponent;

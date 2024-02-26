import Navbar from '../NavBar/NavBar';
import Search from '../SearchDiv/Search';
import Jobs from '../JobDiv/Jobs';
import Value from '../ValueDiv/Value';
import Footer from '../FooterDiv/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <div id="job-section">
      <Jobs/>
      </div>
      <Value/>
      <div id="job-section1">
      <Footer/>
      </div>
    </div>
  );
}

export default Home;
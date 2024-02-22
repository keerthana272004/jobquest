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
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  );
}

export default Home;
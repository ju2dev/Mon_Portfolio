import Footer from '../Composants/Footer/footer';
import Nav from '../Composants/NavBar/nav';
import Description from '../Composants/DescriptionHome/description';
import Projects from '../Composants/ProjetHome/projects';
import './Home.min.css'; 

const HomePage = () => (
    <>
      <Nav />
      <main>
        <Description />
        <Projects />
      </main>
      <Footer />
    </>
  );
  
  export default HomePage;
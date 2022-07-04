import logo from './logo.svg';
// import './index.css';
import './style.css'
import Header from './header';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';

function App() {
  return (
    <>
    
    <div className="App">
     <Header />
     <Section1 />
     <Section2 />
     <Section3 />
    </div>
     <Section4 />
    </>
  );
}

export default App;

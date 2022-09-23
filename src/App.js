import './App.css'
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Navbar from './Components/Navbar/Navbar';
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';
import Page3 from './Components/Page3/Page3';
import Page4 from './Components/Page4/Page4';

function App() {

  
  return (
    <div className="" >
      

      
      <div className='page1-wrapper'>
        <Navbar />
        <Page1 />
      </div>
      <Page2 />
      <Page3 />
      <Page4 />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

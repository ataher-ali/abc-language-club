 
import Footer from './Layouts/Footer';
import Nav from './Layouts/Header/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../AppRouter/AppRouter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import Popup from '../Popup/Popup';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      {/* <Popup /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;

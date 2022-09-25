import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartDetails from './components/CartDetails';
import Gallery from './components/Gallery';
import DrinkItemList from './components/DrinkItemList';
import NonVegItemList from './components/NonVegItemList';
import ParentOne from './components/ParentOne';
import RestroNavigation from './components/RestroNavigation';
import ReviewPage from './components/ReviewPage';
import img3 from '../src/pic3.jpg'
import LoginComponent from './components/medicalProject/LoginComponent';
import LoginRestrorent from './components/LoginRestrorent';
import RestroFooter from './components/RestroFooter';

import ChildComp from './components/ChildComp';
import UserProvider, { ButtonContext } from './components/BasicConstant';

import BodyComponent from './components/BodyComponent';
import FeedbackComponent from './components/FeedbackComponent';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import background from "./restroImage.jpg";
import AllOrders from './components/AllOrders';
import LoginErrorPage from './components/LoginErrorPage';
import Register from './components/Register';
import HeaderComponent from './HeaderComponent';
import Demo from './components/Demo';
import VegItemList from './components/VegItemList';
import ChangeID from './components/ChangeID';

function App() {
  const flag = false;
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };
  return (
    <div style={myStyle}>

<AboutUs01></AboutUs01>

      <UserProvider>
      
      


        <HeaderComponent />



        <Router>

          <Routes>

            <Route path="/review" element={<ReviewPage />} />
            <Route path="/parnt" element={<ParentOne />} />
            <Route path="/RestrNav" element={<RestroNavigation />} />
            <Route path="/vegItemsList" element={<VegItemList />} />
            <Route path="/nonVegItemsList" element={<NonVegItemList />} />
            <Route path="/drinkItemsList" element={<DrinkItemList />} />
            <Route path="/cart" element={<CartDetails />} />
            <Route path="/dashboard" element={<BodyComponent />} />
            <Route path="/login" element={<LoginRestrorent />} />
            <Route path="/feedback" element={<FeedbackComponent />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path='/child' element={<ChildComp />} />
            <Route path='/allOrders' element={<AllOrders />} />
            <Route path='/loginError' element={<LoginErrorPage />} />
            <Route path='/register' element={<Register />} />
          </Routes>

        </Router>
      </UserProvider>
    </div>
  );
}
export default App;

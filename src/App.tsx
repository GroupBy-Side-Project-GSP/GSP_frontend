import Loginpage from './page/Auth/Loginpage';
import Registerpage from './page/Auth/Registerpage';
import FindIdandPwpage from './page/Auth/FindIdandPwpage';
import FindIdpage from './page/Auth/FindIdpage';
import FindPWpage from './page/Auth/FindPWpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Loginpage />} />
        {/*
        <Route path="/find/login" element={<FindIdandPwpage />} />
        <Route path="/find/id" element={<FindIdpage />} />
        <Route path="/find/pw" element={<FindPWpage />} />
        */}
        <Route path="/auth/register" element={<Registerpage />} />
      </Routes>
    </Router>
  );
};

export default App;

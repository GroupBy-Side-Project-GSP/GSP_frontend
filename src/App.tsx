import Loginpage from './page/Auth/Loginpage';
import Registerpage from './page/Auth/Registerpage';
import FindIdandPwpage from './page/Auth/FindIdandPwpage';
import FindIdpage from './page/Auth/FindIdpage';
import FindPwpage from './page/Auth/FindPwpage';
import MainPage from './page/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './style/globalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/auth/login" element={<Loginpage />} />
          <Route path="/find/login" element={<FindIdandPwpage />} />
          <Route path="/find/id" element={<FindIdpage />} />
          <Route path="/find/pw" element={<FindPwpage />} />
          <Route path="/auth/register" element={<Registerpage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

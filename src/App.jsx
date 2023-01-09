import { Routes, Route } from 'react-router-dom';
import MainNav from './components/MainNav';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Error from './pages/Error';

function App() {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

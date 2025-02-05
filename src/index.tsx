import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import HomePage from './components/HomePage';
import MatchProfile from './components/MatchProfile';
import MyProfile from './components/MyProfile';
import Inbox from './components/Inbox';
import PrivateChat from './components/PrivateChat';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="welcome" element={<WelcomePage/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="login" element={<Login/>} />
        <Route path="/" element={<HomePage/>} >
            <Route index element={<App/>} />
            <Route path="profile" element={<MyProfile/>} />
            <Route path=":id" element={<MatchProfile/>} />
            <Route path="Inbox" element={<Inbox/>} >
                <Route path=":chatId" element={<PrivateChat/>} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

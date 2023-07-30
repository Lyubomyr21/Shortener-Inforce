import './App.css';
import AppRoutes from './AppRoutes';
import {Navigation} from './Navigation';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       Link-Shortener
     </h3>

     <Navigation/>
     <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
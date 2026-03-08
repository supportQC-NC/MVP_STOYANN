

import { Outlet } from "react-router-dom";
import Header from "./Components/Layout/Header";



const App = () => {
  return (
    <>
    <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

    </>
  );
};

export default App;

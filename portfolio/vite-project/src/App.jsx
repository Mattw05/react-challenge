import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';


import "./App.css"

const App = () => (<main>
  <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  </main>)

export default App;
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Header from 'mf_header/header';
import Menu from 'mf_menu/menu';
import Login from 'mf_login/login';

import Pacientes from 'mf_home/pacientes';
import Home from 'mf_home/Home';
import Footer from 'mf_footer/footer';

//import './Home.css'
import { useState } from 'react';

const Host = () => {

  const [opMenu, setOpMenu] = useState(1)
  const handleClick = (e: any) => {
    setOpMenu(e)
  }

  return (
    <>

      <div className="container-fluid">
        <div className=""><Header /></div>
        <div className=""><Menu selecOp={handleClick} /></div>
        <div className=""><Home op={opMenu} /></div>
        <div className=""><Footer /> </div> 
      </div>

    </>
  )
}

export default Host;

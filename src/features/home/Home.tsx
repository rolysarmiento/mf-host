import Header from 'mf_header/header';
import Menu from 'mf_menu/menu';
import Login from 'mf_login/login';

import Pacientes from 'mf_home/pacientes';
import Home from 'mf_home/Home';
import Footer from 'mf_footer/footer';

import './Home.css'
import { useState } from 'react';

const Host = () => {

  const [opMenu, setOpMenu] = useState(1)
  const handleClick = (e: any) => {
    setOpMenu(e)
  }

  return (
    <>

      <div className="container">
        <div className="header"><Header /></div>
        <div className="menu"><Menu selecOp={handleClick} /></div>
        <div className="content"><Home op={opMenu} /></div>
        <div className="footer"><Footer /> </div>
      </div>

    </>
  )
}

export default Host;

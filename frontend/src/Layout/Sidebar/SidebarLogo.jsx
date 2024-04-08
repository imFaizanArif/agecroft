import React, { useContext } from 'react';
import { Grid } from 'react-feather';
import { Link } from 'react-router-dom';

import { Image } from '../../AbstractElements';
import CustomizerContext from '../../_helper/Customizer';
import { logoDark2, logoWhite } from '../../assets';


const SidebarLogo = () => {
  const { mixLayout, toggleSidebar, toggleIcon, layout, layoutURL } = useContext(CustomizerContext);

  const openCloseSidebar = () => {
    toggleSidebar(!toggleIcon);
  };

  const layout1 = localStorage.getItem("sidebar_layout") || layout;

  return (
    <div className='logo-wrapper'>
      {layout1 !== 'compact-wrapper dark-sidebar' && layout1 !== 'compact-wrapper color-sidebar' && mixLayout ? (
        <Link to={`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`}>
          <Image attrImage={{ className: 'w-50 img-fluid d-inline', src: `${logoWhite}`, alt: '' }} />
        </Link>
      ) : (
        <Link to={`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`}>
          <img className='w-50 img-fluid d-inline' src={logoDark2} alt='logo' />
        </Link>
      )}
      <div className='back-btn' onClick={() => openCloseSidebar()}>
        <i className='fa fa-angle-left'></i>
      </div>
      <div className='toggle-sidebar' onClick={openCloseSidebar}>
        <Grid className='status_toggle middle sidebar-toggle' />
      </div>
    </div>
  );
};

export default SidebarLogo;

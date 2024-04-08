import React, { Fragment, useCallback, useContext, useState } from 'react';
import { Bookmark, PlusCircle } from 'react-feather';
import { Nav, NavItem } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { NewBookmark, Views, CreatedByMe, Favourites, SharedWithMe, MyBookmark, Tags, Newsletter, Notification, Business, Holidays, Important, Orgenization } from '../../../Constant';
import BookmarkContext from '../../../_helper/Bookmark';
import BookmarkModal from './ModalBookMark';
import ModalTag from './ModalTag';

const NavTab = () => {
  const { mybookmarkData, setActiveTabss } = useContext(BookmarkContext);
  const [addModal, setaddModal] = useState(false);
  const [tagModal, setTagModal] = useState(false);

  const activeTab = '1';

  const addToggle = () => {
    setaddModal(!addModal);
  };

  const tagToggle = () => {
    setTagModal(!tagModal);
  };
  const onHandleClick = (id) => {
    setActiveTabss(id);
  };

  const addToggleCallback = useCallback((toggle) => {
    setaddModal(toggle);
  });
  return (
    <Fragment>
      <Nav className='main-menu' role='tablist'>
        {/* <NavItem>
          <Btn attrBtn={{ className: 'btn-mail d-block w-100 badge-light-primary', color: '', onClick: addToggle }}>
            <Bookmark className='me-2' /> {NewBookmark}
          </Btn>
          <BookmarkModal value={addModal} addToggle={addToggle} addToggleCallback={addToggleCallback} />
        </NavItem> */}
        <li>
          <hr />
        </li>
        <NavItem>
          <span className='main-title'>{`Loan `}</span>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '1' ? 'active' : ''} onClick={() => onHandleClick('1')}>
            <span className='title'> {`Loan Overview`}</span>
          </a>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '2' ? 'active' : ''} onClick={() => onHandleClick('2')}>
            <span className='title'> {`Payment Activity`}</span>
          </a>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '3' ? 'active' : ''} onClick={() => onHandleClick('3')}>
            <span className='title'>
              Scheduled Payments
            </span>
          </a>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '4' ? 'active' : ''} onClick={() => onHandleClick('4')}>
            <span className='title'> Ledger Entries</span>
          </a>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '5' ? 'active' : ''} onClick={() => onHandleClick('5')}>
            <span className='title'> Loan Documents</span>
          </a>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '6' ? 'active' : ''} onClick={() => onHandleClick('6')}>
            <span className='title'> Message History</span>
          </a>
        </NavItem>
        <li>
          <hr />
        </li>
        <NavItem>
          <span className='main-title'>
            Payments
          </span>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '7' ? 'show' : ''} onClick={() => onHandleClick('7')}>
            <span className='title'> Make a Payment</span>
          </a>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '8' ? 'show' : ''} onClick={() => onHandleClick('8')}>
            <span className='title'> Record Credit Note</span>
          </a>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '9' ? 'show' : ''} onClick={() => onHandleClick('9')}>
            <span className='title'> Payment Methods</span>
          </a>
        </NavItem>
        <li>
          <hr />
        </li>
        <NavItem>
          <span className='main-title'>
            MANAGE
          </span>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '10' ? 'show' : ''} onClick={() => onHandleClick('10')}>
            <span className='title'> Borrower Invites</span>
          </a>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '11' ? 'show' : ''} onClick={() => onHandleClick('11')}>
            <span className='title'> Contact Information</span>
          </a>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '12' ? 'show' : ''} onClick={() => onHandleClick('12')}>
            <span className='title'> Loan Requests</span>
          </a>
        </NavItem>
        <NavItem>
          <a href='#javascript' className={activeTab === '13' ? 'show' : ''} onClick={() => onHandleClick('13')}>
            <span className='title'> Modify Loan</span>
          </a>
        </NavItem>
      </Nav>
    </Fragment>
  );
};
export default NavTab;

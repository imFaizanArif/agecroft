import React, { Fragment, useContext } from 'react';
import { TabContent, TabPane } from 'reactstrap';

import BookmarkContext from '../../../_helper/Bookmark';
import EditBookmarkModal from './EditBookmark';
import LoanOverview from '../../Loans/LoanDetails/LoanOverview/LoanOverview';
import PaymentActivity from '../../Loans/LoanDetails/PaymentActivity/PaymentActivity';
import ScheduledPayments from '../../Loans/LoanDetails/ScheduledPayments/ScheduledPayments';
import LedgerEntries from '../../Loans/LoanDetails/LedgerEntries/LedgerEntries';
import LoanDocuments from '../../Loans/LoanDetails/LoanDocuments/LoanDocuments';
import MessageHistory from '../../Loans/LoanDetails/MessageHistory/MessageHistory';
import MakePayment from '../../Loans/LoanDetails/MakePayment/MakePayment';
import RecordCreditNote from '../../Loans/LoanDetails/RecordCreditNote/RecordCreditNote';
import PaymentMethods from '../../Loans/LoanDetails/PaymentMethods/PaymentMethods';
import BorrowerInvites from '../../Loans/LoanDetails/BorrowerInvites/BorrowerInvites';
import ContactInformation from '../../Loans/LoanDetails/ContactInformation/ContactInformation';
import LoanRequests from '../../Loans/LoanDetails/LoanRequests/LoanRequests';
import ModifyLoan from '../../Loans/LoanDetails/ModifyLoan/ModifyLoan';


const BookmarksTabs = () => {
  const { activeTabss } = useContext(BookmarkContext);

  return (
    <Fragment>
      <TabContent activeTab={activeTabss}>
        <TabPane tabId='1'>
          <LoanOverview />
        </TabPane>
        <TabPane tabId='2'>
          <PaymentActivity />
        </TabPane>
        <TabPane tabId='3'>
          <ScheduledPayments />
        </TabPane>
        <TabPane tabId='4'>
          <LedgerEntries />
        </TabPane>
        <TabPane tabId='5'>
          <LoanDocuments />
        </TabPane>
        <TabPane tabId='6'>
          <MessageHistory />
        </TabPane>
        <TabPane tabId='7'>
          <MakePayment />
        </TabPane>
        <TabPane tabId='8'>
          <RecordCreditNote />
        </TabPane>
        <TabPane tabId='9'>
          <PaymentMethods />
        </TabPane>
        <TabPane tabId='10'>
          <BorrowerInvites />
        </TabPane>
        <TabPane tabId='11'>
          <ContactInformation />
        </TabPane>
        <TabPane tabId='12'>
          <LoanRequests />
        </TabPane>
        <TabPane tabId='13'>
          <ModifyLoan />
        </TabPane>
        <EditBookmarkModal />
      </TabContent>
    </Fragment>
  );
}

export default BookmarksTabs;

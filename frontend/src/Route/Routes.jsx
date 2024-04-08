// dashbaord
import Default from "../Components/Dashboard/Default";


// //Book mark
import BookmarksContain from "../Components/Application/BookMarks";

// //User app
import UsersCardssContain from "../Components/Application/Users/UsersCards";
import UsersEditContain from "../Components/Application/Users/UsersEdit";
import UsersProfileContain from "../Components/Application/Users/UsersProfile";

// //Editor
import Loans from "../Components/Loans";
import Links from "../Components/Links";
import Payment from "../Components/Payment";
import Reports from "../Components/Reports";
import PaymentLink from "../Components/Links/PaymentLink";
import DraftLoan from "../Components/Loans/DraftLoan/DraftLoan";

export const routes = [
  { path: `${process.env.PUBLIC_URL}/dashboard/default/:layout`, Component: <Default /> },

  { path: `${process.env.PUBLIC_URL}/app/bookmark/:layout`, Component: <BookmarksContain /> },

  { path: `${process.env.PUBLIC_URL}/app/users/profile/:layout`, Component: <UsersProfileContain /> },
  { path: `${process.env.PUBLIC_URL}/app/users/edit/:layout`, Component: <UsersEditContain /> },
  { path: `${process.env.PUBLIC_URL}/app/users/cards/:layout`, Component: <UsersCardssContain /> },

  { path: `${process.env.PUBLIC_URL}/app/links/:layout`, Component: <Links /> },
  { path: `${process.env.PUBLIC_URL}/app/payment-link/:layout`, Component: <PaymentLink /> },
  { path: `${process.env.PUBLIC_URL}/app/loans/:layout`, Component: <Loans /> },
  { path: `${process.env.PUBLIC_URL}/app/loans/draft/:layout`, Component: <DraftLoan /> },
  { path: `${process.env.PUBLIC_URL}/app/payment-activity/:layout`, Component: <Payment /> },
  { path: `${process.env.PUBLIC_URL}/app/reports/:layout`, Component: <Reports /> },
];

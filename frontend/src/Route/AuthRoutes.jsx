import RegisterFrom from '../Components/Pages/Auth/RegisterFrom';
import LoginForm from '../Components/Pages/Auth/LoginForm';
import ForgetPwd from '../Components/Pages/Auth/ForgetPwd';
import EmailVerify from '../Components/Pages/Auth/EmailVerify';

export const authRoutes = [
    { path: `${process.env.PUBLIC_URL}/login`, Component: <LoginForm /> },
    { path: `${process.env.PUBLIC_URL}/register`, Component: <RegisterFrom /> },
    { path: `${process.env.PUBLIC_URL}/forget-password`, Component: <ForgetPwd /> },
    { path: `${process.env.PUBLIC_URL}/email-verify`, Component: <EmailVerify /> },
];
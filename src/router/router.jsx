// 로그인, 회원가입 페이지 import

// router = ~~~~~~~
// 메인 페이지에서 라우터를 가져와서 쓰면 됨
// export default router

import * as React from 'react';
import LogIn from '../pages/login';
import SignUp from '../pages/singup';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LogIn />
    }, 
    {
        path: "/signup",
        element: <SignUp />
    },
]);

export { router };
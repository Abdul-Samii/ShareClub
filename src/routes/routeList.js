import { ForgotPassword, Login, NewPassword, ResetCode, Signup } from "../screens";
// export const initialRouteName = 'splash';
export const initialRouteName = 'login';  //for sample test right now I set the initialRoute to login


export const RouteList = [
  // {name: 'splash', component: SplashScreen},
    {name:'signup',component:Signup},
    {name:'login', component:Login},
    {name:'forgotpassword', component:ForgotPassword},
    {name:'resetcode',component:ResetCode},
    {name:'newpassword',component:NewPassword}
  
];
import {AddDonation, Address, BookedDonations, BookedDonorDonations, ChangeName, ChangePassword, 
  ChatHome, ChatScreen, CompletedDonorDonations, CompletedNeedyDonations, DetailDonation, Donor, 
  DonorSignup, ForgotPassword, GenerateQR,Help, Login, Logout, ManageDonations, ManageDonorDonations, 
  Needy,NeedyDashboard, NeedyProfile, NeedySignup,NewPassword, Notification, ResetCode, ScanQR,
   SearchNearby, Settings, Signup} from '../../screens'
   
// export const initialRouteName = 'splash';
// export const initialRouteName = 'login';  //for sample test right now I set the initialRoute to login


export const RouteList = [
  // {name: 'splash', component: SplashScreen},
  //  {name:'needy', component:Needy}, 
  // {name:'needyprofile',component:NeedyProfile},
  // {name:'notification',component:Notification},
  // {name:'managedonations',component:ManageDonations}
  // {name:'chathome',component:ChatHome},
  // {name:'searchnearby',component:SearchNearby},
  // {name:'bookeddonations',component:BookedDonations},



    {name:'signup',component:Signup},
    {name:'login', component:Login},
    {name:'forgotpassword', component:ForgotPassword},
    {name:'resetcode',component:ResetCode},
    {name:'newpassword',component:NewPassword},
    {name:'donorsignup', component:DonorSignup},
    {name:'needysignup', component:NeedySignup},
    {name:'needydashboard', component:NeedyDashboard},

    {name:'needy', component:Needy}, 
  {name:'needyprofile',component:NeedyProfile},
  {name:'notification',component:Notification},
  {name:'managedonations',component:ManageDonations},
  {name:'chathome',component:ChatHome},
  {name:'searchnearby',component:SearchNearby},
  {name:'bookeddonations',component:BookedDonations},
  {name:'detaildonation',component:DetailDonation},
  {name:'completedneedydonations',component:CompletedNeedyDonations},
  {name:'scanqr',component:ScanQR},

  {name:'changepassword',component:ChangePassword},
  {name:'changename',component:ChangeName},
  {name:'help',component:Help},
  {name:'logout',component:Logout},
  {name:'settings',component:Settings},
  {name:'address',component:Address},



  {name:'donor',component:Donor},
  {name:'managedonordonations',component:ManageDonorDonations},
  {name:'adddonation',component:AddDonation},
  {name:'completeddonordonations',component:CompletedDonorDonations},
  {name:'bookeddonordonations',component:BookedDonorDonations},
  {name:'generateqr',component:GenerateQR},

  {name:'chatscreen',component:ChatScreen}
  
  
];
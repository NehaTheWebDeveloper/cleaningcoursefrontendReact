import {FaUserFriends} from "react-icons/fa";
import {MdDashboardCustomize} from "react-icons/md";
import {TbBrandBooking} from "react-icons/tb";
import {MdDesignServices} from "react-icons/md";
import {CgPlayListAdd} from "react-icons/cg";
import {AiOutlineHome} from "react-icons/ai";


export const SideNavLayoutData = [

    {
        title:"Dashboard",
        icons :<MdDashboardCustomize/>,
        link :"/"
    },
    {
        title:"Wallet Cards",
        icons :<FaUserFriends/>,
        link :"/users"
    },
    {
        title:"Invite Users",
        icons :<AiOutlineHome/>,
        link :"/providers"
    },

    {
        title:"Manage Users",
        icons :<TbBrandBooking/>,
        link :"/bookings"
    },
     
    {
        title:"Billing Info",
        icons :<MdDesignServices className="text-whitw"/>,
        link :"/services"
    }, 
    {
        title:"Receipts",
        icons :<CgPlayListAdd/>,
        link :"/addons"
    },
    {
        title:"Account Info",
        icons :<TbBrandBooking/>,
        link :"/login"
    },
    {
        title:"FAQ's",
        icons :<TbBrandBooking/>,
        link :"/login"
    },
    {
        title:"Contact Us",
        icons :<TbBrandBooking/>,
        link :"/login"
    },
    {
        title:"Logout",
        icons :<TbBrandBooking/>,
        link :"/login"
    },

 
]
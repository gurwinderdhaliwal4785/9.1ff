import { Outlet,Link } from "react-router-dom"
import CoverImage from "./CoverImage";

function Navigation()
{
 return(<div>
  <div className="topnav">
      <div className="logo">
        <img src={require("./Logo.png")} alt="logo" width={150} height={50} />
      </div>
      <div className="search-container text-center">
        <div className="text-center">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      
    <Link to= "/Post">
   Post
   </Link>
   <Link to= "/login">
   Login
   </Link>
   <Link to= "/signout">
   Sign Out
   </Link>
   </div>
   <CoverImage />

 <Outlet />
 </div>)

}
export default Navigation
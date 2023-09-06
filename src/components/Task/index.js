import React from "react";
import { Link } from "react-router-dom";

const Task = ({ to, imgSrc, buttonText, className }) => {
  return (
    <div className="  h-[50px]   flex flex-col  justify-center ">
      <div className={`pt-10 ${className}`}>
        {/* <div className=" flex items-center"> */}
        <Link to={to}>
          <button className="flex justify-between pl-7">
            <div>
              {" "}
              <img src={imgSrc} alt="" className="" />
            </div>
            <div>
              {" "}
              <span className="pl-5  font-bold">{buttonText}</span>
            </div>
          </button>
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Task;

// const Task = ({ to, imgSrc, buttonText, className }) => {
//   const location = useLocation();

//   return (
//     <div className="h-[50px] text-white flex flex-col justify-center">
//       <div className={`pt-10 ${className}`}>
//         <Link to={to} activeClassName="active" exact>
//           <button className="flex justify-between pl-7">
//             <div>
//               <img src={imgSrc} alt="" className="" />
//             </div>
//             <div>
//               <span className="pl-5 font-bold">{buttonText}</span>
//             </div>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Task;

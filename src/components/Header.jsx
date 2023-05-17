import React from "react";

import maskGoup from "@/assets/Mask_Group_1.png";
import blob1 from "@/assets/path_1.png";
import logoCompusave from "@/assets/Logo Compusave.svg";
import logoInforme from "@/assets/Logo InforMe.svg";
import cxSummitLogo from "@/assets/CX summit logo.svg";

const Header = () => {
  return (
    <div className="grid px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 lg:h-screen lg:overflow-hidden lg:relative">
      <div className="lg:mr-auto place-self-start col-span-12 lg:col-span-5 z-30">
        <div className="mx-12 pt-32 sm:pt-48 lg:py-40 z-10">
          <div className="flex flex-col justify-start items-stretch gap-10 text-left">
            <div className="flex justify-start">
              <img className="h-36 w-auto" src={cxSummitLogo} alt="InforMe" />
            </div>

            <div className="flex flex-col justify-start items-start gap-3">
              <img className="h-14 w-auto" src={logoInforme} alt="InforMe" />
              <div className="flex flex-col justify-start items-start gap-1">
                <p className="text-blue-900 font-semibold text-base">
                  Plateforme Marketing Multicanal
                </p>
                <p className="text-blue-900 font-semibold text-base">
                  SMS / Voice / Email
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-3">
              <p className="text-blue-900 font-semibold text-sm">Powered by</p>
              <div className="flex justify-start">
                <img
                  className="h-11 w-auto"
                  src={logoCompusave}
                  alt="InforMe"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 🔴 add login form here */}
      {/* <LoginForm /> */}
      <div className="hidden lg:mt-0 lg:col-span-7 lg:flex lg:justify-end">
        <img
          src={maskGoup}
          alt="mockup"
          className="h-full object-contain z-20 absolute -right-24 top-10"
        />
        <img
          src={blob1}
          alt="mockup"
          className="h-full w-auto rotate-12 z-10 absolute -right-24 top-10 object-contain"
        />
        {/* 🔴 how the blob should look like with the login form */}
        {/* <img
          src={blob1}
          alt="mockup"
          className="w-auto z-10 absolute -right-44 -top-36 object-contain"
        /> */}
      </div>
    </div>
  );
};

export default Header;

// 🔴 This is the loginForm , need to update position when screen is md
// const LoginForm = () => {
//   return (
//     <div className="lg:mr-auto place-self-start col-span-12 lg:col-span-7 z-50 w-full">
//       <div className="mx-12 py-12 sm:pt-12 lg:py-40 lg:px-36">
//         <form className="flex flex-col gap-6 justify-start items-start z-20">
//           <h1 className="text-white font-semibold text-4xl">Connectez vous</h1>
//           <input
//             type="email"
//             id="email"
//             className="bg-white border border-gray-300 text-blue-900 font-semibold text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
//             placeholder="Email"
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             id="password"
//             className="bg-white border border-gray-300 text-blue-900 font-semibold text-base rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
//             required
//           />

//           <div className="flex items-center justify-start">
//             <div className="flex items-center h-5">
//               <input
//                 id="remember"
//                 type="checkbox"
//                 value=""
//                 className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
//                 required
//               />
//             </div>
//             <label
//               className="ml-2 text-base font-semibold text-white"
//               htmlFor="remember"
//             >
//               Mémorizez infos
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-base w-full sm:w-auto px-5 py-2.5 text-center "
//           >
//             Connexion
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

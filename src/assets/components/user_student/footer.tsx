import React from "react";
import logo from "./img/LOGO-02-01 (2).png";
import style from "./style.css";

const Footerr = () => {
  return (
    <>
      <footer className="justify-items-center items-center content-center place-items-center justify-self-center p-10 dark:bg-gray-200 text-green-700">
        <aside>
        <a href="#"><img
            className="justify-items-center h-24 w-auto"
            src={logo} 
            alt="logo"
            
          />
         </a>
          <h2 className="font-bold font-kanit text-lg ">ติดต่อภาควิชา.</h2>
          <p className="font-bold font-kanit text-base">
            ภาควิชาคอมพิวเตอร์ศึกษา ชั้น2 คณะครุศาสตร์อุตสาหกรรม
            มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
          </p>
          <p className="font-kanit">
            Copyright © 2020 Department of Computer Education. All Rights
            Reserved.
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col justify-items-center gap-4 pt-3">
            <a href="https://www.youtube.com/@departmentofcomputereducat9967">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/CEDKMUTNB">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};
export default Footerr;

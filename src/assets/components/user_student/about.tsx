import Navbar from "../../Navbar/navbar";
import React from "react";
import img from "../auth/logo.png";
import style from "./style.css";
import photo1 from "../imgced/p_main.png";
import photo2 from "../imgced/p1.jpg";
import photo3 from "../imgced/p2.jpg";
import photo4 from "../imgced/p3.jpg";
import photo5 from "../imgced/p4.png";
import { Footer } from "antd/es/layout/layout";
import Footerr from "./footer";

const About = () => {
  return (
    <div>
      <header>
        <br />
        <a href="#">
        <img
          src={img}
          alt="Logo"
          className="items-center text-center justify-center"
        />
        </a>
        <br />
      </header>
      <Navbar />
      <br />
      <div className="content-center flex  flex-row h-18 w-full mt-2 text-center ">
        <h1 className="shadow-lg px-6 py-4 font-kanit text-center bg-orange-500 w-full rounded-full text-4xl font-bold  mb-4 dark:text-white ">
          เกี่ยวกับภาควิชาคอมพิวเตอร์ศึกษา
        </h1>
      </div>

      <div className="flex items-center justify-center ">
        <div className="relative flex w-5/6 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={photo2}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 ">
            <h6 className="font-kanit mb-4 block  text-2xl font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              ประวัติภาควิชา
            </h6>
            <p className="mb-8 block font-kanit text-base font-normal leading-relaxed text-gray-700 antialiased">
              ภาควิชาคอมพิวเตอร์ศึกษาก่อตั้งในปี พ.ศ. 2534 ในปัจจุบันมีคณาจารย์
              ผู้ทรงคุณวุฒิมากกว่า 10 ท่านซึ่งล้วนเป็นผู้มีเชี่ยวชาญในสาขาต่างๆ
              เป็นที่ยอมรับ ในระดับประเทศ
              ภาควิชาเสนอหลักสูตรตั้งแต่ระดับบัณฑิตศึกษาสาขาเทคโนโลยี
              คอมพิวเตอร์ ปริญญามหาบัณฑิตสาขาเทคโนโลยีคอมพิวเตอร์
              แขนงคอมพิวเตอร์ ศึกษา และแขนงเทคโนโลยีมัลติมีเดีย จนถึง
              ปริญญาดุษฎีมหาบัณฑิตสาขา คอมพิวเตอร์ศึกษาเน้นสาขาวิจัยด้านต่างๆ
              เช่น การพัฒนาบทเรียนคอมพิวเตอร์ ช่วยสอนแบบปัญญาประดิษฐ์
              การสร้างสื่อประสม คอมพิวเตอร์กราฟิกส์ การประมวลผลภาพ
              ระบบสารสนเทศเพื่อการศึกษาระบบเครือข่าย วิศวกรรมซอฟต์แวร์
              ระบบศึกษาบันเทิง เป็นต้น นอกจากนั้นภาควิชายังมีความ
              พร้อมสูงทั้งด้านฐานความรู้ทางวิชาการและงานวิจัย
              สามารถสร้างบัณฑิตที่มี ความพร้อม และ ความสามารถสูง
              เชี่ยวชาญในแต่ละสาขา รวมถึงมีความร่วมมือ ทั้งในระดับประเทศ และ
              นานาชาติ ตลอดจนภาคธุรกิจต่างๆ อีกทั้งยังมีแหล่ง ทุนการศึกษาด้วย
              ปัจจุบันมีนิสิตเก่ามากกว่า 2,000 คน ซึ่งล้วนแต่เป็นกำลังสำคัญ
              ให้กับองค์กรต่างๆ ในวงการคอมพิวเตอร์ และระบบสารสนเทศของประเทศไทย
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-6 ">
        <div className="relative flex  w-5/6 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={photo1}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="font-kanit mb-4 block  text-2xl font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              ปรัชญาและปณิธาน
            </h6>
            <p className="font-kanit mb-8 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
              ภาควิชาคอมพิวเตอร์ศึกษา ยึดถือปรัชญาตามที่สถาบันฯ กำหนดไว้คือ
              "พัฒนาคน พัฒนาวิทยาศาสตร์และเทคโนโลยี"
              และภาควิชาฯยังได้ยึดถือปณิธานของคณะฯ คือ
              "พัฒนาคนให้มีความรู้ความสามารถในการสอน การสื่อสาร การใช้ การสร้าง
              และการพัฒนาเทคโนโลยีได้อย่างมีประสิทธิภาพเป็นผู้ที่รู้จริง
              มีคุณธรรม จริยธรรม และรับผิดชอบต่อสังคม" ดังนั้น
              หลักสูตรของภาควิชาฯ จึงมีองค์ประกอบที่พร้อมจะผลลิตบัณฑิต มหาบัณฑิต
              และ ดุษฎีบัณฑิตให้เป็นผู้ที่มีความรู้
              ความสามารถทั้งในด้านความเป็นครูและวิศวกรที่มีคุณภาพ
              และมีคุณธรรมในบุคคลคนเดียวกัน
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-6">
        <div className="relative flex  w-5/6 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={photo3}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="font-kanit mb-4 block  text-2xl font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              วิสัยทัศน์
            </h6>
            <p className="font-kanit mb-8 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
              มุ่งเน้นการผลิตบัณฑิตที่มีคุณภาพ
              เพื่อตอบสนองความต้องการของชุมชนและสังคม
              รวมทั้งสร้างองค์กรความรู้ใหม่ให้บรรลุความเป็นเลิศทางวิชาการ
              เพื่อสนับสนุนการพัฒนาวิทยาศาสตร์และเทคโนโลยี
              ให้อยู่ในระดับแนวหน้าของประเทศและเป็นที่ยอมรับในระดับนาๆ ชาติ
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-6">
        <div className="relative flex  w-5/6 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={photo4}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="font-kanit mb-4 block  text-2xl font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              พันธกิจ
            </h6>
            <p className=" font-kanit mb-8 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
              ผลิตบัณฑิตที่มีคุณภาพ มีคุณธรรมและจริยธรรม
              ทั้งในระดับปริญญาตรีบัณฑิต และบัณฑิตศึกษา
              ตามความต้องการของสถานศึกษาและสถานประกอบการเพื่อพัฒนาการศึกษาของประเทศ
              ดำเนินการวิจัย พัฒนาองค์ความรู้เพื่อประยุกต์ใช้ในการอาชีวะ
              เทคนิคศึกษา และอุตสาหกรรม ให้บริการวิชาการในรูปแบบต่างๆ
              ที่เหมาะสมแก่ภาครัฐและเอกชน
              ส่งเสริมและสนับสนุนกิจกรรมเพื่อทำนุบำรุงศิลปะและวัฒนธรรมของชาติ
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-6">
        <div className="relative flex  w-5/6 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={photo5}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="font-kanit mb-4 block  text-2xl font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              วัตถุประสงค์
            </h6>
            <div className="font-kanit mb-8 block  text-base font-normal leading-relaxed text-gray-700 antialiased">
              <p>
                1.เพื่อผลิตบัณฑิตในสาขาเทคโนโลยีคอมพิวเตอร์
                ให้เป็นผู้มีความรู้ความสามารถทั้งทางด้านทฤษฎี
                และปฏิบัติที่มีความพร้อมทางด้านการเรียนการสอน ด้านเทคโนโลยี
                และด้านวิศวกรรม{" "}
              </p>
              <p>
                {" "}
                2.เพื่อผลิตมหาบัณฑิตให้เป็นผู้สอน นักฝึกอบรม และนักวิชาการ
                ที่มีความรู้ความสามารถและเชี่ยวชาญด้านเทคโนโลยีคอมพิวเตอร์ในแขนงต่างๆ
                ได้แก่ แขนงเทคโนโลยีคอมพิวเตอร์ แขนงเทคโนโลยีมัลติมีเดีย
                แขนงคอมพิวเตอร์ศึกษา หรือแขนงเทคโนโลยีพาณิชย์อิเล็กทรอนิกส์
              </p>
              <p>
                3.เพื่อผลิตมหาบัณฑิตให้เป็นผู้สอน นักฝึกอบรม และนักวิชาการ
                ที่มีความรู้ความสามารถและเชี่ยวชาญด้านคอมพิวเตอร์ศึกษา
                ส่งเสริมการพัฒนาวิชาการด้านเทคโนโลยีคอมพิวเตอร์ให้กับครูผู้สอน
                นักฝึกอบรม และนักวิชาการด้านเทคโนโลยีคอมพิวเตอร์
                เพื่อมุ่งเน้นให้มีการวิจัยเพื่อหาข้อสรุปและองค์ความรู้ใหม่
                ที่สามารถนำไปใช้เป็นแนวทางในการพัฒนา
              </p>
              <p>
                โดยส่งเสริมให้สามารถจัดตั้งเป็นเครือข่ายองค์ความรู้ด้านเทคโนโลยีคอมพิวเตอร์ของประเทศ
                4.ส่งเสริมให้เกิดการค้นคว้าวิจัย
                และพัฒนาทางด้านเทคโนโลยีคอมพิวเตอร์ที่สามารถนำไปประยุกต์ใช้ให้เกิดประโยชน์ในทางปฏิบัติอย่างแท้จริง
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer>
        <Footerr/>
      </Footer>
    </div>
  );
};
export default About;

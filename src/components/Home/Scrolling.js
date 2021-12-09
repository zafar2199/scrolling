import { Link } from "react-router-dom";

// I M P O R T  G S A P
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// S V G  I M P O R T
import { ReactComponent as CircleCheck } from "../../images/icon/checkmark-circle-outline.svg";
import { ReactComponent as ArrowForward } from "../../images/icon/arrow-forward-outline.svg";
import { ReactComponent as LineTime } from "../../images/time-line.svg";

// I M P O R T  D A TA    S C R O L L I N G
import {
  dataDevelopment,
  dataTable,
  dataTimline,
  dataProjectRightContent,
} from "./DataScrolling";

const Scrolling = () => {
    // if (typeof window !== "undefined") {
    //   gsap.registerPlugin(ScrollTrigger);
    // }

    // const anim2 = gsap.from('.managment-right-wrapper', {
    //   duration: 1.5,
    //   // opacity: 0,
    //   y: 20,
    // });


  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: '.managment-right-wrapper',
  //     animation: anim2,
  //     start: "top 20%",
  //     end: "+=500",
  //     // scrub: true,
  //     markers: true,
  //     // pin: true,
  //     onEnter: () => console.log('enter'),
  //     toggleActions: "resume pause restart none",
  //   });
  // });

  const Map = (item) => {
    return item.map(({ title, tableImg, tableData, background }, index) => (
      <div key={index} className="planing-row">
        <div className="planing-row-left">
          <div className="planing-row-left-content">
            <CircleCheck />
            <span>{title}</span>
          </div>
          <div className="planing-row-left-img">
            <img src={tableImg} alt="appx" />
          </div>
        </div>
        <div className="planing-row-right ">
          <div className="planing-row-right-span">
            <span>{tableData}</span>
          </div>
          <div className="planing-row-right-box">
            <div
              style={{ background: `${background}` }}
              className="box-background"
            ></div>
          </div>
          <div className="planing-row-right-box">
            <div
              style={{ background: `${background}` }}
              className="box-background"
            ></div>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="scrolling">
      <div className="managment-content">
        <span className="managment-span">PROJECT MANAGEMENT</span>
        <h2 className="managment-title">Stay organized and connected</h2>
        <p className="managment-paragrf">
          Bring your team’s work together in one shared space. Choose the
          project view that suits your style, and collaborate no matter where
          you are.
        </p>
      </div>
      <div className="scrolling-container">
        <div className="col">
          <div className="scrolling-section scrolling-section-1">
            <div className="planing-block-title">
              <span>Planning</span>
            </div>
            {Map(dataTable)}
            <div className="planing-block-title">
              <span>Planning</span>
            </div>
            {Map(dataDevelopment)}
          </div>

          {/*   S E C T I O N 2 */}
          <div className="scrolling-section scrolling-section-2">
            <div className="planing-block-title">
              <span>Timline</span>
            </div>
            <div className="scroll-timline">
              <div className="svg-line">
                <LineTime />
              </div>
              {dataTimline.map(({ timlineText, background }, index) => (
                <div
                  key={index}
                  className={`scrolling-section-box scrolling-section-box${index} `}
                  style={{ backgroundColor: background }}
                >
                  <div className="scrolling-section-box-content">
                    <CircleCheck />
                    <span>{timlineText} </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="scrolling-section scrolling-section-3"></div>
        </div>
        <div className="copy-blocks">
          <div className="managment-right">
            {/*  */}
            {dataProjectRightContent.map(({ title, paragrf }, index) => (
              <div key={index} className="managment-right-wrapper" >
                <div className="managment-right-content">
                  <h2 className="managment-right-content-title">{title}</h2>
                  <p className="managment-right-content-poragrf">{paragrf}</p>
                  <Link className="managment-right-content-button" to="/">
                    <span>Get Started</span>
                    <div className="managment-right-content-button">
                      <ArrowForward />
                      <ArrowForward />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrolling;

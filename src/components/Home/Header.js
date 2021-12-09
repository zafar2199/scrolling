import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Data
import headerSliderData from "./headerSliderData";

// Svg check , play sircle
import { ReactComponent as CircleCheck } from "../../images/icon/checkmark-circle-outline.svg";
import { ReactComponent as PlayPng } from "../../images/icon/play-circle-outline.svg";

const Header = () => {
  const [btnCount, setBtnCount] = useState(0);
  const [blockCount, setBlockCount] = useState(1);
  const HeaderClickBox0 = useRef(null);
  const HeaderClickBox1 = useRef(null);
  const HeaderClickBox2 = useRef(null);

  const headerCounter = (e) => {
    setBtnCount(btnCount + 1);
    e.currentTarget.style.display = "none";
  };
  console.log("btncount", btnCount);
  console.log("blocount", blockCount);

  useEffect(() => {
    if (btnCount === 3) {
      setBtnCount(0);
      setBlockCount(blockCount + 1);
      HeaderClickBox0.current.style.display = "flex";
      HeaderClickBox1.current.style.display = "flex";
      HeaderClickBox2.current.style.display = "flex";
    }

    if (blockCount === 4) {
      setBlockCount(1);
    }
  }, [btnCount, blockCount]);
  return (
      <div className="header">
        <div className="header-left">
          <h2 className="header-title">We work on big ideas</h2>
          <div className="header-line"></div>
          <p className="header-content">
            We use technological mastery to conjure memorable experiences that
            ignite the audience's imagination.
          </p>
          <Link className="header-vedeo-link" to="/">
            <span>Watch vedeo</span>
            <PlayPng />
          </Link>
        </div>
        <div className="header-right">
          {/* Header Slider  start  */}
          {headerSliderData
            .filter((data) => data.id === blockCount)
            .map(
              (
                {
                  img,
                  sliderBtnText1,
                  sliderBtnText2,
                  sliderBtnText3,
                  background: {
                    backgroundBtn1,
                    backgroundBtn2,
                    backgroundBtn3,
                  },
                },
                index
              ) => (
                <div key={index} className="header-img-overflow">
                  <div className="header-img-blok">
                    <div
                      style={{backgroundColor:backgroundBtn1}}
                      ref={HeaderClickBox0}
                      onClick={(e) => headerCounter(e)}
                      className="header-box"
                    >
                      <div className="header-box-content">
                        <CircleCheck />
                        <span>{sliderBtnText1}</span>
                      </div>
                    </div>
                    <img src={img} alt={index} />
                    <div
                      style={{backgroundColor:backgroundBtn2}}
                      ref={HeaderClickBox1}
                      onClick={(e) => headerCounter(e)}
                      className="header-box box2"
                    >
                      <div className="header-box-content">
                        <CircleCheck />
                        <span>{sliderBtnText2}</span>
                      </div>
                    </div>
                    <div
                      style={{backgroundColor:backgroundBtn3}}
                      ref={HeaderClickBox2}
                      onClick={(e) => headerCounter(e)}
                      className="header-box box3"
                    >
                      <div className="header-box-content">
                        <CircleCheck />
                        <span>{sliderBtnText3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          {/* Header Slider  end  */}
        </div>
      </div>
  );
};

export default Header;

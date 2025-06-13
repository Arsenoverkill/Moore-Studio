import img1 from "../../assets/images/aboutImg1.png";
import img2 from "../../assets/images/aboutImg2.png";
import R from "../../assets/icons/R.svg";
import scss from "./AboutCompany.module.scss";
import PulseBtn from "../../ui/PulseBtn";

const AboutCompany = () => {
  return (
    <div id={scss.AboutCompany}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            <span>Для нас строительство</span> — это
          </h1>
          <h1 className={scss.textPosition}>
            искусство создавать надёжные, <br /> функциональные и <br />{" "}
            вдохновляющие пространства
          </h1>
          <div className={scss.about}>
            <div className={scss.aboutText}>
              <div className={scss.aboutImg}>
                <div>
                  <h4>О компании</h4>
                  <img className={scss.img1} src={img1} alt="image" />
                </div>
                <img className={scss.img2} src={img2} alt="image" />
              </div>

              <div className={scss.text}>
                <p>
                  <img src={R} alt="" />
                  <span>oyal</span> - строительная компания, которая сдает свои
                  объекты в эксплуатацию в обещанные сроки.
                </p>
                <p>
                  Наши объекты строятся в 5-минутной ходьбе от
                  парково-прогулочных зон, основных объектов соцбыта с удобной
                  транспортной развязкой.
                </p>
              </div>
              <PulseBtn text="Читать всё" />
            </div>
            <img className={scss.img2} src={img2} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

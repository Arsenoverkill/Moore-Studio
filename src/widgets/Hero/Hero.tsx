import { useState, useEffect } from "react";
import fon1 from "../../assets/images/fon1.webp";
import fon2 from "../../assets/images/fon2.webp";
import fon3 from "../../assets/images/fon3.webp";
import fon4 from "../../assets/images/fon4.webp";
import fon5 from "../../assets/images/fon5.webp";
import scss from "./Hero.module.scss";

interface Fons {
  id: number;
  image: string;
}

const slides: Fons[] = [
  {
    id: 1,
    image: fon1,
  },
  {
    id: 2,
    image: fon2,
  },
  {
    id: 3,
    image: fon3,
  },
  {
    id: 4,
    image: fon4,
  },
  {
    id: 5,
    image: fon5,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState<number>(0);
  const [place, setPlace] = useState<boolean>(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPlace(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id={scss.Hero}>
      <div
        className={scss.slides}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <img
            className={scss.slide}
            src={slide.image}
            alt="fon"
            key={slide.id}
          />
        ))}
      </div>

      <div className={scss.overlay}>
        <h1
          style={{
            marginRight: place ? "22%" : "",
            marginTop: place ? "10rem" : "",
          }}
        >
          <span className={`${place ? scss.hidden : ""}`}>
            Роскошный пансионат
          </span>
          <span className={`${scss.UpText} ${place ? scss.Finall : ""}`}>
            Royal
          </span>
          <br />
          <span className={`${scss.UpText} ${place ? scss.hidden : ""}`}>
            Resort
          </span>
          <span className={`${place ? scss.hidden : ""}`}>
            на берегу живописного озера
          </span>
          <br />
          <span className={`${scss.UpText} ${place ? scss.hidden : ""}`}>
            Иссык-Куль.
          </span>
        </h1>

        <p
          style={{
            opacity: place ? 0 : 1,
          }}
        >
          Здесь, среди живописных гор, вы сможете насладиться незабываемым
          отдыхом и комфортом наивысшего уровня.
        </p>
      </div>

      <div className={scss.controls}>
        <button onClick={prevSlide}>&larr;</button>
        <span>
          0{current + 1}/0{slides.length}
        </span>
        <button onClick={nextSlide}>&rarr;</button>
      </div>
    </div>
  );
};

export default Hero;

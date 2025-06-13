import scss from "./Header.module.scss";
import moon from "../../assets/icons/moon.svg";
import languageIcon from "../../assets/icons/languageIcon.svg";
import fullArrow from "../../assets/icons/fullArrow.svg";
import America from "../../assets/icons/USA.svg";
import Russia from "../../assets/icons/Russian.svg";
import Turkey from "../../assets/icons/Turkish.svg";
import Logo from "../../assets/icons/Logo.svg";
import { useEffect, useState } from "react";

interface Language {
  name: string;
  icon: string;
}

const languages: Language[] = [
  {
    name: "Русский",
    icon: Russia,
  },
  {
    name: "Английский",
    icon: America,
  },
  {
    name: "Турецкий",
    icon: Turkey,
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("Русский");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id={scss.Header} className={scrolled ? scss.scrolled : ""}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left_part}>
            <div className={scss.moon}>
              <img src={moon} alt="moon" />
            </div>
            <span className={scss.contact}>+996 556 111 444</span>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={scss.language}
            >
              <img
                className={scss.languageIcon}
                src={languageIcon}
                alt="languageIcon"
              />
              <span>{language}</span>
              <img
                style={{
                  transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                className={scss.fullArrow}
                src={fullArrow}
                alt="fullArrow"
              />
              <div
                className={`${scss.dropdown} ${
                  isDropdownOpen ? scss.open : ""
                }`}
              >
                {languages.map((lang, index) => (
                  <div
                    onClick={() => {
                      setLanguage(lang.name);
                      setIsDropdownOpen(false);
                    }}
                    key={index}
                  >
                    <img src={lang.icon} alt="flag" />
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img src={Logo} alt="Logo" className={scss.logo} />

          <div className={scss.objects}>
            <span>Квартиры и объекты</span>
            <label className={scss.hamburger}>
              <input onClick={() => setIsOpen(!isOpen)} type="checkbox" />
              <svg viewBox="0 0 32 32">
                <path
                  className={`${scss.line} ${scss.lineTopBottom}`}
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className={scss.line} d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
          <div className={scss.burgerMenu}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

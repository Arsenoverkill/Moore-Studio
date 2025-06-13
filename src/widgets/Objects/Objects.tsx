import { useMemo, useState } from "react";
import Yntymak from "../../assets/images/YntymakImg.png";
import Tokmok from "../../assets/images/TokmokImg.png";
import Royal from "../../assets/images/RoyalImg.png";
import Moscow from "../../assets/images/MoscowImg.png";
import arrowDown from "../../assets/icons/arrowDown.svg";
import placeIcon from "../../assets/icons/placeIcon.svg";
import houseIcon from "../../assets/icons/houseIcon.svg";
import scss from "./Objects.module.scss";
import PulseBtn from "../../ui/PulseBtn";

interface Object {
  id: number;
  image: string;
  title: string;
  location: string;
  category: string;
  floors: number;
  status: string;
}

const objects: Object[] = [
  {
    id: 1,
    image: Yntymak,
    title: "Ынтымак",
    location: "Бишкек",
    category: "Квартиры",
    floors: 20,
    status: "Строящиеся",
  },
  {
    id: 2,
    image: Tokmok,
    title: "Tower",
    location: "Токмок",
    category: "Жилой дом",
    floors: 15,
    status: "Завершенные",
  },
  {
    id: 3,
    image: Royal,
    title: "Royal Resort",
    location: "Бишкек",
    category: "Офисы",
    floors: 15,
    status: "Строящиеся",
  },
  {
    id: 4,
    image: Moscow,
    title: "Cambridge",
    location: "Москва",
    category: "Коттеджи",
    floors: 20,
    status: "Завершенные",
  },
];

const statuses = ["Все", "Строящиеся", "Завершенные", "На стадии завершения"];
const categories = ["Квартиры", "Офисы", "Коттеджи", "Жилой дом"];
const locations = ["Выберите локацию", "Бишкек", "Москва", "Токмок"];

const Objects = () => {
  const [status, setStatus] = useState<string>("Все");
  const [location, setLocation] = useState<string>("Выберите локацию");
  const [category, setCategory] = useState<string[]>([]);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [switcher, setSwitcher] = useState<boolean>(false);
  const [maxFloor, setMaxFloor] = useState<number>(30);

  const handleClick = (title: string) => {
    if (!category.includes(title)) {
      setCategory([...category, title]);
    } else {
      setCategory(category.filter((item) => item !== title));
    }
  };
  const filteredObjects = useMemo(() => {
    return objects.filter((obj) => {
      const statusMatch = status === "Все" || obj.status === status;
      const locationMatch =
        location === "Выберите локацию" || obj.location === location;
      const categoryMatch = !category.length || category.includes(obj.category);
      const floorMatch = obj.floors >= 1 && obj.floors <= maxFloor;

      return statusMatch && locationMatch && categoryMatch && floorMatch;
    });
  }, [objects, status, location, category, maxFloor]);

  return (
    <div id={scss.Objects}>
      <div className="container">
        <div className={scss.content}>
          <h4>Объекты</h4>
          <h1>
            Фильтруйте. Сравнивайте. <span>Выбирайте.</span>
          </h1>
          <div className={scss.switchContainer}>
            <div className={scss.switch}>
              <span
                onClick={() => setSwitcher(false)}
                style={{
                  color: switcher ? "white" : "black",
                }}
              >
                30 объектов
              </span>
              <div
                style={{
                  width: switcher
                    ? "clamp(9rem, 8.714rem + 1.43vw, 10rem)"
                    : "clamp(7rem, 6.714rem + 1.43vw, 8rem)",
                  transform: `translateX(${
                    switcher ? "clamp(7rem, 6.429rem + 2.86vw, 9rem)" : "0"
                  })`,
                }}
                className={scss.switcher}
              ></div>
              <span
                onClick={() => setSwitcher(true)}
                style={{
                  color: switcher ? "black" : "white",
                }}
              >
                8 Жилых домой
              </span>
            </div>
          </div>
          <div className={scss.status_category}>
            {statuses.map((item, idx) => (
              <div
                onClick={() => setStatus(item)}
                className={`${scss.block} ${
                  status === item ? scss.active : ""
                }`}
                key={idx}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className={scss.filters}>
            <div className={scss.location}>
              <div onClick={() => setDropdown(!dropdown)} className={scss.name}>
                <span>{location}</span>
                <img
                  style={{
                    transform: `rotate(${dropdown ? "180deg" : "0"})`,
                  }}
                  src={arrowDown}
                  alt=""
                />
              </div>
              <div
                style={{
                  opacity: dropdown ? "1" : "0",
                  visibility: dropdown ? "visible" : "hidden",
                  transform: `translateY(${dropdown ? "0" : "1rem"})`,
                }}
                className={scss.options}
              >
                {locations.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setLocation(item);
                      setDropdown(false);
                    }}
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={scss.range}>
              <div className={scss.rangeLabels}>
                <span>
                  <span className={scss.rangePrefix}>от</span> 1 этажей
                </span>
                <span className={scss.rangeDash}>—</span>
                <span>
                  <span className={scss.rangePrefix}>до</span> {maxFloor} этажей
                </span>
              </div>

              <input
                className={scss.rangeInput}
                type="range"
                min={2}
                max={30}
                value={maxFloor}
                onChange={(e) => setMaxFloor(Number(e.target.value))}
              />
            </div>
            <div className={scss.categories}>
              {categories.map((item, idx) => (
                <div
                  onClick={() => handleClick(item)}
                  className={`${scss.block} ${
                    category.includes(item) ? scss.active : ""
                  }`}
                  key={idx}
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={scss.cards}>
            {filteredObjects.map((item) => (
              <div className={scss.card} key={item.id}>
                <h2>{item.title}</h2>
                <div className={scss.info}>
                  <div
                    className={`${scss.status} ${
                      item.status === "Строящиеся"
                        ? scss.building
                        : scss.fullfiled
                    }`}
                  >
                    <span>
                      {item.status === "Строящиеся" ? "Строится" : "Завершен"}
                    </span>
                  </div>
                  <div className={scss.location}>
                    <img src={placeIcon} alt="location-Icon" />
                    <span>{item.location}</span>
                  </div>
                  <div className={scss.category}>
                    <img src={houseIcon} alt="house-Icon" />
                    <span>{item.category}</span>
                  </div>
                </div>
                <div className={scss.image}>
                  <img src={item.image} alt="image" />
                  <div className={scss.start_sell}>СТАРТ ПРОДАЖ</div>
                </div>
              </div>
            ))}
          </div>
          <PulseBtn text={"Смотреть все"} />
        </div>
      </div>
    </div>
  );
};

export default Objects;

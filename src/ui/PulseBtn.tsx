import scss from "./PulseBtn.module.scss";
interface Props {
  text: string;
}

const PulseBtn = ({ text }: Props) => {
  return (
    <div className={scss.pulseWrapper}>
      <div className={scss.pulse}></div>
      <div className={scss.pulse}></div>
      <div className={scss.pulse}></div>
      <div className={scss.pulse}></div>
      <button>{text}</button>
    </div>
  );
};

export default PulseBtn;

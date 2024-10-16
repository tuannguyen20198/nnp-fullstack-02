import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({onIncrease,onDecrease}) {
  return (
    <>
      <button className="count-btn" onClick={onDecrease}>
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn"  onClick={onIncrease}>
        <PlusIcon className="count-btn-icon"/>
      </button>
    </>
  );
}

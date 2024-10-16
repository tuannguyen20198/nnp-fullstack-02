import { ResetIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import ResetButton from "./ResetButton";
import CountButton from "./CountButton";
import { useState, useEffect } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const isDisable = count >= 5 ? "card--limit" : "";
  const [spacePressCount, setSpacePressCount] = useState(0); // Biến theo dõi số lần nhấn Space

  const handleIncrease = (e) => {
    e.preventDefault()
    if (count < 5) return;
    setCount(count + 1);
    
  };

  const handleDecrease = (e) => {
    e.preventDefault()
    if (count > 0 && count < 5) return
    setCount(count - 1);
  };

  const handleReset = () => {
    e.preventDefault()
    setCount(0);
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Space' && spacePressCount < 5) {
      event.preventDefault(); // Ngăn hành động mặc định
      handleIncrease(); // Tăng count khi nhấn phím Space
      setSpacePressCount(spacePressCount + 1); // Tăng số lần nhấn Space
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [spacePressCount]); // Thêm spacePressCount vào dependency array

  return (
    <div className={`card ${isDisable}`} tabIndex={0}>
      <h1 className="title">{isDisable ? 'Fancy Counter' : "LIMIT! Buy Pro for >5"}</h1>
      <p className="count">{count}</p>
      <ResetButton onReset={handleReset} />
      <div className="button-container">
        <CountButton 
          onIncrease={handleIncrease} 
          onDecrease={handleDecrease} 
        />
      </div>
    </div>
  );
}

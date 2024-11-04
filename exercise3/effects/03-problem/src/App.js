import { useEffect, useState } from "react";

// Open the Modal when isOpen is true
export default function App() {
  const [isOpen, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <Modal>
        <h1 className="pb-2 text-lg font-bold">Modal is open!</h1>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

function Modal({ children }) {
  // ref.showModal()
  return <dialog className="border-2 border-black p-4">{children}</dialog>;
}

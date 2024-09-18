import React, { useState } from "react";

const saleOpen = {
  heading: "Get 25% off during our one-time sale",
  description:
    "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
  href: "/one-time-sale",
};

const saleClosed = {
  heading: "Oops, you just missed out on our big sale!",
  description: "Now everything you like is back at full price. Sorry!",
};

// Cách 1
export default function Callout() {
  const handleClick = (e) => {
    e.preventDefault();
    const saleOpenSection = document.querySelector(".sale-section");
    const saleClosedSection = document.querySelector(".closed-section");

    if (saleOpenSection && saleClosedSection) {
      // Toggle visibility
      if (saleOpenSection.style.display === "none") {
        saleOpenSection.style.display = "block";
        saleClosedSection.style.display = "none";
      } else {
        saleOpenSection.style.display = "none";
        saleClosedSection.style.display = "block";
      }
    }
  };

  return (
    <section className="section">
      <div className="section-wrapper sale-section">
        <h2 className="section-heading">{saleOpen.heading}</h2>
        <p className="section-description">{saleOpen.description}</p>
        <a href={saleOpen.href} className="section-link" onClick={handleClick}>
          Get access to our one-time sale
        </a>
      </div>
      <div className="section-wrapper closed-section" style={{ display: "none" }}>
        <h2 className="section-heading">{saleClosed.heading}</h2>
        <p className="section-description">{saleClosed.description}</p>
      </div>
    </section>
  );
}
// Cách 2
// export default function Callout() {
//   const [isSaleOpen, setIsSaleOpen] = useState(true);
//   const handleClick = (e) => {
//     e.preventDefault();
//     setIsSaleOpen(isSaleOpen => !isSaleOpen);
//   };
//   return (
//     <section className="section">
//         <div className="section-wrapper">
//           <h2 className="section-heading">{saleOpen.heading}</h2>
//           <p className="section-description">{saleOpen.description}</p>
//           <a href={saleOpen.href} className="section-link" onClick={handleClick}>
//             Get access to our one-time sale
//           </a>
//         </div>
//       {!isSaleOpen && <div className="section-wrapper mt-3">
//         <h2 className="section-heading">{saleClosed.heading}</h2>
//         <p className="section-description">{saleClosed.description}</p>
//       </div>}
//     </section>
//   );
// }

import React from "react";

// Convert HTML string to valid JSX
function Pricing() {
  return (
    <div>
      <h2 className="title">Simple no-tricks pricing</h2>
      <hr />
      <a href="/buy" className="button">
        Buy Now <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Pricing />
  );
}


import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const EmailNode = ({ id }) => {
  const [recipient, setRecipient] = useState("");

  return (
    <BaseNode
      title="Email"
      inputs={[{ id: `${id}-content` }]}
      outputs={[{ id: `${id}-status` }]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <input
          type="email"
          placeholder="Recipient Email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
    </BaseNode>
  );
};
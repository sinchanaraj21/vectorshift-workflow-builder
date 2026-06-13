import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const APINode = ({ id }) => {
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("GET");

  return (
    <BaseNode
      title="API"
      inputs={[{ id: `${id}-request` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <input
          placeholder="Endpoint URL"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />

        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
      </div>
    </BaseNode>
  );
};
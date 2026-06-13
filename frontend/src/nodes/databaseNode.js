import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const DatabaseNode = ({ id }) => {
  const [table, setTable] = useState("Users");

  return (
    <BaseNode
      title="Database"
      inputs={[{ id: `${id}-query` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <label>
          Table
        </label>

        <select
          value={table}
          onChange={(e) => setTable(e.target.value)}
        >
          <option>Users</option>
          <option>Orders</option>
          <option>Products</option>
          <option>Logs</option>
        </select>
      </div>
    </BaseNode>
  );
};
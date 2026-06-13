// toolbar.js

import { DraggableNode } from './draggableNode';
import { useStore } from "./store";

export const PipelineToolbar = () => {
    const nodes = useStore((state) => state.nodes);
const edges = useStore((state) => state.edges);

    return (
        <div style={{ padding: '10px' }}>
            <div
  style={{
    background: "#1e293b",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "16px",
  }}
>
  <div style={{ fontWeight: "bold" }}>
    Pipeline Stats
  </div>

  <div>Nodes: {nodes.length}</div>
  <div>Edges: {edges.length}</div>
</div>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='database' label='Database' />  
                <DraggableNode type='email' label='Email' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='condition' label='Condition' />
            </div>
        </div>
    );
};

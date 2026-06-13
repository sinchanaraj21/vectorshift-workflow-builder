# VectorShift Workflow Builder

A visual workflow builder for creating, connecting, validating, and analyzing AI pipelines.

Built as part of the VectorShift Frontend Technical Assessment using React, ReactFlow, Zustand, and FastAPI.

---

## Features

### Visual Pipeline Builder

* Drag-and-drop workflow creation
* Interactive node-based interface
* Real-time pipeline editing

### Dynamic Text Nodes

* Supports variable detection using:

```text
{{name}}
{{email}}
{{company}}
```

* Automatically generates input handles for detected variables
* Dynamic node resizing based on content

### Pipeline Analysis

* Node count analysis
* Edge count analysis
* Directed Acyclic Graph (DAG) validation
* Cycle detection

### Configurable Nodes

#### Core Nodes

* Input
* Output
* Text
* LLM

#### Integration Nodes

* API
* Database
* Email

#### Logic Nodes

* Filter
* Condition

### Additional Enhancements

* Live pipeline statistics
* Pipeline export functionality
* Analysis results modal
* Reusable BaseNode architecture

---

## Architecture

### Frontend

* React
* ReactFlow
* Zustand

### Backend

* FastAPI
* Python

### Graph Validation

The backend validates workflow structures using topological sorting to determine whether the submitted graph is a valid DAG.

---

## Project Structure

```text
frontend_technical_assessment
├── backend
│   └── main.py
│
├── frontend
│   ├── public
│   └── src
│       ├── nodes
│       ├── store.js
│       ├── toolbar.js
│       ├── ui.js
│       └── submit.js
│
└── README.md
```

---

## Running Locally

### Backend

```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## Pipeline Analysis Output

Example response:

```json
{
  "num_nodes": 5,
  "num_edges": 4,
  "is_dag": true
}
```

---

## Key Engineering Decisions

* Introduced a reusable BaseNode abstraction to reduce duplication across node implementations.
* Implemented dynamic variable parsing and handle generation within TextNode.
* Added DAG validation using topological sorting.
* Designed configurable integration nodes for API, Database, and Email workflows.
* Added export functionality and live pipeline statistics to improve usability.

---

## Author

Sinchana Raj G

import './App.css';
import React from 'react';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={Backend}>
      <Header />
      <Homepage />
    </DndProvider>   
  );
}

export default App;

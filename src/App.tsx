import { useEffect, useState } from 'react';

import { Button } from './components/Button';

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import './styles/global.scss';


import { Content } from './components/Content';
import { SideBar } from './components/SideBar';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar clickButton={handleClickButton} gerenId={selectedGenreId}/>

      <div className="container">
        <Content gerenId={selectedGenreId}/>
      </div>
    </div>
  )
}
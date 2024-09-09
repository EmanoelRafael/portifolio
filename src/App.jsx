import { BrowserRouter } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

function App() {
  const [lang, setLang] = useState(true);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-0">
          <Navbar lang={lang} onChangeLang={() => {setLang(!lang)}}/>
          <Hero lang={lang}/>
          <About lang={lang} />
          <Experience lang={lang} />
          <Tech />
          <Works lang={lang} />
          <Contact lang={lang} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

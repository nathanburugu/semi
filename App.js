/** @format */

import SideBar from './components/sidebar/SideBar';
import About from './components/About/About';
import TechStack from './components/Projectz/TechStack';
import Projects from './components/Projects/Projects';
import WorkExperience from './components/workExperience/WorkExperience';
import Education from './components/Education/Education';
import React, { useState, createContext } from 'react';
import Testimonial from './components/testimonials/Testimonial';
// import Contact from './components/Contact/Contact';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
// import CallToAction from './components/callToAction/CallToAction.jsx';
import Pricing from './components/pricing/Pricing';
import UserGreeting from './components/UserGreeting';
import Bonga from './components/Bonga/Bonga';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarMobileView from './components/sidebar/NavBarMobileView';
import Tech from './components/Projectz/Tech';
import Skills from './components/skillsY/Skills';
// import { FontContext } from './Helper/FontContext';

export const ThemeContext = createContext(null);
export const FontContext = createContext(null);
export const ProgressContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState('light');
  const changeTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  const [paraDark, setParaBlack] = useState('Bane');
  const turnDark = () => {
    setParaBlack((prev) => (prev === 'Bane' ? 'Nane' : 'Bane'));
  };
  const [font, setFont] = useState('medium');
  const changeFont = () => {
    setFont((prev) => (prev === 'medium' ? 'large' : 'medium'));
  };
  const [now, setNow] = useState(0);
  const changeNow = () => {
    setNow(now + 25);
  };
  return (
    <>
      <ProgressContext.Provider value={{ now, changeNow }}>
        <FontContext.Provider value={{ font, changeFont }}>
          <ThemeContext.Provider value={{ theme, changeTheme }}>
            <div id={font}>
              <div id={theme}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/">
                      <Route
                        path="/"
                        element={
                          <Home
                            changeTheme={changeTheme}
                            theme={theme}
                            changeFont={changeFont}
                            font={font}
                            now={now}
                            changeNow={changeNow}
                          />
                        }
                      />
                      <Route
                        path="/about"
                        element={
                          <About
                            changeTheme={changeTheme}
                            theme={theme}
                            changeFont={changeFont}
                            font={font}
                            now={now}
                            changeNow={changeNow}
                          />
                        }
                      />
                      <Route
                        path="/projects"
                        element={
                          <TechStack
                            changeTheme={changeTheme}
                            theme={theme}
                            changeFont={changeFont}
                            font={font}
                            now={now}
                            changeNow={changeNow}
                          />
                        }
                      />
                      <Route
                        path="/projects/:slug"
                        element={
                          <Tech
                            changeTheme={changeTheme}
                            theme={theme}
                            changeFont={changeFont}
                            font={font}
                            now={now}
                            changeNow={changeNow}
                          />
                        }
                      />
                      <Route
                        path="/skills"
                        element={
                          <Skills
                            changeTheme={changeTheme}
                            theme={theme}
                            changeFont={changeFont}
                            font={font}
                            now={now}
                            changeNow={changeNow}
                          />
                        }
                      />

                      {/* <About
                turnDark={turnDark}
                paraDark={paraDark}
                changeFont={changeFont}
                font={font}
              /> */}
                      {/* <Services /> */}
                      {/* <WorkExperience /> */}
                      {/* <TechStack /> */}
                      {/* <Education /> */}
                      {/* <Projects /> */}
                      {/* <Pricing /> */}
                      {/* <UserGreeting /> */}
                      {/* <Testimonial /> */}
                      {/* <Contact /> */}
                      {/* <Bonga /> */}
                      {/* <CallToAction /> */}
                      {/* <Footer /> */}
                    </Route>
                  </Routes>
                </BrowserRouter>
              </div>
            </div>

            {/* <ScrollToTop
              smooth={true}
              top="20"
              height="20"
              width="20"
              style={{ borderRadius: '10px', background: '#137dae' }}
            /> */}
          </ThemeContext.Provider>
        </FontContext.Provider>
      </ProgressContext.Provider>
    </>
  );
};

export default App;

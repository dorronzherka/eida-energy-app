import './App.css';
import Sidebar  from './components/sidebar/sidebar';
import { Container } from 'react-bootstrap';
import Navbar from './components/navbar/navbar'
import { createContext, useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Battery from './pages/battery/battery';
import EnergySold from './pages/energy-sold/energy-sold';
import Consumption from './pages/consumption/consumption';
import Home from './pages/home/home';
import axios from 'axios'


export const SidebarActiveCntx = createContext(); 
export const ElemCntx = createContext(); 
export const ChargesCntx = createContext(); 
export const SoldCntx = createContext(); 

function isToday(date) {
  const today = new Date();


  if (today.toDateString() === date.toDateString()) {
    return true;
  }

  return false;
}

function App() {
  const [isSidebarActive, setState] = useState(false);
  const val = {isSidebarActive, setState};
  const [location, setLocation] = useState(null);
  const [currentCharges, setCurrentCharges] = useState(null);
  const [currentSolds, setCurrentSolds] = useState(null);
  const apiUrl = 'https://api.staging.eidaenergy.no/consumer/v1/historic/a117ce35-0538-4a38-b1be-db263117a548?limit=9999&fromDate=2022-01-01&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdW1lciI6eyJpZCI6MywibmFtZSI6IkFuZGVyc0YiLCJjb250YWN0ZW1haWwiOiJhbmRlcnNAaG9tZXNvdXJjaW5nLm5vIiwidG9rZW4iOm51bGx9LCJpYXQiOjE2NTY2NjQ4MDB9.dlHyktJSXFYxCkmEDQB3K2YIZcAjIKemSDT08H2JDlI';

  useEffect(() => {
      axios.get(apiUrl)
          .then(data => {
              setLocation(data.data.pop()); 
              let elms = [];
              let elmsSolds = [];
              for(let elm of data.data) {
                if(isToday(new Date(elm.inverter_update_time))) {
                  elms.push([new Date(elm.inverter_update_time).getTime(), parseFloat( elm.consumption_daily)])
                }

                elmsSolds.push([new Date(elm.inverter_update_time).getTime(), parseFloat( elm.daily_sold_PV)])
              }
              const st= new Set(elms).values()
              const st2= new Set(elmsSolds).values()
              setCurrentCharges([...st]);
              setCurrentSolds([...st2])
          })

      
  }, [])
 
  const elem = {location, setLocation};
  const elemCharges = {currentCharges, setCurrentCharges};
  const elemSold = {currentSolds, setCurrentSolds};
  
  return (
    <>
    <Router>
    <div className='d-flex wrapper'>
      <SidebarActiveCntx.Provider value={val}>
      <Sidebar />
      </SidebarActiveCntx.Provider>
      <Container fluid className='main-container'>
      <SidebarActiveCntx.Provider  value={val}>
        <Navbar />
      </SidebarActiveCntx.Provider> 
      <Container fluid style={{
        display: isSidebarActive == true ? 'none' : 'block' 
      }}>
      <Routes>
        <Route exact path="/eida-energy-app/" element={ <ElemCntx.Provider value={elem}> <Home/></ElemCntx.Provider>}></Route>
        <Route exact path="/eida-energy-app/energy-sold" element={<ChargesCntx.Provider value={elemSold}><EnergySold/></ChargesCntx.Provider>}></Route>
        <Route exact path="/eida-energy-app/consumption" element={<ChargesCntx.Provider value={elemCharges}><Consumption/></ChargesCntx.Provider>}></Route>
        <Route exact path="/eida-energy-app/battery" element={<ElemCntx.Provider value={elem}><Battery/></ElemCntx.Provider>}></Route>
      </Routes>
      </Container>
      
    </Container>
    </div>
    </Router>
    </>
  );
}

export default App;

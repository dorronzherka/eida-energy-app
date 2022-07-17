import './sidebar.css'
import {Col, Row, Container} from 'react-bootstrap';
import { SidebarActiveCntx } from '../../App';
import {useContext} from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
function ContainerOutsideExample() {
  const {isSidebarActive, setState} = useContext(SidebarActiveCntx);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  
  return (
    <div className={isSidebarActive ? 'sidebar active' : 'sidebar'}>
       <Container>
      <Row>
        <Col>
        <img src={`${process.env['PUBLIC_URL']}/Eida-logo-green-ny.png`} alt="image" id="logo" />
        </Col>
      </Row>
      <Row>
        <Col>
        <ul className='menu'>
          <li className={splitLocation[2] === "" ? "active" : ""}>
            <Link to='/eida-energy-app/'>Home</Link>
          </li>
          <li className={splitLocation[2] === "consumption" ? "active" : ""} >
            <Link to='/eida-energy-app/consumption'>Total consumption today</Link>
          </li>
          <li className={splitLocation[2] === "energy-sold" ? "active" : ""} >
            <Link to='/eida-energy-app/energy-sold'>Total energy sold</Link>
          </li>         
          <li className={splitLocation[2] === "battery" ? "active" : ""}>
            <Link to='/eida-energy-app/battery'>Battery SOC</Link>
          </li>
        </ul>
        </Col>
      </Row>
      </Container>
        
    </div>
  );
}

export default ContainerOutsideExample;
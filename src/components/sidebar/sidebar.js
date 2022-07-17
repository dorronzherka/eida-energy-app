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
        <img src="/Eida-logo-green-ny.png" alt="image" id="logo" />
        </Col>
      </Row>
      <Row>
        <Col>
        <ul className='menu'>
          <li className={splitLocation[1] === "" ? "active" : ""}>
            <Link to='/'>Home</Link>
          </li>
          <li className={splitLocation[1] === "consumption" ? "active" : ""} >
            <Link to='/consumption'>Total consumption today</Link>
          </li>
          <li className={splitLocation[1] === "energy-sold" ? "active" : ""} >
            <Link to='/energy-sold'>Total energy sold</Link>
          </li>         
          <li className={splitLocation[1] === "battery" ? "active" : ""}>
            <Link to='/battery'>Battery SOC</Link>
          </li>
        </ul>
        </Col>
      </Row>
      </Container>
        
    </div>
  );
}

export default ContainerOutsideExample;
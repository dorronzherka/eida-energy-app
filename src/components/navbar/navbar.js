import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import Button from 'react-bootstrap/Button';
import { SidebarActiveCntx } from '../../App';
import { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

function ContainerOutsideExample() {
  const {isSidebarActive,setState} = useContext(SidebarActiveCntx);
 
  const hideSidebar = () => {

    if(isSidebarActive === true) {
      setState(false);
    } else {
      setState(true);
    }
  }

  return (
    <Navbar expand="lg" className='navbar-energy'>
    <Container>
    <Button variant="outline-success" className='btn-menu' onClick={hideSidebar}><AiOutlineMenu/></Button>
    </Container>
  </Navbar>
  );
}

export default ContainerOutsideExample;
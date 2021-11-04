import {
    Navbar,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';

const DashNavbar = () => {
    return ( <Navbar color="white" style={{padding: '.5rem', display:'flex', width:'100%', boxShadow: '-2px 1px 11px 0px rgba(0,0,0,0.1)'}}>
    <NavbarBrand href="/" style={{color: '#727CF5', fontSize:'1.4rem', fontWeight:'bold'}}>WARNING.IO</NavbarBrand>
      <Nav>
        <div style={{paddingRight:'1rem', display:'flex'}}>
            <UncontrolledDropdown style={{ paddingRight:'1rem'}}>
            <DropdownToggle >
                Options
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                Option 1
                </DropdownItem>
                <DropdownItem>
                Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                Reset
                </DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>
            <div style={{ height: '1rem', lineHeight: '2.1rem'}}>
                <p>Don Ramon</p>
            </div>
        </div>
      </Nav>
    </Navbar>);
}
 
export default DashNavbar;
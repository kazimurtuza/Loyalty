import NavGroup from "./navGroup";
import NavItem from "./navItem";
import NavLogout from "./navLogout";
import "./style.css";
export default function Sidebar() {
    return (
        <div className='nav-panel-wrap'>
            <nav className='nav-panel nav'>
                <div className='drawer-close'>
                    <svg
                        width='15'
                        height='16'
                        viewBox='0 0 15 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <g id='maki:cross'>
                            <path
                                id='Vector'
                                d='M3.64016 2.77L7.50016 6.63L11.3402 2.79C11.425 2.69972 11.5272 2.62749 11.6406 2.57766C11.754 2.52783 11.8763 2.50141 12.0002 2.5C12.2654 2.5 12.5197 2.60536 12.7073 2.79289C12.8948 2.98043 13.0002 3.23478 13.0002 3.5C13.0025 3.6226 12.9797 3.74439 12.9333 3.85788C12.8869 3.97138 12.8178 4.07419 12.7302 4.16L8.84016 8L12.7302 11.89C12.895 12.0512 12.9916 12.2696 13.0002 12.5C13.0002 12.7652 12.8948 13.0196 12.7073 13.2071C12.5197 13.3946 12.2654 13.5 12.0002 13.5C11.8727 13.5053 11.7456 13.484 11.6268 13.4375C11.508 13.3911 11.4002 13.3204 11.3102 13.23L7.50016 9.37L3.65016 13.22C3.56567 13.3073 3.46473 13.3769 3.35316 13.425C3.2416 13.4731 3.12163 13.4986 3.00016 13.5C2.73495 13.5 2.48059 13.3946 2.29306 13.2071C2.10552 13.0196 2.00016 12.7652 2.00016 12.5C1.99783 12.3774 2.02058 12.2556 2.06701 12.1421C2.11344 12.0286 2.18257 11.9258 2.27016 11.84L6.16016 8L2.27016 4.11C2.10535 3.94876 2.0087 3.73041 2.00016 3.5C2.00016 3.23478 2.10552 2.98043 2.29306 2.79289C2.48059 2.60536 2.73495 2.5 3.00016 2.5C3.24016 2.503 3.47016 2.6 3.64016 2.77Z'
                                fill='#ffffff'
                            />
                        </g>
                    </svg>
                </div>
                <ul className='nav__list'>
                    <NavItem title='Dashboard' href='/dashboard' />

                    <NavGroup title='Branch Counter' href='/table'>
                        <ul className='nav__sub-list dropdown-body'>
                            <NavItem title='Branch' href='/branch' cssClass="nav__sub-link" />
                            <NavItem title='Counter' href='/counter' cssClass="nav__sub-link" />
                        </ul>
                    </NavGroup>
                </ul>
                <ul className='nav__list'>
                    <NavGroup title='Staff List' href='/table'>
                        <ul className='nav__sub-list dropdown-body'>
                            <NavItem title='Staff List' href='/staff' cssClass="nav__sub-link" />
                        </ul>
                    </NavGroup>
                </ul>
                <ul className='nav__list'>
                    <NavGroup title='Contact' href='/contact'>
                        <ul className='nav__sub-list dropdown-body'>
                            <NavItem title='Contact Us' href='/contact' cssClass="nav__sub-link" />
                        </ul>
                    </NavGroup>
                </ul>

                <ul className='nav__list'>
                    <NavGroup title='FAQ' href='/contact'>
                        <ul className='nav__sub-list dropdown-body'>
                            <NavItem title='FAQ' href='/faq' cssClass="nav__sub-link" />
                        </ul>
                    </NavGroup>
                </ul>
                <NavLogout />
            </nav>
        </div>
    );
}

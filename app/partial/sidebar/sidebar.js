import { getCookie } from "cookies-next";
import NavGroup from "./navGroup";
import NavItem from "./navItem";
import NavLogout from "./navLogout";
import "./style.css";
export default function Sidebar() {
  const usertype = getCookie("usertype");
  return (
    <div className="nav-panel-wrap">
      <nav className="nav-panel nav">
        <div className="drawer-close">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="maki:cross">
              <path
                id="Vector"
                d="M3.64016 2.77L7.50016 6.63L11.3402 2.79C11.425 2.69972 11.5272 2.62749 11.6406 2.57766C11.754 2.52783 11.8763 2.50141 12.0002 2.5C12.2654 2.5 12.5197 2.60536 12.7073 2.79289C12.8948 2.98043 13.0002 3.23478 13.0002 3.5C13.0025 3.6226 12.9797 3.74439 12.9333 3.85788C12.8869 3.97138 12.8178 4.07419 12.7302 4.16L8.84016 8L12.7302 11.89C12.895 12.0512 12.9916 12.2696 13.0002 12.5C13.0002 12.7652 12.8948 13.0196 12.7073 13.2071C12.5197 13.3946 12.2654 13.5 12.0002 13.5C11.8727 13.5053 11.7456 13.484 11.6268 13.4375C11.508 13.3911 11.4002 13.3204 11.3102 13.23L7.50016 9.37L3.65016 13.22C3.56567 13.3073 3.46473 13.3769 3.35316 13.425C3.2416 13.4731 3.12163 13.4986 3.00016 13.5C2.73495 13.5 2.48059 13.3946 2.29306 13.2071C2.10552 13.0196 2.00016 12.7652 2.00016 12.5C1.99783 12.3774 2.02058 12.2556 2.06701 12.1421C2.11344 12.0286 2.18257 11.9258 2.27016 11.84L6.16016 8L2.27016 4.11C2.10535 3.94876 2.0087 3.73041 2.00016 3.5C2.00016 3.23478 2.10552 2.98043 2.29306 2.79289C2.48059 2.60536 2.73495 2.5 3.00016 2.5C3.24016 2.503 3.47016 2.6 3.64016 2.77Z"
                fill="#ffffff"
              />
            </g>
          </svg>
        </div>
        <ul className="nav__list">
          <NavItem
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            }

            title="Dashboard"
            href="/admin/dashboard"
          />

          {usertype == "brand-admin" && (
            <ul className="nav__list">
              <NavGroup
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
                    <path d="M3 16h18" />
                  </svg>
                }

                title="Brand"
                href="/admin/brand"
              >
                <ul className="nav__sub-list dropdown-body">
                  <NavItem
                    title="Brand"
                    href="/admin/brand"
                    cssClass="nav__sub-link"
                  />
                </ul>
              </NavGroup>
            </ul>
          )}

          <NavGroup
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="M7 17l4-4 4 4 4-4" />
              </svg>
            }

            title="Branch Counter"
            href="/admin/branch"
          >
            <ul className="nav__sub-list dropdown-body">
              {/* usertype wise branch */}

              {usertype == "brand-admin" && (
                <NavItem
                  title="Branch"
                  href="/admin/branch"
                  cssClass="nav__sub-link"
                />
              )}
              {/* {usertype == "branch-admin" && ( */}
              <NavItem
                title="Counter"
                href="/admin/counter"
                cssClass="nav__sub-link"
              />
              {/* )} */}
            </ul>
          </NavGroup>
        </ul>
        <ul className="nav__list">
          <NavGroup
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }

            title="Staff List"
            href="/admin/staff"
          >
            <ul className="nav__sub-list dropdown-body">
              <NavItem
                title="Staff List"
                href="/admin/staff"
                cssClass="nav__sub-link"
              />
            </ul>
          </NavGroup>
        </ul>
        <ul className="nav__list">
          <NavGroup
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <circle cx="9" cy="10" r="2" />
                <path d="M15 8h3" />
                <path d="M15 12h3" />
                <path d="M6 16h12" />
              </svg>
            }

            title="Contact"
            href="/admin/contact"
          >
            <ul className="nav__sub-list dropdown-body">
              <NavItem
                title="Contact Us"
                href="/admin/contact"
                cssClass="nav__sub-link"
              />
            </ul>
          </NavGroup>
        </ul>

        <ul className="nav__list">
          <NavGroup
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            }

            title="Order"
            href="/admin/order"
          >
            <ul className="nav__sub-list dropdown-body">
              <NavItem
                title="Order"
                href="/admin/order"
                cssClass="nav__sub-link"
              />
            </ul>
          </NavGroup>
        </ul>

        <ul className="nav__list">
          <NavGroup
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            }

            title="FAQ"
            href="/admin/faq"
          >
            <ul className="nav__sub-list dropdown-body">
              <NavItem title="FAQ" href="/admin/faq" cssClass="nav__sub-link" />
            </ul>
          </NavGroup>
        </ul>

        {usertype == "brand-admin" && (
          <ul className="nav__list">
            <NavGroup
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              }

              title="Ads"
              href="/admin/ads"
            >
              <ul className="nav__sub-list dropdown-body">
                <NavItem
                  title="Ads"
                  href="/admin/ads"
                  cssClass="nav__sub-link"
                />
              </ul>
            </NavGroup>
          </ul>
        )}

        <ul className="nav__list">
          <NavGroup
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
            }

            title="Report"
            href="/admin/faq"
          >
            <ul className="nav__sub-list dropdown-body">
              <NavItem
                title="Branch Report"
                href="/admin/report/branch-report"
                cssClass="nav__sub-link"
              />
            </ul>
            <ul className="nav__sub-list dropdown-body">
              <NavItem
                title="Counter Report"
                href="/admin/report/counter-report"
                cssClass="nav__sub-link"
              />
            </ul>
            <ul className="nav__sub-list dropdown-body">
              <NavItem
                title="Transaction List"
                href="/admin/report/search-report"
                cssClass="nav__sub-link"
              />
            </ul>
          </NavGroup>
        </ul>
        <NavLogout />
      </nav>
    </div>
  );
}

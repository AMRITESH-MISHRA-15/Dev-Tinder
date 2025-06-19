import { Link } from "react-router-dom";

const navMenuItemData = [
  {
    id: 1,
    pageName: "Home",
    url: "/",
  },
  {
    id: 2,
    pageName: "Feed",
    url: "/feed",
  },
  {
    id: 3,
    pageName: "About",
    url: "/about",
  },
  {
    id: 4,
    pageName: "Contact",
    url: "/contact",
  },
];

const Navbar = ({ title = "Title" }) => {
  return (
    <header className="px-[var(--container-inline-padding)] flex justify-between absolute top-0 left-0 w-[100%] navbar-height items-center spacing">
      <div className="font-Playfair_Display title-size">{title}</div>
      <div>
        <img
          className="h-[var(--nav-icon-height)] aspect-square block lg:hidden"
          src="/icons/menu_icon.svg"
          alt="menu"
        />
      </div>
      <nav className="hidden absolute lg:static lg:block">
        <ul className="flex gap-[4rem] para-font-3 font-[400] nav-menu">
          {navMenuItemData.map((item) => (
            <li key={item.pageName}>
              <Link
                to={item.url}
                className="text-[var(--default-font-black)] font-DM_Sans"
              >
                {item.pageName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

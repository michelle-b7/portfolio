import {NavLink, useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinkStyles = (isActive) => 
    `px-8 py-3 rounded-full border transition-all duration-300 backdrop-blur-md font-vt323 text-3xl 
    ${
        isActive 
        ? 'bg-pink-100/60 border-gray-300 text-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.4)] scale-105' 
        : 'bg-pink-50/60 border-white/40 text-gray-400 hover:bg-pink-50/50 hover:text-pink-600 hover:border-pink-200 shadow-sm'}`;

  return (
    <header className="flex justify-between items-center p-8 bg-transparent absolute top-0 left-0 right-0 z-50">
      
      <nav className="flex">
        <NavLink to="/" className={({ isActive }) => navLinkStyles(isActive)}>
          ✿
        </NavLink>
      </nav>

      <nav className="flex gap-6">

        <NavLink to="/projects" className={({ isActive }) => navLinkStyles(isActive)}>
          Projects ⋆
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
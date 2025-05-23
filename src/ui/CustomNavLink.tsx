import { NavLink } from "react-router";

function CustomNavLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  const navLinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navLinkClass} bg-primary-100/50 text-primary-900`
            : `${navLinkClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;

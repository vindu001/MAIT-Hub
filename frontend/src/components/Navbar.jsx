import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const active =
    "text-blue-500 font-semibold";

  const normal =
    "text-gray-300 hover:text-blue-400";

  return (
    <nav className="bg-slate-950 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-500"
        >
          MAIT Hub
        </Link>

        <div className="flex gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/notes"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Notes
          </NavLink>

          <NavLink
            to="/pyqs"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            PYQs
          </NavLink>

          <NavLink
            to="/practicals"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Practicals
          </NavLink>

          <NavLink
            to="/syllabus"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Syllabus
          </NavLink>

          <NavLink
            to="/fees"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Fees
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Contact
          </NavLink>

        </div>

        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl text-white"
        >
          Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
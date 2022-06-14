import { FC } from "react";
import { Link } from "react-router-dom";

const Menu: FC = () => {
  return (
    <div className="flex w-full py-4 justify-center items-center border-b-2 border-gray-400">
      <nav className="flex gap-4">
        <Link
          className="border-2 border-gray-400 p-2 rounded hover:border-gray-500"
          to="/"
        >
          Главная
        </Link>
        <Link
          className="border-2 border-gray-400 p-2 rounded hover:border-gray-500"
          to="/list"
        >
          Список
        </Link>
        <Link
          className="border-2 border-gray-400 p-2 rounded hover:border-gray-500"
          to="/ranges"
        >
          Диапазоны
        </Link>
        <Link
          className="border-2 border-gray-400 p-2 rounded hover:border-gray-500"
          to="/qths"
        >
          QTH
        </Link>
      </nav>
    </div>
  );
};

export default Menu;

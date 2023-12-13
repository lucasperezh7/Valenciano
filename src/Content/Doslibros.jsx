import React from "react";
import Libro1 from "../images/1.jpeg";
import Libro2 from "../images/2.jpeg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-4 m-4">
        <Link to="/Fervia">
          <img
            src={Libro1}
            alt=""
            className="w-full h-32 object-cover rounded-t-lg"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2"></h3>
          <p className="text-gray-600">LIBRO DE NIVEL B1 Y B2</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 m-4">
        <Link to="/Vadebo">
          <img
            src={Libro2}
            alt=""
            className="w-full h-32 object-cover rounded-t-lg"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2"></h3>
          <p className="text-gray-600">LIBRO DE NIVEL C1</p>
        </div>
      </div>
    </>
  );
};

export default Card;

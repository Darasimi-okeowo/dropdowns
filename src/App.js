import React from "react";
import "./App.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineEdit,
  AiOutlineCustomerService,
} from "react-icons/ai";
import { RiMapPinRangeLine } from "react-icons/ri";
import { FaAngellist } from "react-icons/fa";

function App() {
  return (
    <div className="Menu-bar">
      <ul>
        <li>
          <AiOutlineHome />
          Home
        </li>
        <li>
          <AiOutlineUser />
          About Us
          <div className="sub-menu-1">
            <ul>
              <li>Mission</li>
              <li>Vision</li>
              <li>Team</li>
            </ul>
          </div>
        </li>
        <li>
          <AiOutlineCustomerService />
          Services
        </li>
        <li>
          <AiOutlineUser />
          Clients
        </li>
        <li>
          <FaAngellist />
          Investers
          <div className="sub-menu-1">
            <ul>
              <li>Mission</li>
              <li className='hover-me'>
                Vision
                <div className="sub-menu-2">
                  <ul>
                    <li>Deo</li>
                    <li>Teo</li>
                    <li>Seo</li>
                  </ul>
                </div>
              </li>
              <li>Team</li>
            </ul>
          </div>
        </li>
        <li>
          <RiMapPinRangeLine />
          Pricing
        </li>
        <li>
          <AiOutlineEdit />
          Training
        </li>
        <li>
          <AiOutlinePhone />
          Contacts
        </li>
      </ul>
    </div>
  );
}

export default App;

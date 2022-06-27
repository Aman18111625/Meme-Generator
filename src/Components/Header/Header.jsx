import React from "react";
import './Header.css';

const Header = () =>{
      return (
        <header className="header">
            <img className="header_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUCxYuOfJ4rsjEP3-NtyA5GCu7pAFkTppE_kOZtlkep4VkOluIZQRpU5gp6f3vvLwCN0&usqp=CAU" alt="logo" />
            <h2 className="header_title">Meme Generator</h2>
        </header>
      )
};

export default Header;

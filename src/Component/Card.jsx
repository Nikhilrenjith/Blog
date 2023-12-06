import React from "react";

const Card = () => {
  return (
    <div className="post">
      <img
        src="https://techcrunch.com/wp-content/uploads/2023/12/Sona-__-App.png?w=1390&crop=1"
        alt=""
      />
      <div className="texts">
        <h2>Battery backup plan fo coming years</h2>
        <p className="info">
          <a className="author">Bruce Wayne</a>
          <time>2020-02-20 11:11</time>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum
          similique reprehenderit sed consectetur quidem accusamus, autem soluta
          eligendi dicta!
        </p>
      </div>
    </div>
  );
};

export default Card;

/* eslint-disable no-unused-vars */
import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/doar1.png",
      title: "FAÇA UMA DOAÇÃO",
      description:
        "Nos ajude a comprar alimentos, marmitas e todo o material necessário para as ações.",
    },
    {
      id: 2,
      image: "/doar22.jpg",
      title: "SEJA VOLUNTÁRIO",
      description:
        "Participe das ações, divulgue a iniciativa e seja embaixador dos Cozinheiros do Bem.",
    },
    {
      id: 3,
      image: "/doar3.jpeg",
      title: "SEJA NOSSO PARCEIRO",
      description:
        "Se você tem uma empresa que pode nos ajudar, seja nosso parceiro.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>COMO AJUDAR</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
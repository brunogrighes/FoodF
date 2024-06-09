/* eslint-disable no-unused-vars */
import React from "react";

const Members = () => {
  const members = [
    // {
    //   id: 1,
    //   image: "/m1.jpg",
    //   title: "Doar",
    // },
    // {
    //   id: 2,
    //   image: "/m2.jpg",
    //   title: "Jhon",
    // },
    // {
    //   id: 3,
    //   image: "/m3.jpg",
    //   title: "Michael",
    // },



  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEMBERS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              accusamus aspernatur hic laboriosam blanditiis atque error eius
              dolorem fuga harum?
            </p>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
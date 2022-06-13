import React from "react";

function List({ people }) {
  return (
    <>
      {people.map((obj, index) => {
        return (
          <div className="person">
            <img src={obj.image} alt=""></img>
            <h4>{obj.name}</h4>
            <p>{obj.age} years old</p>
          </div>
        );
      })}
    </>
  );
}

export default List;

import React, { useEffect } from "react";

const FilterButton = ({ setActiveBtn, activeBtn, pouplar, setMovieList }) => {
  const handleClikEvent = (value) => {
    setActiveBtn(value);
  };

  useEffect(() => {
    activeBtn === 0
      ? setMovieList(pouplar)
      : setMovieList(pouplar.filter((x) => x.genre_ids.includes(activeBtn)));
  }, [activeBtn]);

  return (
    <div className="btns-container">
      <button
        className={activeBtn === 0 ? "active" : ""}
        onClick={() => handleClikEvent(0)}
      >
        All
      </button>
      <button
        className={activeBtn === 28 ? "active" : ""}
        onClick={() => handleClikEvent(28)}
      >
        Action
      </button>
      <button
        className={activeBtn === 14 ? "active" : ""}
        onClick={() => handleClikEvent(14)}
      >
        Adventure
      </button>
      <button
        className={activeBtn === 35 ? "active" : ""}
        onClick={() => handleClikEvent(35)}
      >
        Comedy
      </button>
    </div>
  );
};

export default FilterButton;

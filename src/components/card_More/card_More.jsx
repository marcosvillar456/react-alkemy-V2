import React from "react";

const CardMore = ({ Heroe }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={Heroe.images.lg} alt={Heroe.name} />
      </div>
      <div className="card_content">
        <h2 className="card_title">{Heroe.name}</h2>
        <h2>Gender:{Heroe.appearance.gender}</h2>
        <br />
        <h2>Race:{Heroe.appearance.race}</h2>
        <br />
        <h2>Work:{Heroe.work.occupation}</h2>
        <br />
        <h2>First Appearance:{Heroe.biography.firstAppearance}</h2>
        <br />
        <h2>FullName:{Heroe.biography.fullName}</h2>
        <br />
        <h2>Alignment:{Heroe.biography.alignment}</h2>
      </div>
    </div>
  );
};

export default CardMore;

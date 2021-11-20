import React from "react";
import topSectionImg from "../../images/topsectionImg.jpg";
import bottomSectionImg from "../../images/buttomSectionImg.jpg";

const ServiceSection = () => {
  return (
    <main className="TopSection mt-20">
      {/* top Section */}
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="sectionTitle ml-10 md:ml-20">
            Worrying about luggage?
          </h1>
          <p className="sectionDetails ml-10 md:ml-20">
            worry no more because we are here to <br /> help you with luggage
            handling and <br /> vehicle parking
          </p>
        </div>
        <div className="flex-1">
          <img className="w-full" src={topSectionImg} alt="oqpai" />
        </div>
      </div>

      {/* bottom Section */}
      <div className="flex flex-col-reverse  md:flex-row my-20">
        <div className="flex-1">
          <img src={bottomSectionImg} alt="" />
        </div>
        <div className="flex-1">
          <h1 className="sectionTitle text-right mr-10 md:mr-20">
            Hassle free parkings all over the city
          </h1>
          <p className="sectionDetails text-right mr-10 md:mr-20">
            Whether it's your car, your scooter or cycle <br /> we have space fo
            everyone and everything <br />
            so that you can be tension free while your visit
          </p>
        </div>
      </div>
    </main>
  );
};

export default ServiceSection;

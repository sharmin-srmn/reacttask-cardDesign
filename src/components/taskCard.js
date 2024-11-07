import React from "react";
import "../css/taskCard.css"

const TaskCard = () => {
  return (
    <div className="card-details-container">
      {/*<!-- FIRST ROW - CLIENT IMAGE AND NAME  -->*/}
      <div className="row client-container">
        {/*<!-- LEFT CLIENT  -->*/}
        <div className="client-image-name-container">
          <div className="image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0_sy5dSQ_44g7lnT3Cp2lS34AEEM-m5oKw&s"
            />
          </div>
          <div className="client-name-container">
            <p className="client-name">client name</p>
          </div>
        </div>
        {/*<!-- RIGHT CLIENT  -->*/}
        <div className="client-image-name-container">
          <div className="image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLdZQLq84V-kjRwc8wDYZyInJZbOKiwrX2w&s"
            />
          </div>
          <div className="client-name-container">
            <p className="client-name">client name</p>
          </div>
        </div>
      </div>

        {/*<!-- SECOND ROW  -->*/}
        <div className="row details-container">
        <div>
        {/*<!-- ICON  -->*/}
        <i className="fa-solid fa-layer-group"></i>
        </div>
        <div className="short-description-container">
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro amet
            beatae aut quo rerum necessitatibus, nobis in minus alias. Eligendi
            nam inventore eius aperiam quod ullam corrupti eos odio unde.
          </p>
        </div>
        <div className="clipborad-text-container icon-text-container">
          <i className="fa-solid fa-clipboard-list"></i>
          <p>1/2</p>
        </div>
      </div>
        {/*<!-- THird ROW  -->*/}
        <div className="row task-meta-container">
        <div className="image-container">
          <img
            src="https://cdn.vectorstock.com/i/1000v/51/51/passport-photo-of-young-handsome-man-closeup-vector-20715151.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="image-container">
          <img
            src="https://cdn.vectorstock.com/i/500p/03/82/passport-photo-of-young-handsome-man-closeup-vector-17870382.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="count-container">
          <p>12+</p>
        </div>
        <div className="comment-container icon-text-container">
          <i className="fa-regular fa-comments"></i>
          <p>15</p>
        </div>
        <div className="attachment-container icon-text-container">
          <i className="fa-solid fa-paperclip"></i>
          <p>15</p>
        </div>
        <div className="date-container icon-text-container">
          <i className="fa-solid fa-calendar-days"></i>
          <p>12-04-2024</p>
        </div>
      </div>
  </div>);
};

export default TaskCard;

import React from "react";
import TaskCard from "./taskCard.js"
import "../css/cardColumn.css"
const CardColumn = ({column_title, box_color}) =>{
    return (
        <div className="cards-title-column">
                {/*  COLUMN */}
                {/* COLUMN  TITLE */}
                <div className="coulmn-title-container">
                    <div className={`color-box ${box_color} `}></div>
                    <p className="column-title">{column_title}</p>
                    <p className="column-count">0</p>
                </div>
                <div className="column-cards-container">
                     {/* CARD Items */}
                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>
                </div>           
            </div>
    );
};
export default CardColumn;
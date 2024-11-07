import React from "react";
import CardColumn from "../components/cardColumn.js";
import Modal from "./modal.js";
import "../css/cardsContainer.css"
const CardsContainer = () =>{
    const columnsData = [
        { column_title: "incomplete", box_color: "red-box" },
        { column_title: "to do", box_color: "blue-box" },
        { column_title: "doing", box_color: "yellow-box" },
        { column_title: "completed", box_color: "nobox" },
        { column_title: "under review", box_color: "nobox" },
        { column_title: "overdate", box_color: "nobox" }
    ];
    return (
        <>
        <div className="main-container">
            {columnsData.map((column)=>{
                return(
                <CardColumn column_title={column.column_title} box_color ={column.box_color}/> 
                );   
            })}
         
            
        </div>
        <Modal/>
        </>
    );
};
export default CardsContainer;
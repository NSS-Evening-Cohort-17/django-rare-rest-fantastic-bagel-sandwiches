import react from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css"
import "./../Rare.css"

export const CategoryCard = ({ category }) => {

    return (
        <>
        <section className="categorycard">
            <div className="categorycard__header">
                <h3 className="categorycard__header__title">{category.label}</h3>
            </div>
        </section>
        </>
    )
}

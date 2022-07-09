import react, { useEffect, useState }from "react";
import { CategoryCard } from "./CategoryCard";
import { getCategories } from "./CategoryManager";
import "./../Rare.css";

export const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    
    const loadCategories = () => {
        getCategories().then(data => setCategories(data));
    }
    
    useEffect(() => {
        loadCategories();
    }, []);
    
    useEffect(() => {
        console.log(categories);
    }, [categories]);
    
    return (
        <article className="categorylist">
        <h2>All categories</h2>
        {categories.map(category =>
            <CategoryCard
            key={category.id}
            category={category}
            />
        )}
        </article>
    );
    }
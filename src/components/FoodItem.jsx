import styles from "./Fooditem.module.css"
export default function FoodItem({food}){
    return <div className={styles.itemContainer}>
        <img className={styles.itemImage} src={food.image} alt={food.title} />
        <div className={styles.itemContent}>
        <p className={styles.itemName} >{food.title}</p>
        </div>
        
        <button className={styles.itemButton}>
            View Recipe
        </button>
    </div>
}
import React from 'react';

import CSSClass from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                    .map((_, i) => {
                        return  <BurgerIngredient key={igKey + i} type={igKey}/>;
                    })
        });

    return (
        <div className={CSSClass.Burger}>
            <BurgerIngredient type="burger-top"/>
            {transformedIngredients}
            <BurgerIngredient type="burger-bottom"/>
        </div>
    );
}

export default burger;
import React, { useState } from 'react';
import pizza from '../../images/pizzaCard.jpg';
import cart from '../../images/cart.png';
import './PizzaCard.css';

const PizzaCard = () => {
    const [count, setCount] = useState(1);

    function plus() {
        setCount(count + 1);
    };

    function minus() {
        setCount(count - 1);
        if (count<=0){setCount(count)}
    };
    return (
        <div className='pizzaCard'>
            <div className='container'>
                <div className='banner'>
                    <img className='picture' src={pizza} alt='pepperoni' />
                    <div className='tag'>Хит сезона</div>
                </div>
                <div className='pizzaName'>Пепперони</div>
                <div className='description'>Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла</div>
                <select
                    className='size' id =''>
                    <option disabled selected>Диаметр</option>
                    <option>25 см</option>
                    <option>30 см</option>
                    <option>35 см</option>
                </select>
                <div className='price'>от 550 ₽</div>
                <div className='shopping'>
                    <button
                        className='countButton' onClick={minus}> -
                    </button>
                    <span className='counter'>{count}</span>
                    <button
                        className='countButton' onClick={plus}> +
                    </button>
                    <img
                        src={cart}
                        alt='cart'
                        className='cartIcon'
                        onClick={() => {
                            alert(`Ваш заказ: ${count} Пепперни`);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;

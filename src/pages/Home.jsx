import React from 'react'

import { Categories, SortPopup, CandyBlock } from '../components';

function Home({ items }) {    
  return (
        <div className="container">
          <div className="content__top">
            <Categories items={['Напитки', 'Шоколад', 'Хлоптья', 'Шоколадная паста', 'Лапша из Кореи']} />
            <SortPopup items={[
              {name: 'популярности', type: 'popular'}, 
              {name: 'цене', type: 'price'}, 
              {name: 'алфавиту', type: 'alphabet'}
              ]} />
          </div>
          <h2>Все сладости</h2>
          <div className="content__items">
            {
              items.map(obj => <CandyBlock key={obj.id} {...obj}/>)
            }
          </div>
        </div>
    
    )
}

export default Home

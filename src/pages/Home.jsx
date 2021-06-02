import React from 'react'

import { Categories, SortPopup, CandyBlock, CandyLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';

import {setCategory, setSortBy } from '../redux/actions/filters'

import { fetchCandyes } from '../redux/actions/candyes'

const categoryNames = ['Напитки', 'Шоколад', 'Чипсы', 'Шоколадная паста', 'Лапша из Кореи'];
const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'}, 
  {name: 'цене', type: 'price', order: 'desc'}, 
  {name: 'алфавиту', type: 'name', order: 'asc'}
  ];

function Home() {    
  const dispatch = useDispatch()
  const items = useSelector(({ candyes }) => candyes.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ candyes }) => candyes.isLoaded)
  const category = useSelector(({filters}) => filters.category)
  const sortBy = useSelector(({filters}) => filters.sortBy)

  React.useEffect(() => {
    dispatch(fetchCandyes(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index))
  }, [])

  const onClickSortType = React.useCallback(type => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddCandyToCart = candyObj => {
    dispatch({
      type: 'ADD_CANDY_CART',
      payload: candyObj
  })
  }

  return (
        <div className="container">
          <div className="content__top"> 
            <Categories 
              activeCategory={category}
              onClickCategory={onSelectCategory}
              items={categoryNames}/>
            <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onClickSortType} />
          </div>
          <h2>Все сладости</h2>
          <div className="content__items">
            { isLoaded ? items.map(obj => 
              <CandyBlock 
               onClickAddCandy={handleAddCandyToCart} 
               addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
               key={obj.id} {...obj} 
               />)
            : Array(8)
              .fill(0)
              .map((_, index) => <CandyLoadingBlock key={index}/>)}
          </div>
        </div>
    )
}

export default Home

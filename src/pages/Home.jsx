import React from 'react'

import { Categories, SortPopup, CandyBlock, CandyLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';

import {setCategory, setSortBy } from '../redux/actions/filters'
import { fetchCandyes } from '../redux/actions/candyes'

const categoryNames = ['Напитки', 'Шоколад', 'Хлоптья', 'Шоколадная паста', 'Лапша из Кореи'];
const sortItems = [
  {name: 'популярности', type: 'popular'}, 
  {name: 'цене', type: 'price'}, 
  {name: 'алфавиту', type: 'alphabet'}
  ];


function Home() {    
  const dispatch = useDispatch()
  const items = useSelector(({ candyes }) => candyes.items)
  const isLoaded = useSelector(({ candyes }) => candyes.isLoaded)
  const category = useSelector(({filters}) => filters.category)
  const sortBy = useSelector(({filters}) => filters.sortBy)

  React.useEffect(() => {
    dispatch(fetchCandyes(category, sortBy ));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index))
  }, [])

  return (
        <div className="container">
          <div className="content__top"> 
            <Categories 
              activeCategory={category}
              onClickCategory={onSelectCategory}
              items={categoryNames}/>
            <SortPopup items={sortItems} />
          </div>
          <h2>Все сладости</h2>
          <div className="content__items">
            { isLoaded ? items.map(obj => <CandyBlock key={obj.id} {...obj} />) 
            : Array(8)
              .fill(0)
              .map((_, index) => <CandyLoadingBlock key={index}/>)}
          </div>
        </div>
    )
}

export default Home

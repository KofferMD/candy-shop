import React from 'react'
import PropTypes from 'prop-types';
import Button from '../Button';

function CandyBlock({ id, name, image, price, onClickAddCandy, addedCount }) {
  const onAddCandy = () => {
    const obj ={
        id,
        name,
        image,
        price
    }
    onClickAddCandy(obj)
  }

  return (
      <div className="candy-block">
      <img className="candy-block__image" src={image} alt="Candy" />
      <h4 className="candy-block__title">{name}</h4>
      <div className="candy-block__bottom">
        <div className="candy-block__price">{price}₽</div>
        <Button onClick={ onAddCandy} className="button--add" outline>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white" />
          </svg>
          <span>Добавить</span>
          {addedCount &&<i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  )
}

CandyBlock.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  onAddCandy: PropTypes.func,
  addedCount: PropTypes.number
}

CandyBlock.defaultProps = {
  name: 'Имя продукта',
  price: 0,
}

export default CandyBlock

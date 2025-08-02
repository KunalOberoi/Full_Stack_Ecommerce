import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { backend_url, currency } from '../../App'

const Item = (props) => {
  const handleImageError = (e) => {
    // Try to fallback to a local asset first
    const fallbackImage = `/images/product_1.png`;
    if (e.target.src !== backend_url + fallbackImage) {
      e.target.src = backend_url + fallbackImage;
    } else {
      // If even fallback fails, hide the image and show placeholder
      e.target.style.display = 'none';
      const placeholder = document.createElement('div');
      placeholder.style.cssText = 'width: 100%; height: 250px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #666; font-size: 12px; border: 1px solid #ddd;';
      placeholder.textContent = 'Image not available';
      e.target.parentElement.appendChild(placeholder);
    }
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img 
          onClick={() => window.scrollTo(0, 0)} 
          src={backend_url + props.image} 
          alt="products" 
          onError={handleImageError}
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{currency}{props.new_price}</div>
        <div className="item-price-old">{currency}{props.old_price}</div>
      </div>
    </div>
  )
}

export default Item

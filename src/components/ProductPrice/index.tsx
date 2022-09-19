import './style.css'

type Props = {
  price: number;
}

const ProductPrice = ( { price } : Props ) => {
  return (
    <div className="product-price-container">
        <p className='product-price-coin'>R$</p>
        <p className='product-price-price'>548.552</p>
    </div>
  );
};

export default ProductPrice;

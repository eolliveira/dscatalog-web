import ProductCard from '../../components/ProductCard';

const Catalog = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;

import './style.css';
import { ReactComponent as ArrowImgLeft } from '../../assets/img/arrow-left.svg';

const Pagination = () => {
  return (
    <div className="pagination-container">
      <ArrowImgLeft className="arrow-active" />
      <div className="pagination-item active">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">...</div>
      <ArrowImgLeft className="arrow-inverse arrow-inactive" />
    </div>
  );
};

export default Pagination;

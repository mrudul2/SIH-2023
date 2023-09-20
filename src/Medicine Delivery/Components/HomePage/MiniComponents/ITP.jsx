import { Link } from "react-router-dom";
function ITP({ id, img, title, price }) {
  return (
    <div>
      <div>
        <Link to={`/healthfood/${id}`}>
          <img src={img} alt={title} />
        </Link>
      </div>
      <div>
        <b>{title}</b>
      </div>
      <hr />
      <div>Rs.{price}</div>
    </div>
  );
}
export default ITP;

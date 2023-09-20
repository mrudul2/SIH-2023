import { Link } from "react-router-dom";

function Data_3_Flex(props) {
  const { img, name, off } = props;

  return (
    <div>
      <div>
        <Link to="/healthfood">
          <img src={img} alt={name} />
        </Link>
      </div>
      <div>{name}</div>
      <div>Upto {off}% off</div>
    </div>
  );
}
export default Data_3_Flex;

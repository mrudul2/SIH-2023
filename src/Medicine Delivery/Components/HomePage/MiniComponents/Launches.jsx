export default function Launches({ img, details, mrp, price, off }) {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <p style={{ fontWeight: "500" }}>{details}</p>
        <p style={{ color: "gray" }}>
          MRP <span style={{ textDecoration: "line-through" }}>₹{mrp}</span>
        </p>
        <p>
          <span style={{ fontWeight: "430" }}>₹{price}</span>
          <span> </span>
          <span style={{ color: "red" }}>{off}% OFF</span>
        </p>
      </div>
    </div>
  );
}

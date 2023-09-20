export default function Category({ img, name }) {
  return (
    <div>
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
}

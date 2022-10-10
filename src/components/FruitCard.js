import AwesomeButton from "./AwesomeButton";

const FruitCard = ({
  name,
  order,
  nutritions: { carbohydrates, protein, fat, calories, sugar },
}) => {
  // const { carbohydrates, protein, fat, calories, sugar } = nutritions;

  return (
    <div className="fruit-card">
      <h1>{name}</h1>
      <h3>Order:{order}</h3>
      <div>
        <h3>Nutrional Facts</h3>
        <span>Carbohydrates: {carbohydrates}</span>
        <p>Fat: {fat}</p>
        <p>Calories:{calories}</p>
        <p>Sugar:{sugar}</p>
        <p>Protein: {protein}</p>
      </div>
      {/* <AwesomeButton name={props.name} /> */}
    </div>
  );
};
export default FruitCard;

interface DrinksProps {
  drinks: {
    id: number;
    name: string;
    desc?: string;
    price: number;
  }[];
  nameDrink: string;
}

export const AllStrongDrink = ({ drinks, nameDrink }: DrinksProps) => {
  return (
    <>
      <h1 className="text-primary text-2xl my-2 font-semibold">{nameDrink}</h1>
      {drinks.map((drink) => (
        <div key={drink.id} className="flex justify-between">
          <p className="font-semibold">{drink.name}</p>
          <p className="text-primary font-semibold">{drink.price} €</p>
        </div>
      ))}
    </>
  );
};

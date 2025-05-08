import "./main.css";
import Card from "./Card";
import { months } from "../data";

const Main = () => {
  console.log(months);
  return (
    <main className="main">
      {months.map((month) => (
        <Card key={month} title={month} />
      ))}
      <Card />
    </main>
  );
};

export default Main;

import "./card.css";

const Card = ({ title }) => {
  return (
    <article className="task-card">
      <h3 className="task-card__heading">Monthly Checkup</h3>
      <span className="task-card__ship task-card__ship--month">{title}</span>
      <span className="task-card__ship task-card__ship--branch">
        Branch Name
      </span>
      <span className="task-card__ship task-card__ship--employee">
        Employee Name
      </span>
    </article>
  );
};
export default Card;

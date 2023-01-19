import classes from "./Info.module.css";
import headchef from "./headchef.png";

const dummy_chef_info = {
  name: "Jiahao Ye",
  intro:
    "Jiahao Ye would describe himself as a passionate, confident, and creative chef who can skilfully plan menus, prepare outstanding food, manage budgets, and lead a team of people to deliver quality of service to customers ",
  summary:
    "Besides operating a restaurant, Jiahao Ye also has a mixed education background in computer science, mathematics and economics. He has a passion for full-stack web development and loves to develop quantitative trading strategies using Python and C# proramming during his free time.",
};

const Info = () => {
  return (
    <>
      <section className={classes.chef}>
        <div className={classes["chef-describe"]}>
          <small className={classes["chef-title"]}>HEAD CHEF</small>
          <h3 className={classes["chef-name"]}>{dummy_chef_info.name}</h3>
          <p>{dummy_chef_info.intro}</p>
          <p>{dummy_chef_info.summary}</p>
        </div>
        <div className={classes["chef-pic"]}>
          <img src={headchef} alt="head-chef Jiahao Ye" />
        </div>
      </section>
    </>
  );
};

export default Info;

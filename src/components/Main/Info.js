import classes from "./Info.module.css";
import headchef from "./headchef.png";

import sukiyaki from "./dishes-img/Sukiyaki.jpg";
import pekingDuck from "./dishes-img/PekingDuck.jpg";
import ikan from "./dishes-img/Ikan.jpg";

const dummy_chef_info = {
  name: "Jiahao Ye",
  intro:
    "Jiahao Ye would describe himself as a passionate, confident, and creative chef who can skilfully plan menus, prepare outstanding food, manage budgets, and lead a team of people to deliver quality of service to customers ",
  summary:
    "Besides operating a restaurant, Jiahao Ye also has a mixed education background in computer science, mathematics and economics. He has a passion for full-stack web development and loves to develop quantitative trading strategies using Python and C# proramming during his free time.",
};

const dummy_dishes_info = [
  {
    title: "🗻Sukiyaki🗻",
    description:
      "Sukiyaki is the Japanese sweet and salty hot-pot meal. It is usually prepared tableside on a portable gas stove, in a traditional shallow iron pan. This popular Japanese dish is usually made with beef, preferably the well-marbled tender cuts. However, some varieties employ pork or even tofu, creating the vegetarian version of the dish.",
    source: sukiyaki,
  },

  {
    title: "🧨Peking Duck🧨",
    description:
      "Though they appear to be the same and taste the same, the two types of duck are processed, cooked, sliced, and consumed in very different ways. Peking duck is a type of roasted duck with a very thin layer of crispy skin that snaps when you bite it, which is the polar opposite of Cantonese roast duck skin.",
    source: pekingDuck,
  },
  {
    title: "🥢Kari Ikan🥢",
    description:
      "Kari ikan is a delicious fish curry originating from Malaysia. It is typically made with a combination of fish that is cut into pieces, coconut milk, and a variety of spices such as fenugreek, cumin, curry leaves, chili peppers, mustard seeds, tamarind, ginger, turmeric, coriander, and lemongrass.",
    source: ikan,
  },
];

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

      <section className={classes["recommend-dish"]}>
        <h3>A BRILLIANT MENU</h3>
        <div>
          {dummy_dishes_info.map((dish) => {
            return (
              <div className={classes["describe-dish"]}>
                <p>{dish.title}</p>
                <small>{dish.description}</small>
                <img src={dish.source} alt="dish pic" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Info;

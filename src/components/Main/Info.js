import classes from "./Info.module.css";
import headchef from "./headchef.png";

import sukiyaki from "./images/Sukiyaki.jpg";
import pekingDuck from "./images/PekingDuck.jpg";
import ikan from "./images/Ikan.jpg";

import sashimi from "./images/Sashimi.png";
import panda from "./images/panda.png";
import manager from "./images/manager.png";
import Button from "../UI/Button";

import { Link } from "react-router-dom";

const dummy_chef_info = {
  name: "Jiahao Ye",
  intro:
    "Jiahao Ye would describe himself as a passionate, confident, and creative chef who can skilfully plan menus, prepare outstanding food, manage budgets, and lead a team of people to deliver quality of service to customers ",
  summary:
    "Besides operating a restaurant, Jiahao Ye also has a mixed education background in computer science, mathematics and economics. He has a passion for full-stack web development and he loves to create beautiful modern and beautiful website. Additionally, Jiahao is also a money enthusiast and he loves to develop quantitative trading strategies using Python and C# proramming during his free time.",
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

const dummy_staff_info = [
  {
    name: "Sashimi Wasabi",
    title: "Vice chef",
    description:
      "Miss Sashimi would describe herself as a skillful and experienced cook with 10 years of experience. She specializes in Japanese cuisine and likes eating fish with Wasabi.",
    source: sashimi,
  },
  {
    name: "KungFu Panda",
    title: "Customer service",
    description:
      "Mr KungFu has more than 10 years of experience and he is the best customer service representative in our restaurant and he loves to play KungFu in front of our customer.",
    source: panda,
  },
  {
    name: "Precious Salami",
    title: "Chief Manager",
    description:
      "Miss Salami is the chief manager in our restaurant and she works hard to ensure the operating effiency in our restaruant and make our restaurant a much better place.",
    source: manager,
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

      <hr className={classes["hr-style"]} />

      <section className={classes["recommend-dish"]}>
        <h3>A BRILLIANT MENU</h3>
        <div>
          {dummy_dishes_info.map((dish) => {
            return (
              <div className={classes["describe-dish"]} key={dish.title}>
                <p>{dish.title}</p>
                <small>{dish.description}</small>
                <img src={dish.source} alt="dish pic" />
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <br />
        <Link to="/menu">
          <Button>View Menu</Button>
        </Link>
      </section>

      <hr className={classes["hr-style"]} />

      <section className={classes.staffs}>
        <h3>Our Team</h3>
        <div className={classes["staffs-info"]}>
          {dummy_staff_info.map((staff) => {
            return (
              <div className={classes["flip-card"]} key={staff.name}>
                <div className={classes["flip-card-inner"]}>
                  <div className={classes["flip-card-front"]}>
                    <p>{staff.title}</p>
                    <img
                      src={staff.source}
                      alt={staff.name}
                      style={{ width: "300px", height: "300px" }}
                    />
                  </div>
                  <div className={classes["flip-card-back"]}>
                    <h1>{staff.name}</h1>
                    <p>{staff.title}</p>
                    <p>{staff.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/takeout-order">
          <Button>Make an order</Button>
        </Link>
      </section>
    </>
  );
};

export default Info;

import classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import MenuItem from "../components/Menu/MenuItem";
import { useHistory, useLocation } from "react-router-dom";

// create a dummy list of menu for now: there are 7 items for now
const dummy_memu_list = [
  {
    id: "m0",
    title: "Peking Duck",
    price: "22.49",
    description:
      "Though they appear to be the same and taste the same, the two types of duck are processed, cooked, sliced, and consumed in very different ways. Peking duck is a type of roasted duck with a very thin layer of crispy skin that snaps when you bite it, which is the polar opposite of Cantonese roast duck skin.",
  },
  {
    id: "m1",
    title: "Sukiyaki Pot",
    price: "24.49",
    description:
      "Sukiyaki is the Japanese sweet and salty hot-pot meal. It is usually prepared tableside on a portable gas stove, in a traditional shallow iron pan. This popular Japanese dish is usually made with beef, preferably the well-marbled tender cuts. However, some varieties employ pork or even tofu, creating the vegetarian version of the dish.",
  },
  {
    id: "m2",
    title: "Kari Ikan",
    price: "15.49",
    description:
      "Kari ikan is a delicious fish curry originating from Malaysia. It is typically made with a combination of fish that is cut into pieces, coconut milk, and a variety of spices such as fenugreek, cumin, curry leaves, chili peppers, mustard seeds, tamarind, ginger, turmeric, coriander, and lemongrass.",
  },
  {
    id: "m3",
    title: "KUNG PAO CHICKEN",
    price: "16.49",
    description:
      "As one of the most popular Asian foods in America, kung pao chicken continues to add flavor to any meal of your choice. This delicious source of protein is boneless, skinless, stir-fried chicken breast that pairs well with vegetables and nuts. ",
  },
  {
    id: "m4",
    title: "Pork Ramen Bowl",
    price: "15.79",
    description:
      "Another staple in American diets is ramen. Due to the versatility in flavor, ingredients and preparation, ramen is one of the most popular Asian dishes that has become Americans’ favorite, easy meal option. ",
  },
  {
    id: "m5",
    title: "Top class WAGYU",
    price: "30.59",
    description:
      "Wagyu beef has become a delicacy for Japanese cuisines that has spread to the United States. Why is this meat so popular? Wagyu is a type of cattle breed in Japan. The meat they produce has a unique concentration of fat inside the muscle, categorizing the beef as a high marbling texture. This factor makes the meat more expensive since other beef does not have the same high-grain intramuscular fat. ",
  },
  {
    id: "m6",
    title: "BIBIMBAP",
    price: "15.49",
    description:
      "Bibimbap is a fun meal to create if you enjoy simple dishes with lots of protein. This dish is a mixed bowl of rice, beef, assorted vegetables and eggs. The individual ingredients cook separately and combine to create a delicious concoction of healthy food options for any meal. ",
  },
  {
    id: "m7",
    title: "GỎI CUỐN",
    price: "13.49",
    description:
      "Gỏi cuốn — also known as Vietnamese spring rolls — is meat, vegetables and rice noodles in a rice paper roll. The roll is thin enough to see the ingredients inside. ",
  },
];

// define a sorting helper function:
const sortMenuItems = (items, sortby) => {
  return items.sort((itemA, itemB) => {
    if (sortby === "ascprice") {
      return parseInt(itemA.price) > parseInt(itemB.price) ? 1 : -1;
    } else if (sortby === "descprice") {
      return parseInt(itemA.price) < parseInt(itemB.price) ? 1 : -1;
    } else if (sortby === "ascalphabet") {
      return itemA.title.localeCompare(itemB.title);
    } else if (sortby === "descalphabet") {
      return itemB.title.localeCompare(itemA.title);
    }
  });
};

const Menu = () => {
  // useHistory() hook to push to new URL
  const history = useHistory();

  // to extract the query param:
  const location = useLocation();

  // this will return an object with key-value pairs derived from the query params
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscendingPrice =
    queryParams.get("sort") === "ascprice" ? true : false;
  const isSortingAscendingAlphabet =
    queryParams.get("sort") === "ascalphabet" ? true : false;

  const sortingMenuHandlerPrice = () => {
    history.push({
      pathname: location.pathname,
      search: "?sort=" + (isSortingAscendingPrice ? "descprice" : "ascprice"),
    });
  };

  const sortingMenuHandlerAlphabet = () => {
    history.push({
      pathname: location.pathname,
      search:
        "?sort=" +
        (isSortingAscendingAlphabet ? "descalphabet" : "ascalphabet"),
    });
  };

  const sortedQuotes = sortMenuItems(dummy_memu_list, queryParams.get("sort"));

  return (
    <>
      <div className={classes["menu-container"]}>
        <div className={classes.header}>
          <h1>Our Menu</h1>
          <p>
            Bring you the most authentic Asian style.{" "}
            <NavLink to="/takeout-order">Order a take-out</NavLink>
          </p>
        </div>
        <div>
          <button className={classes.btn} onClick={sortingMenuHandlerPrice}>
            Sort by price
          </button>
          <button className={classes.btn} onClick={sortingMenuHandlerAlphabet}>
            Sort by alphabet
          </button>
        </div>
        <div>
          <ul>
            {sortedQuotes.map((item) => {
              return (
                <MenuItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                ></MenuItem>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;

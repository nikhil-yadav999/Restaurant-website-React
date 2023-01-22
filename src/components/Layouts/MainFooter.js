import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <>
      <footer>
        <div className={classes.address}>
          123 Justin Treaudeu St, Ottawa <br />
          123 456 8888 <br />
          <a href="mailto:emperorsdish@ni-hao.ca">emperorsdish@ni-hao.ca</a>
          <br />
        </div>
        <div className={classes.hours}>
          Hours: <br />
          OPEN FOR DINE IN! <br />
          WEDNESDAY, THURSDAY, AND SUNDAY: 5:30PM - 10:00PM <br />
          FRIDAY AND SATURDAY: 5:30PM - 11:00PM <br />
        </div>
        <div className={classes["soc-media"]}></div>
      </footer>
    </>
  );
};

export default MainFooter;

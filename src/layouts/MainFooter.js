import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <>
      <footer>
        <div className={classes.address}>
          123 Justin Treaudeu St, Ottawa <br />
          123 456 8888 <br />
          <a href="mailto:emperorsdish@ni-hao.ca">
            emperorsdish@ni-hao.ca
          </a>
          <br />
        </div>
        <div className={classes.hours}>
          Hours: <br />
          OPEN FOR DINE IN! <br />
          WEDNESDAY, THURSDAY, AND SUNDAY: 5:30PM - 10:00PM <br />
          FRIDAY AND SATURDAY: 5:30PM - 11:00PM <br />
        </div>
        <div className={classes["soc-media"]}>
          <a href="https://twitter.com/" className="fa fa-facebook"></a>
          <a href="https://www.facebook.com/" className="fa fa-twitter"></a>
          <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
          <a href="https://www.wechat.com/" className="fa fa-weixin"></a>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;

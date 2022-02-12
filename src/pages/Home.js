import Header from "../components/Header";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <section className="section-1">
          <div className="content-frame">
            <h1 className="bg-heading">
              Dollar investments that help you grow
            </h1>
            <p>
              We put your money in high quality assets that help you build
              wealth and achieve your financial goals.
            </p>
            <div className="app-store">
              <button className="app-link">
                <BsApple style={{ fontSize: 40, margin: 10 }} />
                <p style={{ textAlign: "left" }}>
                  Download on the <strong>App Store</strong>
                </p>
              </button>
              <button className="app-link">
                <FaGooglePlay style={{ fontSize: 40, margin: 10 }} />
                <p style={{ textAlign: "left" }}>
                  Download on the <strong>App Store</strong>
                </p>
              </button>
            </div>
          </div>
          <img
            className="phone-img"
            width="240"
            src="https://res.cloudinary.com/wizzle3d/image/upload/v1644567259/samples/rise-app-phone_epzek9.png"
            alt=""
          />
        </section>
        <section className="section-2">
          <div>
            <img
              style={{ width: "90%" }}
              src="https://res.cloudinary.com/wizzle3d/image/upload/v1644567248/samples/arm_ba6p1c.png"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "90%" }}
              src="https://res.cloudinary.com/wizzle3d/image/upload/v1644567247/samples/WU_piach3.png"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "90%" }}
              src="https://res.cloudinary.com/wizzle3d/image/upload/v1644567247/samples/techstars_fopks4.png"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "90%" }}
              src="https://res.cloudinary.com/wizzle3d/image/upload/v1644567247/samples/jajaj_dknwwe.png"
              alt=""
            />
          </div>
        </section>
        <section className="section-1 flex-rev">
          <div className="content-frame2">
            <h2 className="sm-heading">Invest your money in dollars</h2>
            <p>
              By holding your investments in a stable currency, your money grows
              more over time and retains its value better.
            </p>
            <Link to="/" className="link" style={{ margin: 0 }}>
              Start investing now
            </Link>
          </div>
          <img
            className="showcase"
            width="480"
            src="https://res.cloudinary.com/wizzle3d/image/upload/v1644575590/samples/file1_1_ffaya9.png"
            alt=""
          />
        </section>
        <section className="section-1">
          <img
            className="showcase"
            width="480"
            src="https://res.cloudinary.com/wizzle3d/image/upload/v1644575997/samples/file3_1_yntry4.png"
            alt=""
          />
          <div className="content-frame2">
            <h2 className="sm-heading">Choose what's best for you</h2>
            <p>
              Unlike other platforms, Rise lets you pick between stocks, US real
              estate and fixed income, according to your risk appetite. That way
              you can spread your risk and tap into different investments all in
              one place.
            </p>
            <Link to="/" className="link" style={{ margin: 0 }}>
              Start investing now
            </Link>
          </div>
        </section>
        <section className="section-1 flex-rev">
          <div className="content-frame2">
            <h2 className="sm-heading">Set goals and reach them</h2>
            <p>
              You can invest towards a goal on Rise--retirement, higher
              education, save for your home or travel budgets. Or create a goal
              of your own and invest periodically to achieve them.
            </p>
            <Link to="/" className="link" style={{ margin: 0 }}>
              Start investing now
            </Link>
          </div>
          <img
            className="showcase"
            width="480"
            src="https://res.cloudinary.com/wizzle3d/image/upload/v1644575997/samples/file1_2_xbsakb.png"
            alt=""
          />
        </section>
        <section className="section-1">
          <img
            className="showcase"
            width="480"
            src="https://res.cloudinary.com/wizzle3d/image/upload/v1644575997/samples/file_5_1_x1ttuv.png"
            alt=""
          />
          <div className="content-frame2">
            <h2 className="sm-heading">We remember so you dont have to</h2>
            <p>
              Our Auto-invest feature makes it easy to stay consistent, even
              when you forget. Set a funding amount, frequency and payment
              method and Rise will automatically fund your investment, on
              schedule.
            </p>
            <Link to="/" className="link" style={{ margin: 0 }}>
              Start investing now
            </Link>
          </div>
        </section>
        <section>
          <div style={{ textAlign: "center", width: "100%" }}>
            <h1 style={{ fontSize: 35, margin: "20px 0px" }}>Asset Classes</h1>
            <p style={{ fontSize: 20, margin: 0 }}>
              It’s your money, choose where you invest it
            </p>
          </div>
          <div className="asset-section" style={{ marginTop: 20 }}>
            <div className="asset-box">
              <div className="asset-inner-box">
                <div className="asset-img">
                  <img
                    src="https://res.cloudinary.com/wizzle3d/image/upload/v1644599396/samples/Ellipse_205_b8rssy.png"
                    alt=""
                  />
                </div>
                <h3>Stocks</h3>
                <p style={{ marginBottom: 150 }}>
                  We help you invest and manage your money by investing in our
                  portfolio of 30 high-growth stocks across the US market with
                  our equity portfolio of power stocks.
                </p>
                <div className="asset-bottom">
                  <p style={{ lineHeight: 1 }}>
                    <span style={{ color: "#919FB5" }}>
                      Historical Returns:{" "}
                    </span>{" "}
                    14% Per Annum
                  </p>
                  <p style={{ lineHeight: 0, marginBottom: 40 }}>
                    <span style={{ color: "#919FB5" }}>Risk Level: </span>High
                  </p>
                  <Link to="/" className="link">
                    Learn how Stocks works
                  </Link>
                </div>
              </div>
            </div>
            <div className="asset-box" style={{ backgroundColor: "#F6F2FF" }}>
              <div className="asset-inner-box">
                <div className="asset-img">
                  <img
                    src="https://res.cloudinary.com/wizzle3d/image/upload/v1644599396/samples/Ellipse_205_1_i94lwe.png"
                    alt=""
                  />
                </div>
                <h3>Real Estate</h3>
                <p style={{ marginBottom: 150 }}>
                  Our Real Estate plan is the sweet middle. Best for those who
                  want a balance of good returns and medium risk. This plan
                  invests in rented buildings in the US.
                </p>
                <div className="asset-bottom">
                  <p style={{ lineHeight: 1 }}>
                    <span style={{ color: "#919FB5" }}>
                      Historical Returns:{" "}
                    </span>{" "}
                    14% Per Annum
                  </p>
                  <p style={{ lineHeight: 0, marginBottom: 40 }}>
                    <span style={{ color: "#919FB5" }}>Risk Level: </span>Medium
                  </p>
                  <Link to="/" className="link">
                    Learn how Real Estate works
                  </Link>
                </div>
              </div>
            </div>
            <div className="asset-box" style={{ backgroundColor: "#ECFEFE" }}>
              <div className="asset-inner-box">
                <div className="asset-img">
                  <img
                    src="https://res.cloudinary.com/wizzle3d/image/upload/v1644599396/samples/Ellipse_205_2_kwiw42.png"
                    alt=""
                  />
                </div>
                <h3>Fixed Income</h3>
                <p style={{ marginBottom: 150 }}>
                  A low-risk asset perfect for anyone who wants to protect their
                  money in a secure, appreciating currency, i.e. the dollar. For
                  people who want to protect their hard-earned money from
                  inflation while earning steady returns.
                </p>
                <div className="asset-bottom">
                  <p style={{ lineHeight: 1 }}>
                    <span style={{ color: "#919FB5" }}>
                      Historical Returns:{" "}
                    </span>{" "}
                    10% Per Annum
                  </p>
                  <p style={{ lineHeight: 0, marginBottom: 40 }}>
                    <span style={{ color: "#919FB5" }}>Risk Level: </span>Low
                  </p>
                  <Link to="/" className="link">
                    Learn how Fixed Income works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-1" style={{ marginTop: 10 }}>
          <img
            width="380"
            className="phone-img"
            src="https://res.cloudinary.com/wizzle3d/image/upload/v1644567258/samples/build-wealth-phone_fwarfv.png"
            alt=""
          />
          <div className="content-frame2">
            <p>The Rise App</p>
            <h2 className="sm-heading">
              Save for your{" "}
              <span style={{ color: "rgb(140, 65, 190)" }}>future</span>
            </h2>
            <p>
              With Rise, you achieve your financial goals faster. Save for
              school, your home, vacations, your children’s future and more.
            </p>
            <button className="green-btn">Start Saving</button>
          </div>
        </section>
        <section style={{ textAlign: "center" }} className="section-3">
          <h1 style={{ fontSize: 35, margin: 0 }}>How we are Regulated</h1>
          <p className="tg-paragh">
            Rise is registered and regulated both in the US and in Nigeria. The
            founder is registered as an investment adviser with the US SEC. The
            Nigerian SEC regulates Rise's Nigerian investments through a
            trusteeship agreement with ARM Trustees, who oversees investments on
            behalf of the users. And a registered investment subsidiary holds
            all users' assets regulated in the US
          </p>
        </section>
        <h1
          style={{
            fontSize: 40,
            margin: 0,
            color: "#07969e",
            textAlign: "center",
          }}
        >
          From The People Who Use Rise
        </h1>
        <p className="tg-paragh">
          Our mission at Risevest is to empower more people just like you to
          achieve your personal financial goals.
        </p>
      </div>
      <section className="review-wrapper">
        <div className="container-2">
          <div className="review-box">
            <p>
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="avatar-grp">
              <img
                width="40"
                src="https://res.cloudinary.com/wizzle3d/image/upload/v1644616188/samples/Ellipse_196_bfmvah.png"
                alt=""
              />
              <p style={{ marginTop: 9, marginLeft: 10 }}>
                <strong>Lade</strong>
              </p>
            </div>
          </div>
          <div className="review-box">
            <p>
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="avatar-grp">
              <img
                width="40"
                src="https://res.cloudinary.com/wizzle3d/image/upload/v1644616188/samples/Ellipse_196_bfmvah.png"
                alt=""
              />
              <p style={{ marginTop: 9, marginLeft: 10 }}>
                <strong>Jesse</strong>
              </p>
            </div>
          </div>
          <div className="review-box">
            <p>
              I chose Rise because of its leadership, wealth of knowledge and
              the people who support them. I invest with Rise in order to
              protect my savings and investment from being depleted by
              devaluation and inflation that’s at an all-time high in Nigeria.
            </p>
            <div className="avatar-grp">
              <img
                width="40"
                src="https://res.cloudinary.com/wizzle3d/image/upload/v1644616188/samples/Ellipse_196_1_ixezw7.png"
                alt=""
              />
              <p style={{ marginTop: 9, marginLeft: 10 }}>
                <strong>Raye</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="section-1">
          <div className="content-frame2">
            <h2 className="sm-heading">Join The Rise Community</h2>
            <p style={{ marginBottom: 30 }}>
              If you want to go far, go together. Our Telegram community
              surrounds you with others who can help you along your financial
              journey with tips, support, advice and learning. It's completely
              free and open to new and seasoned investors.
            </p>
            <button className="light-green-btn">Join our community</button>
          </div>
          <img
            className="showcase"
            width="480"
            src="https://res.cloudinary.com/wizzle3d/image/upload/v1644619437/samples/rise-community-09f0a69d1eb80c0a1b8122f8c2e32cac_wfm7kt.png"
            alt=""
          />
        </section>
        <section className="sec-bg">
          <div className="content-frame float-left" style={{ marginTop: 30 }}>
            <p style={{ color: "#07969e" }}>Download The Rise App</p>
            <h1>
              Join our 100,000 users investing and setting long term goals!
            </h1>
            <p>Dollar investments that help you grow</p>
            <div className="app-store">
              <button className="app-link">
                <BsApple style={{ fontSize: 40, margin: 10 }} />
                <p style={{ textAlign: "left" }}>
                  Download on the <strong>App Store</strong>
                </p>
              </button>
              <button className="app-link">
                <FaGooglePlay style={{ fontSize: 30, margin: 10 }} />
                <p style={{ textAlign: "left" }}>
                  Download on the <strong>App Store</strong>
                </p>
              </button>
            </div>
          </div>
          <img
            className="phone-img float-right"
            width="200"
            src="https://res.cloudinary.com/wizzle3d/image/upload/v1644567259/samples/rise-app-phone_epzek9.png"
            alt=""
          />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

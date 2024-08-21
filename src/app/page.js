import "./styles.scss"

function Home() {
  return (
    <>
      <div className="card">
        <div className="card_logo">
          <img className="logo" src="/catsong.png" alt="catSong" />
          <h2>BlackCat</h2>
          <h4>Innovations</h4>
          <p>Testing OAuth Google</p>
        </div>
        <div className="card_form">
          <div className="icon"></div>
          <p className="title">Welcome back!</p>
          <p className="subtitle">Please enter your details</p>
          <form action="">
            <label className="label" htmlFor="">Email</label>
            <input className="input" type="text" />
            <label className="label" htmlFor="">Password</label>
            <input className="input" type="password" name="" id="" />
            <div className="container">
              <div className="check">
                <input type="checkbox" name="" id="chk1" />
                <label htmlFor="chk1">Remember for 30 days</label>
              </div>
              <a href="">Forgot password</a>
            </div>
            <button className="btn_local" type="submit">Log in</button>
            <button className="btn_google">Google</button>
          </form>
          <div className="footer">
            <p>Don&apos;t have an account?</p>
            <a href="">Sign Up</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

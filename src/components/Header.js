const Header = props => {
  const logo = <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo"/>;
  return (
    <header>
      {logo}
      <h3>Keep</h3>
    </header>
  );
};

export default Header;

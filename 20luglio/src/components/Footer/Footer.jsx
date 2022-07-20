import "./index.css";

const Footer = () => {
  return (
    <div className="Footer">
      <h2>Grazie per averci scelto</h2>
      <div className="socialMedia">
        <a href="https://twitter.com">
          <img
            id="twitterEl"
            src="https://img.icons8.com/cotton/64/000000/twitter.png"
            alt="twitter"
          />
        </a>
        <a href="https://www.instagram.com/">
          <img
            id="instagramEl"
            src="https://img.icons8.com/cotton/64/000000/instagram.png"
            alt="instagram"
          />
        </a>
        <a href="https://www.facebook.com/">
          <img
            id="facebookEl"
            src="https://img.icons8.com/cotton/64/000000/facebook.png"
            alt="facebook"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;

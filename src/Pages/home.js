import '../Styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={require('../Images/logo.jpg')} alt="home" />
        <div className="text">
          <p>Download WeHealth App from the below link</p>
        </div>
        <button className="download-btn"><a href="https://drive.google.com/u/1/uc?id=1GKXJOorNjkm_UJDQ9t0p7Zny9D049vuq&export=download&confirm=t&uuid=55aecde0-fffa-4b7a-b56f-5e104b803201" download>Download</a></button>
      </div>
    </div>
  )
}
export default Home;

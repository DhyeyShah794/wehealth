import '../Styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={require('../Images/logo.jpg')} alt="home" />
        <button className="download-btn"><a href="" download>Download</a></button>
      </div>
    </div>
  )
}
export default Home;
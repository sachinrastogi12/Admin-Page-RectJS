import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import SecondChart from "../../components/secondchart/secondchart";

const Home = () => {
  return (
    <div className="home">
        <div className="homeContainer">
            <div className="navbar_div">
              <Navbar />
            </div>

            <div className="charts_div">
              <Featured />
              <Chart title="Zone-Wise" />
            </div>

            <div className="second_Charts_div">
              <SecondChart title="Zone-Wise" />
            </div>
        </div>
    </div>
  );
};

export default Home;

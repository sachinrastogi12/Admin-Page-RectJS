
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import SecondChart from "../../components/secondchart/secondchart";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        
        <div className="charts">
          <Featured />
          <Chart title="Zone-Wise" />
       
        </div >
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <SecondChart title="Zone-Wise" />

        </div>
      </div>
    </div>
  );
};

export default Home;

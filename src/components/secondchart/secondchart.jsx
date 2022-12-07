
import {Box, FormControlLabel, Switch, FormControl, InputLabel } from '@mui/material'
import { positions, style } from "@mui/system";
import {Select, MenuItem} from "@mui/material";
import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const data = [
  {
    name: 'Kamla Textiles',
    Actual: 1800,
    Expected: 800,
    amt: 1400,
  },
  {
    name: 'Fashion House',
    Actual: 868,
    Expected: 1400,
    amt: 1506,
  },
  {
    name: 'Ananya Handicraft',
    Actual: 1397,
    Expected: 700,
    amt: 989,
  },
  {
    name: 'Iraa Clothing Pvt...',
    Actual: 1480,
    Expected: 1500,
    amt: 1228,
  },
  {
    name: 'Shri Shaantidurga',
    Actual: 1520,
    Expected: 408,
    amt: 1100,
  },
  {
    name: 'Kyara Creations',
    Actual: 2400,
    Expected: 1200,
    amt: 1700,
  },
 { 
  name: 'SDS Fashion',
  Actual: 1000,
  Expected: 400,
  amt: 1700,
},
{
name: 'Mat Clothing Pvt...',
Actual: 2000,
Expected: 680,
amt: 1700,
},

{
  name: 'Krishna Beads...',
  Actual: 1400,
  Expected: 680,
  amt: 1700,
  },

  
];


const SecondChart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title" >Zone Wise</div>
      <div className="titles">ASN Lifecycle</div>
      <div className="compactgraph"> Compact Graph <Switch inputProps={{ 'aria-label': 'Switch A'}} /> </div>
    
      <select className="selectss" style={{position:"relative", left: "73rem", bottom:"1.8rem"}}>
        <MenuItem value={1}>ASB Approval</MenuItem>
        <MenuItem value={2}>ASB Not Approval</MenuItem>
      </select>

      
      <ResponsiveContainer width="100%" height="40%" aspect={5/1}>
        <ComposedChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Actual" barSize={6} fill="#413ea0" />
          <Line type="monotone" dataKey="Expected" stroke="#ff7304" />
        </ComposedChart>
      </ResponsiveContainer>
      
    </div>
  );
  
};

export default SecondChart;

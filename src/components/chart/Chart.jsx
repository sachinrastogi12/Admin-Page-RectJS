import "./chart.scss";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Box, FormControlLabel, Switch, FormControl, InputLabel } from '@mui/material'
import { positions, style } from "@mui/system";
import {Select, MenuItem} from "@mui/material";



const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },

  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title" >Zone Wise</div>
      <div className="titles">ASN Lifecycle</div>
      <div className="compactgraph"> Compact Graph <Switch inputProps={{ 'aria-label': 'Switch A'}} /> </div>
    
      <select className="selects">
        <MenuItem value={1}>ASB Approval</MenuItem>
        <MenuItem value={2}>ASB Not Approval</MenuItem>
      </select>

      
      <ResponsiveContainer width="10%" height="80%">
        <BarChart width={100} height={100} data={data}>
          <Bar dataKey="uv" fill=" #A020F0" />
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  );
  
};

export default Chart;

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function MyChart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const [list, setList] = useState([302, 199, 209, 694, 249, 495, 300]);
    const API_URL = "http://localhost:5000/evChart";
    const data = {
        labels: list.map(x => x.local),
        datasets: [
            {
                label: 'Dataset 1',
                data: list.map(x => x.count),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    let config = {
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        }
    };
    function getData(){
        Axios.post(
            API_URL,
            config
        ).then((res) =>{
            console.log(res);
            setList(res.data);
        });
    }

    useEffect(() => { //최초 한번만 호출하기 위해 사용함!
        getData();
    },[]);
    
    return <Bar options={options} data={data} />;
}
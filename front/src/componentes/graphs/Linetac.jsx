import {Line} from 'react-chartjs-2';


import {
    Chart as 
    chartjs, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend,
    
    } from 'chart.js';

chartjs.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend    
);



export const LineGraph =()=>{

    const options ={
        scales:{
            x: {
                display: false, 
              },
              y: {
                display: false,
              },
        }
    };

    const data={
 

        labels: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio','agosto','septiembre','octubre','noviembre','diciembre'],
        datasets: [
            {
                label: 'Actos inseguros',
                data: [65, 59, 80, 81, 56, 55, 40, 50,90,100,60,69],
                fill: false,
                borderColor: 'rgb(0, 123, 255)',
                tension: 0.1
            },

            {
                label: 'Condiciones inseguras',
                data: [68, 109, 60, 181, 26, 85, 140, 180,190,100,60,99],
                fill: false,
                borderColor: 'rgb(108, 117, 125)',
                tension: 0.1
            }
        ]
    };

    return(
        <div className="section section3">
            <div className='chart'>
                <h2>Gráfica total de registros</h2>
                <Line options={options} data={data} />
        </div>
        </div>

    );
};


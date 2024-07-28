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



export const LineGraph2 =()=>{

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
 

        labels: ['Producción','Mantenimiento','CEDI','Materias primas'],
        datasets: [
            {
                label: 'Actos inseguros',
                data: [65, 59, 80, 81],
                fill: false,
                borderColor: 'rgb(0, 123, 255)',
                tension: 0.1
            },

            {
                label: 'Condiciones inseguras',
                data: [68, 109, 60, 181],
                fill: false,
                borderColor: 'rgb(108, 117, 125)',
                tension: 0.1
            }
        ]
    };

    return(
        <div className="section section5">
            <div className='chart'>
                <h2>Gráfica áreas </h2>
                <Line options={options} data={data} />
        </div>
        </div>

    );
};


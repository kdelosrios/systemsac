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



export const LineGraph1 =()=>{

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
 

        labels: ['Físicos','Químicos','Biologicos','Biomecánicos','Psicosocial','Condiciones de Seguridad','Eléctrico','Mecánicos'],
        datasets: [
            {
                label: 'Actos inseguros',
                data: [109, 159, 180, 181, 156, 155, 140, 150,190,100,160,169],
                fill: false,
                borderColor: 'rgb(0, 123, 255)',
                tension: 0.1
            },

            {
                label: 'Condiciones inseguras',
                data: [168, 109, 160, 181, 126, 185, 140, 180,190,100,160,199],
                fill: false,
                borderColor: 'rgb(108, 117, 125)',
                tension: 0.1
            }
        ]
    };

    return(
        <div className="section section4">
            <div className='chart'>
                <h2>Gráfica peligros</h2>
                <Line options={options} data={data} />
        </div>
   </div>



    ) 
};


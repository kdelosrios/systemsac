import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);


const blueGrayColors = [
    '#003f5c', 
    '#2f4b7c', 
    '#7a8b8c', 
    '#a2b9bc', 
    '#d0d0d0', 
    '#b0b0b0', 
    '#8a8a8a', 
    '#6e6e6e', 
];

const commonOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false, // Oculta la leyenda externa
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    return `${tooltipItem.label}: ${tooltipItem.raw}`;
                }
            }
        }
    }
};

export const Chartc = () => {
    const data = {
        labels: [
            'Equipos sin guardas',
            'Áreas peligrosas sin restricción',
            'Iluminación deficiente',
            'Ventilación inadecuada',
            'Pisos resbaladizos o en mal estado',
            'Falta de señalización de peligro',
            'Almacenamiento inadecuado de sustancias o materiales',
            'Falta de mantenimiento de equipos',
            'Ruido Excesivo'
        ],
        datasets: [
            {
                label: 'Condiciones Inseguras',
                data: [10, 15, 20, 8, 12, 5, 18, 22, 14], // Datos ficticios
                backgroundColor: blueGrayColors,
                borderColor: '#ffffff',
                borderWidth: 1,
            }
        ]
    };

    return (
        <div className="section section6">
            <div className='chart-container2'>
                <h2>Características de las condiciones inseguras</h2>
                <Pie data={data} options={commonOptions} />
            </div>
        </div>
    );
};
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios para Chart.js
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

// Paleta de colores en tonos de azul y gris
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

// Opciones comunes para el gráfico
const commonOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false, // Oculta la leyenda externa
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    return `${tooltipItem.label}: ${tooltipItem.formattedValue}`; // Usa formattedValue para mostrar valores formateados
                }
            }
        }
    }
};

export const Charta = () => {
    const data = {
        labels: [
            'No uso de EPP',
            'Ingreso a zonas restringidas',
            'Manipulación incorrecta de equipos',
            'Ignorar procedimientos de seguridad',
            'Postura y movimientos incorrectos',
            'Falta de atención o concentración',
            'Uso inadecuado de herramientas',
            'Uso inseguro de sustancias o materiales'
        ],
        datasets: [
            {
                label: 'Actos Inseguros',
                data: [15, 20, 10, 5, 10, 8, 12, 20], // Datos ficticios
                backgroundColor: blueGrayColors,
                borderColor: '#ffffff',
                borderWidth: 1,
            }
        ]
    };

    return (
        <div className="section section5">
            <div className='chart-container1'>
                <h2>Caracteristicas de los actos inseguros</h2>
                <Pie data={data} options={commonOptions} />
            </div>
        </div>
    );
};
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { getActs } from '../../actions/actActions';

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
    '#6e6e6e'
];

const commonOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    return `${tooltipItem.label}: ${tooltipItem.formattedValue}`;
                }
            }
        }
    }
};

export const Charta = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Distribución de Características de Actos',
                data: [],
                backgroundColor: blueGrayColors,
                borderColor: '#ffffff',
                borderWidth: 1,
            }
        ]
    });

    const { acts, Loading, Error } = useSelector(state => state.acts || {});

    useEffect(() => {
        dispatch(getActs());
    }, [dispatch]);

    useEffect(() => {
        if (Array.isArray(acts) && acts.length > 0) {
            console.log('Actos:', acts);

            const characteristicsCount = {
                'No uso de EPP': 0,
                'Ingreso a zonas restringidas': 0,
                'Manipulación incorrecta de equipos': 0,
                'Ignorar procedimientos de seguridad': 0,
                'Postura y movimientos incorrectos': 0,
                'Falta de atención o concentración': 0,
                'Uso inadecuado de herramientas': 0,
                'Uso inseguro de sustancias o materiales': 0
            };

            acts.forEach(act => {
                if (Array.isArray(act.caracteristicas)) {
                    act.caracteristicas.forEach(characteristic => {
                        if (characteristicsCount[characteristic] !== undefined) {
                            characteristicsCount[characteristic]++;
                        }
                    });
                }
            });

            setData({
                labels: Object.keys(characteristicsCount),
                datasets: [
                    {
                        label: 'Distribución de Características de Actos',
                        data: Object.values(characteristicsCount),
                        backgroundColor: blueGrayColors,
                        borderColor: '#ffffff',
                        borderWidth: 1,
                    }
                ]
            });
        }
    }, [acts]);

    if (Loading) return <p>Loading...</p>;
    if (Error) return <p>Error: {Error}</p>;

    console.log('Data:', data);

    return (
        <div className="section section6">
            <div className='chart-container1'>
                <h2>Características de los actos inseguros</h2>
                <Pie data={data} options={commonOptions} />
            </div>
        </div>
    );
};
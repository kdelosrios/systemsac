import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { getConditions } from '../../actions/conditionActions';
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

export const Chartc = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Distribución de características de condiciones',
                data: [],
                backgroundColor: blueGrayColors,
                borderColor: '#ffffff',
                borderWidth: 1,
            }
        ]
    });

    const { conditions, loading: conditionsLoading, error: conditionsError } = useSelector(state => state.conditions || {});

    useEffect(() => {
        dispatch(getConditions());
    }, [dispatch]);

    useEffect(() => {
        if (Array.isArray(conditions) && conditions.length > 0) {
            console.log('Conditions:', conditions);

            // Conteo de características de las condiciones
            const characteristicsCount = {
                'Equipos sin guardas': 0,
                'Áreas peligrosas sin restricción': 0,
                'Iluminación deficiente': 0,
                'Ventilación inadecuada': 0,
                'Pisos resbaladizos o en mal estado': 0,
                'Falta de señalización de peligro': 0,
                'Almacenamiento inadecuado de sustancias o materiales': 0,
                'Falta de mantenimiento de equipos': 0,
                'Ruido Excesivo': 0
            };

            conditions.forEach(condition => {
                if (Array.isArray(condition.caracteristicas)) {
                    condition.caracteristicas.forEach(characteristic => {
                        if (characteristicsCount[characteristic] !== undefined) {
                            characteristicsCount[characteristic]++;
                        }
                    });
                }
            });

            console.log('Characteristics Count:', characteristicsCount);

            setData({
                labels: Object.keys(characteristicsCount),
                datasets: [
                    {
                        label: 'Distribución de Características de Condiciones',
                        data: Object.values(characteristicsCount),
                        backgroundColor: blueGrayColors,
                        borderColor: '#ffffff',
                        borderWidth: 1,
                    }
                ]
            });
        }
    }, [conditions]);

    if (conditionsLoading) return <p>Loading...</p>;
    if (conditionsError) return <p>Error: {conditionsError}</p>;

    console.log('Data:', data);

    return (
        <div className="section section5">
            <div className='chart-container1'>
                <h2>Características de las Condiciones Inseguras</h2>
                <Pie data={data} options={commonOptions} />
            </div>
        </div>
    );
};
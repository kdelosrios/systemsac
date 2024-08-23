import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getActs } from '../../actions/actActions';
import { getConditions } from '../../actions/conditionActions';
import { useEffect } from 'react';
import {
    Chart as chartjs,
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

export const LineGraph2 = () => {
    const dispatch = useDispatch();
    const { acts, loading: actsLoading, error: actsError } = useSelector(state => state.acts);
    const { conditions, loading: conditionsLoading, error: conditionsError } = useSelector(state => state.conditions);

    useEffect(() => {
        dispatch(getActs());
        dispatch(getConditions());
    }, [dispatch]);

    const areaCounts = {
        producción: 0,
        mantenimiento: 0,
        CEDI: 0,
        'materias primas': 0
    };

    const areaCountsC = {
        producción: 0,
        mantenimiento: 0,
        CEDI: 0,
        'materias primas': 0
    };

    // Contar los actos inseguros por área
    acts.forEach(act => {
        const areas = act.area; // Suponiendo que área es una lista
        areas.forEach(area => {
            if (typeof area === 'string' && areaCounts[area.toLowerCase()] !== undefined) {
                areaCounts[area.toLowerCase()]++;
            } else {
                
            }
        });
    });

    // Contar las condiciones inseguras por área
    conditions.forEach(condition => {
        const areas = condition.area; // Suponiendo que área es una lista
        areas.forEach(area => {
            if (typeof area === 'string' && areaCountsC[area.toLowerCase()] !== undefined) {
                areaCountsC[area.toLowerCase()]++;
            } else {
                
            }
        });
    });

   
    const options = {
        scales: {
            x: {
                display: false,
                
            },
            y: {
                display: false,
                
            },
        }
    };
    
    const data = {
        labels: Object.keys(areaCounts),
        datasets: [
            {
                label: 'Actos inseguros',
                data: Object.values(areaCounts),
                fill: true, // Llena el área debajo de la línea
                backgroundColor: 'rgba(0, 123, 255, 0.2)', // Color de fondo de la línea
                borderColor: 'rgb(0, 123, 255)', // Color del borde de la línea
                tension: 0.1
            },
            {
                label: 'Condiciones inseguras',
                data: Object.values(areaCountsC),
                fill: true, // Llena el área debajo de la línea
                backgroundColor: 'rgba(108, 117, 125, 0.2)', // Color de fondo de la línea
                borderColor: 'rgb(108, 117, 125)', // Color del borde de la línea
                tension: 0.1
            }
        ]
    };

    // Manejo de estados de carga y error
    if (actsLoading || conditionsLoading) {
        return <p>Loading...</p>;
    }
    if (actsError || conditionsError) {
        return <p>Error: {actsError || conditionsError}</p>;
    }

    return (
        <div className="section section7">
            <div className='chart'>
                <h2>Gráfica de Áreas</h2>
                <Line options={options} data={data} />
            </div>
        </div>
    );
};
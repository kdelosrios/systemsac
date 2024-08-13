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

export const LineGraph1 = () => {
    const dispatch = useDispatch();
    const { acts, loading: actsLoading, error: actsError } = useSelector(state => state.acts);
    const { conditions, loading: conditionsLoading, error: conditionsError } = useSelector(state => state.conditions);

    useEffect(() => {
        dispatch(getActs());
        dispatch(getConditions());
    }, [dispatch]);

    const peligroCounts = {
        Físicos: 0,
        Químicos: 0,
        BarPropiológicos: 0,
        Biomecánicos: 0,
        Psicosocial: 0,
        'condiciones de seguridad': 0,
        eléctricos: 0,
        mecánicos: 0
    };

    const peligroCountsC = {
        físicos: 0,
        químicos: 0,
        biológicos: 0,
        biomecánicos: 0,
        psicosocial: 0,
        'condiciones de seguridad': 0,
        eléctrico: 0,
        mecánicos: 0
    };

    // Contar los actos inseguros por tipo de peligro
    acts.forEach(act => {
        const riesgos = act.riesgo; // Suponiendo que riesgo es una lista
        riesgos.forEach(riesgo => {
            if (typeof riesgo === 'string' && peligroCounts[riesgo.toLowerCase()] !== undefined) {
                peligroCounts[riesgo.toLowerCase()]++;
            } else {
                console.warn('Tipo inesperado de riesgo:', riesgo);
            }
        });
    });

 
    conditions.forEach(condition => {
        const riesgos = condition.riesgo; 
        riesgos.forEach(riesgo => {
            if (typeof riesgo === 'string' && peligroCountsC[riesgo.toLowerCase()] !== undefined) {
                peligroCountsC[riesgo.toLowerCase()]++;
            } else {
                console.warn('Tipo inesperado de riesgo:', riesgo);
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
        labels: Object.keys(peligroCounts),
        datasets: [
            {
                label: 'Actos inseguros',
                data: Object.values(peligroCounts),
                fill: false,
                borderColor: 'rgb(0, 123, 255)',
                tension: 0.1
            },
            {
                label: 'Condiciones inseguras',
                data: Object.values(peligroCountsC),
                fill: false,
                borderColor: 'rgb(108, 117, 125)',
                tension: 0.1
            }
        ]
    };


    if (actsLoading || conditionsLoading) {
        return <p>Loading...</p>;
    }
    if (actsError || conditionsError) {
        return <p>Error: {actsError || conditionsError}</p>;
    }

    return (
        <div className="section section4">
            <div className='chart'>
                <h2>Gráfica de peligros</h2>
                <Line options={options} data={data} />
            </div>
        </div>
    );
};
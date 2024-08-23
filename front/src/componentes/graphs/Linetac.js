import { Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getActs } from "../../actions/actActions";
import { getConditions } from "../../actions/conditionActions";
import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineGraph = () => {
  const dispatch = useDispatch();
  const {
    acts,
    loading: actsLoading,
    error: actsError,
  } = useSelector((state) => state.acts);
  const {
    conditions,
    loading: conditionsLoading,
    error: conditionsError,
  } = useSelector((state) => state.conditions);

  useEffect(() => {
    dispatch(getActs());
    dispatch(getConditions());
  }, [dispatch]);

  const monthlyCounts = Array(12).fill(0);
  const monthlyCountsc = Array(12).fill(0);

  // Actos
  acts.forEach((act) => {
    const date = new Date(act.fecha);
    const month = date.getMonth();
    if (month >= 0 && month < 12) {
      monthlyCounts[month]++;
    }
  });

  // Condiciones

  conditions.forEach((condition) => {
    const date = new Date(condition.fecha);
    const month = date.getMonth();
    if (month >= 0 && month < 12) {
      monthlyCountsc[month]++;
    }
  });

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  const data = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Actos Inseguros",
        data: monthlyCounts,
        fill: false,
        borderColor: "rgb(0, 123, 255)",
        tension: 0.1,
      },
      {
        label: "Condiciones Inseguras",
        data: monthlyCountsc,
        fill: false,
        borderColor: "rgb(108, 117, 125)",
        tension: 0.1,
      },
    ],
  };

  if (actsLoading || conditionsLoading) return <p>Loading...</p>;
  if (actsError || conditionsError)
    return <p>Error: {actsError || conditionsError}</p>;

  return (
    <div className="section section3">
      <div className="chart">
        <h2>Gráfica total de registros</h2>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

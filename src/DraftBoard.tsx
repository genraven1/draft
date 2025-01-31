import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DraftBoard = () => {
    // Step 1: Gather Data (example with hardcoded data)
    const players = [
        { name: 'Player 1', points: 90, yards: 1200 },
        { name: 'Player 2', points: 85, yards: 1100 },
        { name: 'Player 3', points: 80, yards: 1000 },
    ];

    // Step 2: Organize Data
    const playerNames = players.map(player => player.name);
    const playerRanks = players.map(player => (player.points * 0.7) + (player.yards * 0.3));

    // Step 3: Draft Board Visualization Data
    const data = {
        labels: playerNames,
        datasets: [
            {
                label: 'Player Rank',
                data: playerRanks,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default DraftBoard;

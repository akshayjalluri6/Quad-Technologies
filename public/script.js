document.addEventListener('DOMContentLoaded', async () => {
    let timer = 60;

    async function fetchData() {
        const response = await fetch('/api/tickers');
        const data = await response.json();

        const tableBody = document.querySelector('#ticker-table tbody');
        tableBody.innerHTML = ''; // Clear existing data

        data.forEach((ticker, index) => {
            const row = document.createElement('tr');

            const difference = ((ticker.sell - ticker.buy) / ticker.buy * 100).toFixed(2);
            const savings = (ticker.sell - ticker.buy).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${ticker.name}</td>
                <td>₹ ${parseFloat(ticker.last).toLocaleString('en-IN')}</td>
                <td>₹ ${parseFloat(ticker.buy).toLocaleString('en-IN')} / ₹ ${parseFloat(ticker.sell).toLocaleString('en-IN')}</td>
                <td style="color: ${difference >= 0 ? 'var(--positive-color)' : 'var(--negative-color)'};">${difference}%</td>
                <td style="color: ${difference >= 0 ? 'var(--positive-color)' : 'var(--negative-color)'};">${savings}</td>
            `;

            tableBody.appendChild(row);
        });

        timer = 60; // Reset timer after fetching data
    }

    function updateTimer() {
        const timerElement = document.getElementById('timer');
        timerElement.textContent = timer;
        if (timer > 0) {
            timer--;
        } else {
            fetchData();
        }
    }

    fetchData();
    setInterval(updateTimer, 1000); // Update timer every second
    setInterval(fetchData, 60000); // Refresh data every 60 seconds

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });
});

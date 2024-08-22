        const animeInput = document.getElementById('anime');
        const desenhosInput = document.getElementById('desenhos');
        const seriesInput = document.getElementById('series');
        const filmesInput = document.getElementById('filmes');
        const ambosInput = document.getElementById('ambos');
        const totalDisplay = document.getElementById('total');
        const statsDisplay = document.getElementById('stats');

        function updateStatistics() {
            const anime = parseInt(animeInput.value) || 0;
            const desenhos = parseInt(desenhosInput.value) || 0;
            const series = parseInt(seriesInput.value) || 0;
            const filmes = parseInt(filmesInput.value) || 0;
            const ambos = parseInt(ambosInput.value) || 0;

            const total = anime + desenhos + series + filmes + ambos;

            totalDisplay.textContent = total;

            const statistics = [
                { label: 'Anime', value: anime, className: 'anime' },
                { label: 'Desenhos Animados', value: desenhos, className: 'desenhos' },
                { label: 'Séries', value: series, className: 'series' },
                { label: 'Filmes', value: filmes, className: 'filmes' },
                { label: 'Ambos', value: ambos, className: 'ambos' },
            ];

            statsDisplay.innerHTML = '';

            statistics.forEach(stat => {
                const percentage = total > 0 ? ((stat.value / total) * 100).toFixed(2) : 0;

                const statItem = document.createElement('div');
                statItem.innerHTML = `
                    <strong>${stat.label}: ${stat.value} pessoas (${percentage}%)</strong>
                    <div class="progress-bar">
                        <div class="progress-bar-inner ${stat.className}" style="width: ${percentage}%;">
                            ${percentage}%
                        </div>
                    </div>
                `;
                statsDisplay.appendChild(statItem);
            });
        }

        animeInput.addEventListener('input', updateStatistics);
        desenhosInput.addEventListener('input', updateStatistics);
        seriesInput.addEventListener('input', updateStatistics);
        filmesInput.addEventListener('input', updateStatistics);
        ambosInput.addEventListener('input', updateStatistics);

        // Inicializa as estatísticas ao carregar a página
        updateStatistics();


function displayDriver(driverName) {
	fetch("https://raw.githubusercontent.com/tom-chapman-5/driver_data/refs/heads/main/Mercedes_drivers.json")
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then(data => {
			const driver = data.find(d => d.name === driverName);

			if (driver) {
				const driverCard = document.createElement('div');
				driverCard.classList.add('driver-card');

				driverCard.innerHTML = `
					<h2>${driver.name}</h2>
					<img src="${driver.pic}" alt="${driver.name}" width="20%">
					
					<h3>Stats</h3>
					<p>Total Seasons: ${driver.seasons}</p>
					<p>Total Wins: ${driver.wins}</p>
					<p>Total Poles: ${driver.poles}</p>
					<p>Total Races: ${driver.races}</p>
					
					<h3>Stats with Mercedes</h3>
					<p>Seasonss: ${driver.seasons_mercedes}</p>
					<p>Wins: ${driver.wins_mercedes}</p>
					<p>Poles: ${driver.poles_mercedes}</p>
					<p>Races: ${driver.races_mercedes}</p>
					
					<h3>Information</h3>
					<p>Description:</p>
					<p>${driver.description}</p>
					<p>Career:</p>
					<p>${driver.career}</p>
				`;
				
				box.appendChild(driverCard);
			}
		})
}

function deleteInfo(driverName) {
	const driverInfoDiv = document.getElementById("box");
        driverInfoDiv.innerHTML = '';
	displayDriver(driverName);
}

function displayStats() {
	const driverInfoDiv = document.getElementById("box");
        driverInfoDiv.innerHTML = '';
	const driverCard = document.createElement('div');
		driverCard.classList.add('driver-card');
	driverCard.innerHTML = `
		<h2>Stats</h2>
		<ul>
			<li style="float: none;">WDC: 9</li>
			<li style="float: none;">WCC: 8</li>
			<li style="float: none;">Race Wins: 129</li>
			<li style="float: none;">Podiums: 302</li>
			<li style="float: none;">Poles: 141</li>
			<li style="float: none;">Races: 323</li>
		</ul>
		<h2>2025 Stats</h2>
		<ul>
			<li style="float: none;">Race Wins: 0</li>
			<li style="float: none;">Poles: 1</li>
			<li style="float: none;">Sprint Wins: 0</li>
			<li style="float: none;">Points: 141</li>
			<li style="float: none;">Podiums: 4</li>
		</ul>
	`;
	box.appendChild(driverCard);
}

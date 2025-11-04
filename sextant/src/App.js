import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import AddressRequest from './components/AddressRequest';
import Latency from './components/Latency';

function App() {
	return (
		<div className="App">
		<Banner />

		<main className="dashboard-grid">
			<Exhibit title="System Status">
			<p>All systems operational.</p>
			<p>Monitoring real-time data...</p>
			</Exhibit>

			<Exhibit title="Public IPv4 Address">
			<AddressRequest ipVersion="v4" />
			</Exhibit>

			<Exhibit title="Public IPv6 Address">
			<AddressRequest ipVersion="v6" />
			</Exhibit>

			<Latency />
		</main>		
		</div>
	);
}

export default App;

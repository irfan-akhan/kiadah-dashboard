import Dashboard from "../Components/Dashboard";
import Side from "../Components/Navigator";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Doctors from "../Components/Doctors";
// import DoctorsIn from "../Components/Doctorsinactive";
import Patients from "../Components/Patients";
import Reviews from "../Components/Reviews";
import Device from "../Components/Device";
import Consultations from "../Components/Consultations";
import Blog from "../Components/Blog";
import Ads from "../Components/Advertisements";
import Notifications from "../Components/Notifications";
import Contact from "../Components/Contact";
import Coupons from "../Components/Coupons";
import Payouts from "../Components/Payouts";

function Home(props) {
	const { tab, user } = props;
	return (
		<>
			<Device />
			{user?.token && (
				<Row className="main">
					<Col xs={12} sm={2}>
						<Side />
					</Col>
					<Col xs={12} sm={10}>
						{tab === "dashboard" ? (
							<Dashboard />
						) : tab === "app" ? (
							<Consultations />
						) : tab === "doctor" ? (
							<Doctors />
						) : tab === "patient" ? (
							<Patients />
						) : tab === "ads" ? (
							<Ads />
						) : tab === "blog" ? (
							<Blog />
						) : tab === "notifications" ? (
							<Notifications />
						) : tab === "contact" ? (
							<Contact />
						) : tab === "coupons" ? (
							<Coupons />
						) : tab === "payouts" ? (
							<Payouts />
						) : (
							<Reviews />
						)}
					</Col>
				</Row>
			)}
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
		doctors: state.doctors,
		patients: state.Patients,
		user: state.user,
	};
};
export default connect(mapStateToProps)(Home);

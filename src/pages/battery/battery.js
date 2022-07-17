import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BatteryGauge from 'react-battery-gauge'
import { useContext } from 'react';
import { ElemCntx } from "../../App";

export default function Battery() {
    const {location} = useContext(ElemCntx);

    return (
        <>
            <Container>
                <Row>
                    <Col xs>
                        <h5 className="mt-2">Battery SOC</h5>
                    </Col>
                </Row>

                <Row>
                    <Col xs='6' className="mt-2 mb-2">
                       <div>
                        <b>Type of battery</b>:<br/> {location.battery_type}
                       </div>
                    </Col>
                    <Col xs='6' className="mt-2 mb-2">
                       <div>
                        <b>Temperature of battery</b>:<br/> {location.battery_temp}
                       </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                     <div id="batteryGauge">
                     <BatteryGauge value={40} animated orientation="vertical" charging={ location.status_battery_flow === 'Charging' ? true : false} />
                     </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
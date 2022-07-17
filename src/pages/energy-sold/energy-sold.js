import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChargesCntx } from "../../App";
import { useContext } from 'react';
import ConsumptionChart from "../../components/consumption-chart/consumption-chart";

export default function EnergySold() {

    const {currentSolds} = useContext(ChargesCntx);
    return (
        <>
              <Row>
                   <Col xs={12}>
                    <h5 className="mt-3">Total Solds Today</h5>
                   </Col>
                </Row>
                <Row>
                    <ConsumptionChart elms={currentSolds} xAxisType={'datetime'}/>
                </Row>
        </>
    )
}
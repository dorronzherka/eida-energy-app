import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChargesCntx } from "../../App";
import { useContext } from 'react';
import ConsumptionChart from "../../components/consumption-chart/consumption-chart";

export default function Consumption() {

    const {currentCharges} = useContext(ChargesCntx);

    return (
        <>
             <Container>
                <Row>
                   <Col xs='12'>
                    <h5 className="mt-3">Total Consumption Today kWh</h5>
                   </Col>
                </Row>
                <Row>
                    <ConsumptionChart elms={currentCharges} xAxisType={'datetime'}/>
                </Row>
            </Container>
        </>
    )
}
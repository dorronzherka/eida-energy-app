import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BoxInfo from "../../components/box-info/box-info";
import { ElemCntx } from "../../App";
import { useContext } from 'react';

export default function Home(prop) {
    const {location} = useContext(ElemCntx);
    if(location) {
        const daysLeftThisMonth = (30 - (new Date(location.inverter_update_time).getDate() + 1))
        return (
            <>
            <Container>
                <Row>
                    <BoxInfo value={parseFloat(location.consumption_total)} type='kWh' title='Total Consumption'/>
                    <BoxInfo value={parseFloat(location.daily_prod_KWH)} type='kWh' title='Total Production Today'/>
                    <BoxInfo value={parseFloat(location.daily_prod_KWH) * 7} type='kWh' title='Total Production Week'/>
                    <BoxInfo value={location.monthly_prod_KWH != null ?  parseFloat(location.monthly_prod_KWH) : parseFloat(location.daily_prod_KWH) * 30} type='kWh' title='Total Production Month'/>
                    <BoxInfo value={location.yearly_prod_KWH != null ? parseFloat(location.yearly_prod_KWH) : parseFloat(location.daily_prod_KWH) * 365} type='kWh' title='Total Production Year '/>
                    <BoxInfo value={Math.floor(parseFloat(location.consumption_total) * daysLeftThisMonth)} type='kWh' title='Forecasted consumption'/>
                    <BoxInfo value={parseFloat(location.daily_prod_KWH) * daysLeftThisMonth} type='kWh' title='Forecasted production kwh'/>
                    <BoxInfo value={parseFloat(location.total_sold_PV)} type='kWh/NOK' title='Forecasted production kwh'/>
                </Row>
            </Container>
            </>
        )
    }
    else {
        return null;
    }
}
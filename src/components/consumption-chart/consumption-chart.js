import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Col from "react-bootstrap/Col";
import {useRef} from 'react';

export default function ConsumptionChart(props) {
    const options = {
        title:{
            text:''
        },
        chart: {
            "width": 450,
            "height": 450
           
        },
        xAxis: {
            type: props.xAxisType,
            pointRange: 9999

        },
    
        series: [{
            color:'#00ba2f',
            data: props.elms
        }],
       
    };

    const chartComponent = useRef();


    
    return (
        <>
            <Col xs={12}>
                <div className='d-flex justify-content-center'>
                <HighchartsReact highcharts={Highcharts} options={options}  ref={chartComponent}/>
                </div>
            </Col>
        </>
       
    )

}
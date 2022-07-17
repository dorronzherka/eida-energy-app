import Col from "react-bootstrap/Col";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import './box-info.css'

highchartsMore(Highcharts);
solidGauge(Highcharts);

export default function BoxInfo(props) {
    const options = {
        "chart": {
            "type": "solidgauge",
            "width": 120,
            "height": 120
          },
          "title": {
            "text": null
          },
          "tooltip": {
            "enabled": false
          },
          "pane": {
            "startAngle": 0,
            "endAngle": 360,
            "background": [{
              "outerRadius": "112%",
              "innerRadius": "88%",
              "backgroundColor": "rgb(237, 238, 240)",
              "borderWidth": 0
            }]
          },
          "yAxis": {
            "min": 0,
            "max": 99999,
            "lineWidth": 0,
            "tickPositions": []
          },
          "plotOptions": {
            "solidgauge": {
              "dataLabels": {
                "enabled": true,
                "borderWidth": 0,
                "color": "#1A2C40",
                "verticalAlign": "middle",
                "y": 0,
                "style": {
                  "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif",
                  "fontSize": "18px"
                }
              },
              "linecap": "round",
              "stickyTracking": false,
              "rounded": true
            }
          },
          "series": [{
            "name": "KWH",
            "data": [{
              "color": "#00ba2f",
              "radius": "112%",
              "innerRadius": "88%",
              "y": props.value,
              
              
            }],
            "tooltip": {
                valueSuffix: ' km/h'
              },
              dataLabels: {
                format:
                  '<div style="text-align:center">' +
                  `<span style="font-size:10px;color:#00ba2f;">{y}<span style="font-size:6px;opacity:0.4;text-align:center">${props.type}</span></span><br/>` +
                  '' +
                  '</div>'
              }
          }],
          "credits": {
            "enabled": false
          },
          "loaded": true
      }
    return (
        <>
         <Col xs={6} className='text-center'>
             <p id="title">{props.title}</p>
           <div className="d-flex justify-content-center">
            <HighchartsReact  containerProps={{ style: { height: "100%" } }}highcharts={Highcharts} options={options} />
           </div>
         </Col>
        </>
    )
}
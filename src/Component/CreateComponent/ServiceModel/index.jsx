import { Col, Row } from 'antd'
import './serviceModel.scss'



function ServicesModel(props) {
    return (
        <Row>
            <Col xl={24}>
        <div className='sModelWraper'
        style={{flexDirection: `${props.flexDirection}`}}
        >
            
            <section className='imgService'>
                <img src={props.imgServices} alt="📶" />
            </section>
            <div className="imgaboutServices">
                <samp>{props.sName}</samp>
                <p>{props.about}</p>
                <code>{props.inform}</code>
            </div>
        </div>
        </Col>
        </Row>
    )
}

export default ServicesModel

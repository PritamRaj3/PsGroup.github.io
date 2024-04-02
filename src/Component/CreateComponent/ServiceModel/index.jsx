import { Col, Row } from 'antd'
import './serviceModel.scss'
import ImgHover from '../ImgHover'
import { PictureFilled } from '@ant-design/icons'



function ServicesModel(props) {
    return (
        <Row>
            <Col xl={24}>
                <div className='sModelWraper'
                    style={{ flexDirection: `${props.flexDirection}` }}
                >
                    <section className='imgService'>
                        <ImgHover height="100%" width='100%' srcImg={props.imgServices} icon={<PictureFilled />} />
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

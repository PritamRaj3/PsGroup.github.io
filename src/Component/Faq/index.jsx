import React from 'react'
import FrameBox from '../CreateComponent/FrameBox'
import { Col, Row } from 'antd';
import './faq.scss'

export default function Faq() {


  const FaaqDesign = () => {
    return (
      <>
      <div className="faqWraper">
        <Row>
          <Col xl={24}>
            <div className="headingContainer">
              <h1>Faq</h1>
              <p>Frequintly ask question</p>

            </div>
          </Col>
        </Row>
        </div>
      </>
    )
  };

  return (
    <div>
      <FrameBox bgPath='images/bg-footer.jpg' pagName='Faq' component={<FaaqDesign/>} />
    </div>
  )
}


import React, { useEffect, useState } from 'react'
import './gallery.scss';
import { Col, Row } from 'antd'
import { StarFilled, PlayCircleFilled, PictureFilled } from '@ant-design/icons';
import Gallery from '../../../galleryData';
import ImgHover from '../../CreateComponent/ImgHover'



export default function GallerySkelton() {

    const [imgData, setImgData] = useState(Gallery);

    useEffect(()=>{
        filterItem('video');
    },[]);

    const filterItem = (check) => {
        const updata = Gallery.filter((curElement) => {
            return curElement.type === check;
        });
        setImgData(updata);
    }

    return (
        <div>
            <Row>
                <Col xl={24}>
                    <div className="galleryButton">
                        <ul>
                            <li>
                                <div className="icon"><StarFilled /></div>
                                <div className="iconName" onClick={() => setImgData(Gallery)}> <strong>All</strong> Gallery</div>
                            </li>
                            <li>
                                <div className="icon"><PlayCircleFilled /></div>
                                <div className="iconName" onClick={() => filterItem('video')}><strong>Video</strong> Gallery</div>
                            </li>
                            <li>
                                <div className="icon"><PictureFilled /></div>
                                <div className="iconName" onClick={() => filterItem('image')}><strong>Photo</strong>  Gallery</div>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xl={24}>
                    <div className="galleryContainer">
                        {
                            imgData.map((element) => {
                                const { id, image, icon} = element;

                                return (
                                    <>
                                        <div className="imgContainer" id={id}>
                                            <ImgHover height="400px" width=" 350px" srcImg={image} icon={icon} />
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </Col>
            </Row>
        </div>
    )
}

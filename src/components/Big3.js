import React, { useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons/faEllipsisH";
import bleach from "../assets/image/big 3/bleach.jpg"
import naruto from "../assets/image/big 3/naruto.jpg"
import onepiece from "../assets/image/big 3/onepiece.jpg"

const Big3 = () => {
    const [showBleachDetails, setShowBleachDetails] = useState(false);
    const [showNarutoDetails, setShowNarutoDetails] = useState(false);
    const [showOnePieceDetails, setShowOnePieceDetails] = useState(false);

    const toggleBleachDetails = () => setShowBleachDetails(!showBleachDetails);
    const toggleNarutoDetails = () => setShowNarutoDetails(!showNarutoDetails);
    const toggleOnePieceDetails = () => setShowOnePieceDetails(!showOnePieceDetails);

    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">ANIME BIG 3</h1>
                <br/>
                <Row>
                    <Col md={4} className="animeWrapper" id="Big3">
                        <Card className="bg-dark text-white animeImage">
                            <Image src={bleach} alt="bleach" className="image" />
                            <Card.Title className="text-center">Bleach</Card.Title>
                            <Card.Text className=" text-left ">
                               Seorang pemuda yang memiliki yang bisa melihat hantu, dia bernama Ichigo Kurasaki secara tidak sengaja bertemu dengan seorang Shinigami.
                            </Card.Text>
                            {showBleachDetails && (
                                <Card.Text className="text-left">
                                   Shinigami bernama Rucika ini secara tidak sengaja memberikan kekuatanya ke Ichigo dan membuatnya menjadi Shinigami sementara dan akan melakukan tugas Ruchika. Apakah yang akan terjadi selanjutnya? tontonlah.
                                </Card.Text>
                            )}
                              <FontAwesomeIcon 
                                icon={faEllipsisH} 
                                onClick={toggleBleachDetails} 
                                style={{ cursor: 'pointer', fontSize: '24px' }} 
                            />

                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="animeWrapper" id="Big3" >
                        <Card className="bg-dark text-white animeImage">
                            <Image src={naruto} alt="naruto" className="image" />
                            <Card.Title className="text-center">Naruto</Card.Title>
                            <Card.Text className=" text-left ">
                               Seorang bocah berambut orange nakal yang ingin menjadi Hokage ini sangat dibenci oleh warga desa karna tingkah lakunya yang selalu jail ini
                            </Card.Text>
                            {showNarutoDetails && (
                                <Card.Text className="text-left">
                                 Memiliki nama Naruto dia ingin menjadi seorang ninja dan menduduki posisi puncak dari seorang ninja yaitu Hokage agar dia sekaku dilihat dan dihargai oleh orang lain, Apakah dia bisa mewujudkanya? dengan kondisinya sekarang?, marikita saksikan dan tonton petualanaganya.
                                </Card.Text>
                            )}
                             <FontAwesomeIcon 
                                icon={faEllipsisH} 
                                onClick={toggleNarutoDetails} 
                                style={{ cursor: 'pointer', fontSize: '24px' }} 
                            />

                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="AnimeWrapper" id="Big3">
                        <Card className="bg-dark text-white animeImage">
                            <Image src={onepiece} alt="one piece" className="image" />
                            <Card.Title className="text-center">One Piece</Card.Title>
                            <Card.Text className=" text-left ">
                                Gentong yang mengambang di Laut? bisa menghantarkan seseorang menjadi Raja Bajak laut? jangan bercanda omong kosong apa yang kau bilang?
                            </Card.Text>
                            {showOnePieceDetails && (
                                <Card.Text className="text-left">
                                    YAA dialah Luffy yang menghabiskan seluruh cadangan makananya dan tertidur didalam sebuah gentong, dia memiliki impian menjadi Raja Bajak laut, apakah dia bisa? saksikanlah dengan mata kepala kalian sendiri.
                                </Card.Text>
                            )}
                             <FontAwesomeIcon 
                                icon={faEllipsisH} 
                                onClick={toggleOnePieceDetails} 
                                style={{ cursor: 'pointer', fontSize: '24px' }} 
                            />
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Big3
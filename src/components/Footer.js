import { Container, Row, Col, Image } from "react-bootstrap"
import instagram from "../assets/image/footer/instagram.png"
import facebook from "../assets/image/footer/facebook.png"
import tiktok from "../assets/image/footer/tiktok.png"


const Footer = () => {
    return (
        <Container>
            <Row className="text-white">
                <Col>
                    <div className="text-footer">
                        <h1>Katsoja Animation</h1>
                    </div>
                    <div className="text-footer">
                        Katsoja Animation adalah website baru garapan anak smk tkj yang belum di lounching dan masih dalam tahap pengembangan, kita sebagai pengembangan website ini berharap agar website sesuai denggan harapan dan sesuai dengan moto kami yaitu "Tempat Nonton Anime ternyaman dan termudah di Akses" sekian dari kami TERIMAKASIH
                    </div>
                </Col>
                <Col>
               
                    <div className="img-div">
                        <a href="https://www.instagram.com/katsoja.animation"><Image src={instagram} alt="Instagram" className="img-footer" /></a>
                       <a href="https://www.facebook.com/profile.php?id=100080266664028&mibextid=ZbWKwL"> <Image src={facebook} alt="Facebook" className="img-footer" /> </a>
                       <a href="https://www.tiktok.com/@katsoja.animation"> <Image src={tiktok} alt="Tiktok" className="img-footer" /> </a>
                    </div>
                
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
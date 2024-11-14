import React, { useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import overload from "../assets/image/trending/overload.jpg"
import kimetsunoyaiba from "../assets/image/trending/kimetsunoyaiba.jpg"
import shangrilafrontier from "../assets/image/trending/shangrilafrontier.jpg"
import sololeveling from "../assets/image/trending/sololeveling.jpg"
import windbreaker from "../assets/image/trending/windbreaker.jpg"
import youjosenki from "../assets/image/trending/youjosenki.jpg"

const Trending = () => {
  const [showOverloadDetails, setShowOverloadDetails] = useState(false);
  const [showKimetsuDetails, setShowKimetsuDetails] = useState(false);
  const [showShangrilaDetails, setShowShangrilaDetails] = useState(false);
  const [showSoloLevelingDetails, setShowSoloLevelingDetails] = useState(false);
  const [showWindBreakerDetails, setShowWindBreakerDetails] = useState(false);
  const [showYoujoSenkiDetails, setShowYoujoSenkiDetails] = useState(false);

  const toggleOverloadDetails = () => setShowOverloadDetails(!showOverloadDetails);
  const toggleKimetsuDetails = () => setShowKimetsuDetails(!showKimetsuDetails);
  const toggleShangrilaDetails = () => setShowShangrilaDetails(!showShangrilaDetails);
  const toggleSoloLevelingDetails = () => setShowSoloLevelingDetails(!showSoloLevelingDetails);
  const toggleWindBreakerDetails = () => setShowWindBreakerDetails(!showWindBreakerDetails);
  const toggleYoujoSenkiDetails = () => setShowYoujoSenkiDetails(!showYoujoSenkiDetails);

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">ANIME TRENDING</h1>
        <br />
        <Row>
          <Col md={4} className="animeWrapper" id="Trending" >
            <Card className="bg-dark text-white animeImage">
              <Image src={overload} alt="overload" className="image"/>
              <Card.Title className="text-center">Overload</Card.Title>
              <Card.Text className=" text-left">
              sebuah MMORPG populer dijadwalkan untuk ditutup secara permanen, pemain veteran Momonga menolak untuk keluar. disaat yang sama hal mengejutkan terjadi yaitu.
              </Card.Text>
              {showOverloadDetails && (
                                <Card.Text className="text-left">
                                    Disaat itu para NPC mulai mengembangkan kepribadian dan pikiran mereka sendiri, dia memutuskan untuk menggunakan keahliannya sebagai penguasa baru dalam game. Terus saksikanlah keseruan Momonga sang pemimpin YGGDRASIL.
                                </Card.Text>
                            )}
                              <FontAwesomeIcon 
                                icon={faEllipsisH} 
                                onClick={toggleOverloadDetails} 
                                style={{ cursor: 'pointer', fontSize: '24px' }} 
                            />
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="animeWrapper" >
            <Card className="bg-dark text-white animeImage" >
              <Image src={kimetsunoyaiba} alt="kimetsu no yaiba" className="image"/>
              <Card.Title className="text-center">Kimetsu NO Yaiba</Card.Title>
              <Card.Text className=" text-left ">
                sebuah keluarga yang hidup diatas pegunungan diserang oleh sebuah Iblis, dan hanya menyisahkan 2 orang dari keluarga itu adalah Tanjiro dan Nezuko.
              </Card.Text>
              {showKimetsuDetails && (
                                <Card.Text className="text-left">
                                    Nezuko yang perlahan menjadi iblis membuat Tanjiro sang kakak ingin menyelamatkannya dengan menjadi Demon Slayer untuk menyelamatkan adiknya. Disinilah awal dari terciptanya kisah heroik pembunuh iblis yang berpetualang bersama seorang Iblis.
                                </Card.Text>
                            )}
                              <FontAwesomeIcon 
                                icon={faEllipsisH} 
                                onClick={toggleKimetsuDetails} 
                                style={{ cursor: 'pointer', fontSize: '24px' }} 
                            />
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="animeWrapper" >
            <Card className="bg-dark text-white animeImage" >
              <Image src={shangrilafrontier} alt="shangri la frontier" className="image"/>
              <Card.Title className="text-center">Shangri La Frontier</Card.Title>
              <Card.Text className=" text-left ">
                Rokuro seorang pecinta Game "Sampah" mencoba game dewa yang sangat realistis, SHANGRI LA FRONTIER ini adalah game Dewa pertama yang dimainkan olehnya.
              </Card.Text>
              {showShangrilaDetails && (
                                <Card.Text className="text-left">
                                   apakah yang terjadi pada sang pecinta game sampah ketika masuk game Dewa?
                                   apkah dia akan mendapat BUG atau dia malah mendapatkan Spesial Quest, saksikanlah setiap petualangan Rokuro setiap Minggunya
                                </Card.Text>
                            )}
                              <FontAwesomeIcon 
                                icon={faEllipsisH} 
                                onClick={toggleShangrilaDetails} 
                                style={{ cursor: 'pointer', fontSize: '24px' }} 
                            />
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="animeWrapper" >
            <Card className="bg-dark text-white animeImage" >
              <Image src={sololeveling} alt="solo leveling" className="image"/>
              <Card.Title className="text-center">Solo leveling</Card.Title>
              <Card.Text className=" text-left ">
               The weekest Hunter in the world, Sung Jinwoo menceritakan petualangan dari pria lemah disaat dunia sadang berada pada ancaman dan kematian di stetiap harinya.
              </Card.Text>
              {showSoloLevelingDetails && (
                                <Card.Text className="text-left">
                                   apakah dia bisa bertahan hidup di dunia yang keras dan penuh tantangan ini?, ataukah dia akan mati ketika berpetualang tidak ada yang tau, saksikanlah petualanaganya yang seru di setiap Minggunya
                                </Card.Text>
                            )}
                              <FontAwesomeIcon 
                                icon={faEllipsisH} 
                                onClick={toggleSoloLevelingDetails} 
                                style={{ cursor: 'pointer', fontSize: '24px' }} 
                            />
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="animeWrapper" >
            <Card className="bg-dark text-white animeImage" >
              <Image src={windbreaker} alt="wind breaker" className="image"/>
              <Card.Title className="text-center">Wind Breaker</Card.Title>
              <Card.Text className=" text-left ">
               the Brandals kid, yang ingin menjadi terkuat diantara terkuat, dan pindah ke sekolah yang memiliki murid-murid yang kuat, apakah Hakura Sakura bisa menjadi yang terkuat?
              </Card.Text>
              {showWindBreakerDetails && (
                                <Card.Text className="text-left">
                                    berada di sekolahan yang suka tawuran dan tempat para orang kuat berada, bisakah dia mewujudkan mimpinya sebagai pria terkuat?, bisakah dia menjadi oarng terkuat disekolah dan kota tersebut? saksikanlah setiap pertarunganya disetiap Minggunya.
                                </Card.Text>
                            )}
                              <FontAwesomeIcon 
                                icon={faEllipsisH} 
                                onClick={toggleWindBreakerDetails} 
                                style={{ cursor: 'pointer', fontSize: '24px' }} 
                            />
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="animeWrapper" >
            <Card className="bg-dark text-white animeImage" >
              <Image src={youjosenki} alt="youjo senki" className="image"/>
              <Card.Title className="text-center">Youjo Senki</Card.Title>
              <Card.Text className=" text-left ">
                The atheist man, yang hidup sebagi pekerja kantoran dan tidak percaya akan keberadan Tuhan,
                untuk menunbuhkan kepercayaan pada Tuhan, Tuhan memberinya Hukuman. 
              </Card.Text>
              {showYoujoSenkiDetails && (
                                <Card.Text className="text-left">
                                  yaitu dilahirkan kembali kedunia dengam wujud wanita kecil yang bernama Tanya Degurechaff, tidak hanya sampai disitu dikehidupan keduanya dia tidak memiliki orang tua dan berada di Negara yang memulai perang dunia pertama, dan menjadi prajurit termuda karna bakat sihir dan keterampilanya.

                                </Card.Text>
                            )}
                              <FontAwesomeIcon 
                                icon={faEllipsisH} 
                                onClick={toggleYoujoSenkiDetails} 
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

export default Trending
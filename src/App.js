import React, {useEffect, useState} from 'react';
import './App.css';
import IdagGreenLogo from './Graphics/Idaggreen.png';
import AfstandCorona from './Graphics/afstandcorona.png';
import HostCorona from './Graphics/hostcorona.png';
import HåndtrykCorona from './Graphics/håndtrykcorona.png';
import RengøringCorona from './Graphics/rengøringcorona.png';
import VaskCorona from './Graphics/vaskcorona.png';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FacebookShareButton, FacebookIcon, EmailShareButton, TwitterShareButton, LinkedinShareButton, EmailIcon, LinkedinIcon, TwitterIcon, FacebookMessengerIcon, FacebookMessengerShareButton} from "react-share";
import {faq_text_arr} from './Faq_text';
import {condition_text_arr} from './Condition_text';
import {CSSTransition} from 'react-transition-group';

const App = () => {

    const logo_header = ['Din platform for hurtig', <br />, 'og billig lokal levering'];
    const form_header = ['Få hjælp til indkøb', <br />, 'eller hjælp andre'];

    const collab_text = ['Idag er udviklet i samarbejde med', <br />, <a className={"link"} href="https://etilbudsavis.dk/">eTilbudsavis</a>, ', Danmarks største app', <br />, 'for tilbudsaviser og tilbud.'];

    const [showFaqResults, setShowFaqResults] = React.useState(false);
    const [showConditionResults, setShowConditionResults] = React.useState(false);
    const [showStartMenuResults, setShowStartmenuResults] = React.useState(true);
    const [showWantHelpResults, setShowWantHelpResults] = React.useState(false);
    const [showNeedHelpResults, setShowNeedHelpResults] = React.useState(false);

    const onClickFaq = () => {
        setShowFaqResults(true);
        setShowConditionResults(false);
    }
    const onClickExitFaq = () => setShowFaqResults(false);
    const onClickCondition = () => {
        setShowConditionResults(true);
        setShowFaqResults(false);
    }
    const onClickNeedHelp = () => {
        setShowStartmenuResults(false);
        setShowNeedHelpResults(true);
    }
    const onClickWantHelp = () => {
        setShowStartmenuResults(false);
        setShowWantHelpResults(true);
    }
    const onClickExitWantHelp = () => {
        setShowWantHelpResults(false);
        setShowStartmenuResults(true);
    }
    const onClickExitNeedHelp = () => {
        setShowNeedHelpResults(false);
        setShowStartmenuResults(true);
    }

    const onClickExitCondition = () => setShowConditionResults(false);

    const conditions_text = ['Når du bruger idag, accepterer', <br />, 'du vores ', <a className={"link"} onClick={onClickCondition}>betingelser.</a>];

    const ConditionResults = () => (
        <div id="results" className="faq-text-box">
            <button className={"exit-faq-button all-buttons"} onClick={onClickExitCondition}>x</button>
            <p>{condition_text_arr}</p>
        </div>
    )

    const FaqResults = () => (
        <div id="results" className="faq-text-box">
            <button className={"exit-faq-button all-buttons"} onClick={onClickExitFaq}>x</button>
            <p>{faq_text_arr}</p>
        </div>
    )

    const WantHelpResults = () => (
        <div id="results">
            <button className={"back-button all-buttons"} onClick={onClickExitWantHelp}>&#8678; Tilbage</button>
            <p className={"black-text center need-help-header"}>Hjælp andre</p>
            <p className={"center need-help-text"}>Se om der er brug for din hjælp i dag eller få besked når der er brug for den.</p>
            <form action="/action_page.php">
                <input className={"search-input all-buttons"} type="text" placeholder="Postnummer eller bynavn" name="search"/>
                <button className={"search-button all-buttons"} type="submit">Søg</button>
            </form>
            <p className={"center want-help-text"}>Eller få besked direkte på SMS, når der er opgaver i dit område</p>
            <form action="/action_page.php">
                <input className={"text-input all-buttons"} type="text" placeholder="Dit mobilnummer" name="search"/>
                <button className={"continue-to-list-button all-buttons"} type="submit">Tilmeld</button>
            </form>
        </div>
    )

    const NeedHelpResults = () => (
        <div id="results">
            <button className={"back-button all-buttons"} onClick={onClickExitNeedHelp}>&#8678; Tilbage</button>
            <p className={"black-text center need-help-header"}>Få hjælp til indkøb</p>
            <p className={"center need-help-text"}>Udfyld nedenstående felter og få din ordre afsendt med det samme.</p>
            <form action="/action_page.php">
                <input className={"name-input all-buttons"} type="text" placeholder="Fornavn" name="first_name"/>
                <input className={"name-input all-buttons"} type="text" placeholder="Efternavn" name="last_name"/>
                <input className={"text-input all-buttons"} type="text" placeholder="Leveringsadresse" name="delivery_address"/>
                <input className={"text-input all-buttons"} type="text" placeholder="Mobilnummer" name="phone_number"/>
                <button type="submit" className={"continue-to-list-button all-buttons"}>Fortsæt til indkøbsliste</button>
            </form>
        </div>
    )

    const StartMenuResults = () => (
        <div id="results">
            <p className={"black-text center form-header"}>{form_header}</p>
            <button className={"choice-button all-buttons"} onClick={onClickNeedHelp}>Jeg har brug for hjælp til indkøb</button>
            <button className={"choice-button all-buttons"} onClick={onClickWantHelp}>Jeg kan hjælpe andre i mit område</button>
            <p className={"center condition-text"}>{conditions_text}</p>
            <button className={"faq-button all-buttons"} onClick={onClickFaq}>Ofte stillede spørgsmål</button>
        </div>
    )

    return(

      <div className={"App"}>
          <div className={"top-bar"}>
          </div>
          <Container>
              <Row>
                  <Col sm className={"cols"}>
                      <div className="green-circle">
                          <img className={"top-logo left-column"} src={IdagGreenLogo} alt={"Logo"}/>
                          <p className={"black-text left-column logo-header"}>{logo_header}</p>

                          <EmailShareButton
                              url={"https://leveringidag.dk/"}
                              subject={"Idag - Få hjælp til indkøb eller hjælp andre"}
                              className={"first-socialmedia all-buttons"}>
                              <EmailIcon className={"socialmedia-icon"}/>
                          </EmailShareButton>
                          <FacebookShareButton
                              url={"https://leveringidag.dk/"}
                              quote={"Idag - Få hjælp til indkøb eller hjælp andre"}
                              hashtag="#leveringidag"
                              className={"all-buttons"}>
                              <FacebookIcon className={"socialmedia-icon"}/>
                          </FacebookShareButton>
                          <FacebookMessengerShareButton
                              url={"https://leveringidag.dk/"}
                              quote={"Idag - Få hjælp til indkøb eller hjælp andre"}
                              hashtag="#leveringidag"
                              className={"all-buttons"}>
                              <FacebookMessengerIcon className={"socialmedia-icon"}/>
                          </FacebookMessengerShareButton>
                          <TwitterShareButton
                              url={"https://leveringidag.dk/"}
                              title={"Idag - Få hjælp til indkøb eller hjælp andre"}
                              hashtag="#leveringidag"
                              className={"all-buttons"}>
                              <TwitterIcon className={"socialmedia-icon"}/>
                          </TwitterShareButton>
                          <LinkedinShareButton
                              url={"https://leveringidag.dk/"}
                              title={"Idag - Få hjælp til indkøb eller hjælp andre"}
                              className={"all-buttons"}>
                              <LinkedinIcon className={"socialmedia-icon"}  />
                          </LinkedinShareButton>

                      </div>
                  </Col>
                  <Col sm className={"cols"}>
                      <CSSTransition in={showStartMenuResults} timeout={200} classNames="faq-animate">
                          <div id="container">
                              { showStartMenuResults ? <StartMenuResults /> : null }
                          </div>
                      </CSSTransition>
                      <CSSTransition in={showNeedHelpResults} timeout={200} classNames="faq-animate">
                          <div id="container">
                              { showNeedHelpResults ? <NeedHelpResults /> : null }
                          </div>
                      </CSSTransition>
                      <CSSTransition in={showWantHelpResults} timeout={200} classNames="faq-animate">
                          <div id="container">
                              { showWantHelpResults ? <WantHelpResults /> : null }
                          </div>
                      </CSSTransition>

                  </Col>
                  <Col sm className={"cols"}>
                      <CSSTransition in={showConditionResults} timeout={200} classNames="faq-animate">
                          <div id="container">
                              { showConditionResults ? <ConditionResults /> : null }
                          </div>
                      </CSSTransition>
                      <CSSTransition in={showFaqResults} timeout={200} classNames="faq-animate">
                      <div id="container">
                          { showFaqResults ? <FaqResults /> : null }
                      </div>
                      </CSSTransition>
                  </Col>
              </Row>
          </Container>
          <div className={"bottom-section"}>
              <p className={"center collab-text"}>{collab_text}</p>
              <p className={"center corona-header"}>Pas ekstra godt på hinanden</p>
              <Container>
                  <Row>
                        <img className={"clean-icon center"} src={RengøringCorona} alt={"Logo"}/>
                        <img className={"cough-icon center"} src={HostCorona} alt={"Logo"}/>
                        <img className={"wash-icon center"} src={VaskCorona} alt={"Logo"}/>
                        <img className={"handshake-icon center"} src={HåndtrykCorona} alt={"Logo"}/>
                        <img className={"distance-icon center"} src={AfstandCorona} alt={"Logo"}/>
                  </Row>
                  <Row>
                      <p className={"corona-text center"}>Vær opmærksom på rengøring</p>
                      <p className={"corona-text center"}>Host eller nys i dit ærme</p>
                      <p className={"corona-text center"}>Vask hænder og brug håndsprit</p>
                      <p className={"corona-text center"}>Begræns den fysiske kontakt</p>
                      <p className={"corona-text center"}>Hold afstand og tag hensyn</p>
                  </Row>
              </Container>
          </div>
      </div>
    );
}

export default App;
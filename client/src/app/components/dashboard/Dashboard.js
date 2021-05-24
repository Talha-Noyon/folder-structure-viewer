import React, {Fragment, useEffect, useState} from "react";
import Card from "../styled-components/Card";
import Col from "../styled-components/Col";
import Container from "../styled-components/Container";
import DFlex from "../styled-components/DFlex";
import Margin from "../styled-components/Margin";
import Row from "../styled-components/Row";
import {Link} from "react-router-dom";
import CardBody from "../styled-components/CardBody";
import Modal from "../modal/Modal";
import axios from "../../axios/axios"
import FormControl from "../styled-components/FormControl";

export default function Dashboard() {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add a folder in ");
  const [parentFolder, setParentFolder] = useState(null);
  const [currentFolderId, setCurrentFolderId] = useState(null);
  const [folders, setFolders] = useState([]);
  
  function keepOnPage(ev) {
    console.log("keepOnPage");
    ev.preventDefault();
    ev.returnValue = '';
  }
  
  const onCreateFolder = (id, name) => {
    setShow(true);
    setModalTitle(`Add a folder in ${name}`);
  };
  useEffect(() => {
    // window.addEventListener("beforeunload", keepOnPage);
    axios.get('/folder').then((response) => {
      const {folders} = response.data;
      
      setFolders(folders);
      console.log(...folders);
    })
      .catch(err => {
        console.log(err);
      })
    return () => {
      // window.removeEventListener('beforeunload', keepOnPage);
    }
  }, []);
  
  return (
    <>
      <Modal title={modalTitle} onClose={() => setShow(false)} show={show}>
        <FormControl placeholder="folder name"></FormControl>
      </Modal>
      <Container breakpoint={`sm`}>
        <Margin axis={`y`} value={2}>
          <Card>
            <CardBody>
              <Row>
                <Col md={12}>
                  <h5>Folder Structure Viewer</h5>
                </Col>
              </Row>
              {(folders && folders.length > 0 && folders.map((item, key) => {
                return (
                  <Fragment key={key}>
                    <Row>
                      <Col sm={6}>
                        <Link to={`#`}>
                          <DFlex>
                            <Margin axis={`x`} value={1}><i className="fa fa-caret-right"/></Margin>
                            <Margin axis={`x`} value={1}>
                              <p>{item.name}</p>
                            </Margin>
                          </DFlex>
                        </Link>
                      </Col>
                      <Col sm={6}>
                        <Link to={`#`} onClick={()=>{onCreateFolder(item._id, item.name)}}>
                          <DFlex>
                            <Margin axis={`x`} value={1}><i className="fa fa-plus"/></Margin>
                            <Margin axis={`x`} value={1}>
                              <p>New</p>
                            </Margin>
                          </DFlex>
                        </Link>
                      </Col>
                    </Row>
                    {(item.childs && item.childs.length > 0 && item.childs.map((cItem, key) => {
                      return (
                        <Row key={key} style={{"marginLeft": "0.1rem"}}>
                          <Col sm={6}>
                            <Link to={`#`}>
                              <DFlex>
                                <Margin axis={`x`} value={1}><i className="fa fa-caret-right"/></Margin>
                                <Margin axis={`x`} value={1}>
                                  <p>{cItem.name}</p>
                                </Margin>
                              </DFlex>
                            </Link>
                          </Col>
                          <Col sm={6}>
                            <Link to={`#`} onClick={()=>{onCreateFolder(cItem._id, item.name)}}>
                              <DFlex>
                                <Margin axis={`x`} value={1}><i className="fa fa-plus"/></Margin>
                                <Margin axis={`x`} value={1}>
                                  <p>New</p>
                                </Margin>
                              </DFlex>
                            </Link>
                          </Col>
                        </Row>
                      )
                    }))}
                  </Fragment>
                )
              }))}
            </CardBody>
          </Card>
        </Margin>
      </Container>
    </>
  );
}

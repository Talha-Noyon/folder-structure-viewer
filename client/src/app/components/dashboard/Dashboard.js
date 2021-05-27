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
import {useSnackbar} from 'notistack';
import clsx from "clsx";

export default function Dashboard() {
  const {enqueueSnackbar} = useSnackbar();
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add a folder in ");
  const [folderName, setFolderName] = useState("");
  const [parentFolderId, setParentFolderId] = useState(null);
  const [currentFolderId, setCurrentFolderId] = useState(null);
  const [folders, setFolders] = useState([]);
  
  function keepOnPage(ev) {
    console.log("keepOnPage");
    ev.preventDefault();
    ev.returnValue = '';
  }
  
  const getFolders = () => {
    axios.get('/folder').then((response) => {
      const {folders} = response.data;
      console.log(folders);
      setFolders(folders);
    })
      .catch(err => {
        console.log(err);
      })
  };
  const onCreateFolder = (id, name) => {
    setShow(true);
    setModalTitle(`Add a folder in ${name}`);
    setParentFolderId(id);
    setFolderName("");
    console.log(id, name);
  };
  const onActiveFolder = (id, isActive) => {
    axios.put('/folder', {id, isActive})
      .then(response => {
        const {folder} = response.data;
        /*const updatedFolders = folders.map(folder => {
          if (folder._id === id) {
            folder.isActive = isActive;
          } else if (folder.childs.length > 0) {
            folder.childs.map(child => {
              if (child._id === id) {
                child.isActive = isActive;
              }
            });
          }
          return folder;
        });*/
        console.log(folder);
        // setFolders(updatedFolders);
        getFolders();
      })
  };
  const onDeleteFolder = (id) => {
    if (window.confirm("Are You Sure You Want To Delete?")) {
      axios.delete('/folder', {data: {id}})
        .then((response) => {
          setShow(false);
          getFolders();
          enqueueSnackbar('Folder Deleted', {
            variant: 'success',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
        })
        .catch(err => {
          console.log(err);
        })
    }
  };
  const FolderItem = ({folders, left = 0}) => {
    if (!folders || !folders.length) {
      return null
    }
    return folders.map(folder => (
      <Fragment key={folder._id}>
        <Row style={{"marginLeft": left + 1}}>
          <Col sm={6}>
            <Link to={`#`}>
              <DFlex style={{alignItems: "center"}}>
                <Margin axis={`x`} value={1}>
                  <DFlex style={{alignItems: "center"}} onClick={() => {
                    onActiveFolder(folder._id, !folder.isActive)
                  }}>
                    <i className={clsx("fa", {
                      "fa-caret-down": true === folder.isActive,
                      "fa-caret-right": false === folder.isActive
                    })}/>
                    <Margin axis={`x`} value={1}><span>{folder.name}</span></Margin>
                  </DFlex>
                </Margin>
                {folder && folder._parentFolder && (
                  <Margin axis={`x`} value={1}>
                    <DFlex>
                      <Margin axis={`l`} value={2}/>
                      <i onClick={() => {
                        onDeleteFolder(folder._id)
                      }} className="fa fa-trash-alt"/>
                    </DFlex>
                  </Margin>
                )}
              </DFlex>
            </Link>
          </Col>
          <Col sm={6}>
            <Link to={`#`} onClick={() => {
              onCreateFolder(folder._id, folder.name)
            }}>
              <DFlex style={{alignItems: "center"}}>
                <Margin axis={`x`} value={1}><i className="fa fa-plus"/></Margin>
                <Margin axis={`x`} value={1}>
                  <span>New</span>
                </Margin>
              </DFlex>
             </Link>
          </Col>
        </Row>
        {folder && folder.isActive && (
          <FolderItem folders={folder.childs} left={left+14}/>
        )}
      </Fragment>
    ))
  };
  const onSubmit = () => {
    console.log("onSubmit");
    console.log(folderName);
    console.log(parentFolderId);
    if (!parentFolderId || !folderName) {
      enqueueSnackbar('Type Folder Name', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    } else {
      const newFolder = {
        parentId: parentFolderId,
        name: folderName
      };
      axios.post('/folder', newFolder)
        .then((response) => {
          setShow(false);
          // const updatedFolders = folders.concat(response.data);
          // setFolders(updatedFolders);
          getFolders();
          enqueueSnackbar('Folder Created', {
            variant: 'success',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
        })
        .catch(err => {
          console.log(err);
        })
    }
    
  };
  const onKeyup = (event) => {
    setFolderName(event.target.value);
  };
  useEffect(() => {
    // window.addEventListener("beforeunload", keepOnPage);
    getFolders();
    return () => {
      // window.removeEventListener('beforeunload', keepOnPage);
    }
  }, []);
  
  return (
    <>
      <Modal title={modalTitle} onClose={() => setShow(false)} onSubmit={() => onSubmit()} show={show}>
        <FormControl placeholder="folder name" onChange={(e) => onKeyup(e)} type="text" value={folderName}/>
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
              <FolderItem folders={folders} />
            </CardBody>
          </Card>
        </Margin>
      </Container>
    </>
  );
}

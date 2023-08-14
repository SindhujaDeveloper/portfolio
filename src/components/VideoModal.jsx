import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

const VideoModal = ({ videoModal, handleVideoModalClose }) => {
  return (
    <Modal show={videoModal} id="videoModal">
      <ModalHeader>
        <ModalTitle id="exampleModalLabel">Video Modal</ModalTitle>
      </ModalHeader>
      <ModalBody>
        {/* 16:9 aspect ratio */}
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="Video"
            className="embed-responsive-item"
            src={"https://www.youtube.com/embed/DWRcNpR6Kdc"}
            id="video"
            allowScriptAccess="always"
            allow="autoplay"
          />
        </div>
      </ModalBody>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleVideoModalClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default VideoModal;

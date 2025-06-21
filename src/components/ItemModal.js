import { Modal, Button, Carousel } from 'react-bootstrap';

function ItemModal({ item, onClose }) {
  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{item.description}</p>
        <Carousel>
          <Carousel.Item>
            <img src={item.coverImage} alt="Cover" />
          </Carousel.Item>
          {item.images.map((img, i) => (
            <Carousel.Item key={i}>
              <img src={img} alt={`img-${i}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => alert("Enquiry sent")}>Enquire</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ItemModal;

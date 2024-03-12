import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <div className='pt-3'>
      <Alert show={show} variant="primary">
        <Alert.Heading>Welcome!</Alert.Heading>
        <p>
        "Welcome to our digital library! Discover a diverse collection of books spanning all genres, from classics to contemporary favorites. Enjoy affordable prices, regular updates, and an intuitive browsing experience. Start your reading adventure today!"
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-primary">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </div>
  );
}

export default Welcome;
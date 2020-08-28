import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const PhotoInfo = (props) => (
  <div>
    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Explanation
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          {props.explanation}
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default PhotoInfo;
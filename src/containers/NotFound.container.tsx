import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const NotFound: React.SFC<RouteComponentProps<{}>> = ({ staticContext }) => {
  if (staticContext) staticContext.statusCode = 404;

  return (
    <div className="CenterContainer">
      <div className="Text-Center">
        <i className="Image-NotFound" />
        <Typography variant="h3" color="inherit">
          Not Found!
        </Typography>
      </div>
    </div>
  );
};

export default withRouter(NotFound);

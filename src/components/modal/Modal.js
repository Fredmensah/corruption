import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material';

import './Modal.css';

const PrimaryModal = (props) => {
  const handleClose = () => {
    props.handleClose();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle onClose={handleClose} style={{ textAlign: 'center' }}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers style={{ textAlign: 'center' }}>
          {props.children}
        </DialogContent>
        <DialogActions>
          <div className="mx-auto">
            {props.footer}
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PrimaryModal;

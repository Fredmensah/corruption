import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import PrimaryModal from '../../../components/modal/Modal';

import './create-modal.css';
import FileUploader from '../../../components/dropzone/FileUploader';

const CreateProjectModal = ({open, handleClose, saveHandler}) => {
    
    const Footer = () => {
        return (
            <React.Fragment>
                <div className="modal-footer">
                    <Button onClick={handleClose} variant="contained" className="button-primary">Cancel</Button>
                    <Button onClick={saveHandler} variant="contained" className="button-save">Save</Button>
                </div>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <PrimaryModal
                title="Create a Project"
                footer={<Footer/>}
                open={open}
                handleClose={handleClose}
            >
                <div className='modal-root'>
                    <TextField className='text-field-primary' id="projectId" name="projectId" label="Project Id" variant="outlined" />
                    <TextField className='text-field-primary' id="projectTitle" name="projectTitle" label="Project Title" variant="outlined" />

                    <FileUploader/>
                </div>
            </PrimaryModal>
        </React.Fragment>
    )
}

export default CreateProjectModal;
import React, {useState} from 'react';
import CreateProjectModal from './components/CreateProjectModal';

const OwnerHomeView = () => {
    const [createModalState, setCreateModalState] = useState(false);

    return (
        <React.Fragment>
            <CreateProjectModal 
                open={createModalState}
                handleClose={() => setCreateModalState(false)}
            />
            <div className="owner-home-view">
                <div className="row">
                    <div onClick={() => setCreateModalState(true)} className='role-box'>Create Project</div>
                    <div onClick={undefined} className='role-box'>Generate Auditors</div>
                </div>
                <div className="row">
                    <div onClick={undefined} className='role-box'>Update Project Status</div>
                    <div onClick={undefined} className='role-box'>View a Project</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OwnerHomeView;
import '../static/css/addPost.css';

import profilePicture from '../static/img/icons/person-icon.png';
import photoIcon from '../static/img/icons/image-icon.png';
import editTextIcon from '../static/img/icons/edit.png';
import locationIcon from '../static/img/icons/map.png'

function AddPost() {
    return (
        <div>
            <section name="add post">
                <div id="addPostDiv" className="container border-bottom">
                    <div className="d-flex justify-content-between">
                        <div id="profilePictureDiv">
                            <img id="profilePicture" className="rounded-circle" src={profilePicture}  alt="protile picture"/>
                        </div>
                        <div id="addPostButtonDiv">
                            <button id="addPostButton" className="btn btn-outline-info"> 
                                Publish a state update...
                            </button>
                        </div>
                        <div id="addPhotoIconDiv">
                            <img id="addPhotoIcon" className="rounded-circle" src={photoIcon}  alt="add photo"/>
                        </div>
                    </div>
                    <div id="addPostItems" className="d-flex justify-content-around">
                        <div>
                            <img id="addPostItem1" src={editTextIcon} alt="edit text" />
                            <span>Text</span>
                        </div>
                        <div>
                            <img id="addPostItem2" src={photoIcon} alt="add photo"/>
                            <span>Photo</span>
                        </div>
                        <div>
                            <img id="addPostItem3" src={locationIcon} alt="add some location"/>
                            <span>Location</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AddPost;

import '../static/css/histories.css'
import '../static/css/offcanvas.css'

import profilePicture from '../static/img/icons/person-icon.png';
import addHistoryIcon from '../static/img/icons/add-history-icon.jpg';
import pic11 from '../static/img/uploads/pic11.jpg';
import pic22 from '../static/img/uploads/pic22.jpg';
import pic33 from '../static/img/uploads/pic33.jpg';
import pic44 from '../static/img/uploads/pic44.jpg';
import pic55 from '../static/img/uploads/pic55.jpeg';

function Histories() {
    return (
        <div>
            <section name="histories">
                <div id="navDiv" className="nav-scroller bg-white box-shadow">
                    <nav id="nav" className="nav nav-underline">
                        <div id="addHistoryDiv" className="nav-link">
                          <div id="addHistoryDiv2" className="border">
                            <img id="historyProfilePicture" src={pic33} alt="profile picture" /><br/>
                            <img id="addHistoryIcon" src={addHistoryIcon} alt="add history" />
                            <p>Add History</p>
                          </div>
                        </div>
                        <div id="navLink" className="nav-link">
                            <div>
                                <img src={pic11} alt="profile picture" />
                            </div>
                        </div>
                        <div id="navLink" className="nav-link">
                            <div>
                                <img src={pic22} alt="profile picture" />
                            </div>
                        </div>
                        <div id="navLink" className="nav-link">
                            <div>
                                <img src={pic33} alt="profile picture" />
                            </div>
                        </div>
                        <div id="navLink" className="nav-link">
                            <div>
                                <img src={pic44} alt="profile picture" />
                            </div>
                        </div>
                        <div id="navLink" className="nav-link">
                            <div>
                                <img src={pic55} alt="profile picture" />
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </div>
    );
}

export default Histories;

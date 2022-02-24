// css
import '../static/css/navbar.css';
import '../static/css/gradient.css';

// img/icons
import profileIcon from '../static/img/icons/profile-icon.jpg'
import menuIcon from '../static/img/icons/menu.png'

import homeIcon from '../static/img/icons/home.png'
import friendIcon from '../static/img/icons/friends.png'
import messageIcon from '../static/img/icons/message-icon.png'
import notifationIcon from '../static/img/icons/ringing.png'
import groupIcon from '../static/img/icons/group.png'
import pageIcon from '../static/img/icons/flag.png'

function NavBar() {
    return (
        <div>
            <section role="navbar">
                <div className="fixed-top">
                    <div id="navBar" role="topnavbar">
                        <div className="d-flex justify-content-between" >
                            <div id="divlogo" className="d-flex justify-content-start" role="logo">
                                <div role="img">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                        <circle cx="12" cy="13" r="4"></circle>
                                    </svg>
                                </div> 
                                <div role="name">
                                    <strong>
                                       <h5><strong> Postgram</strong></h5>
                                    </strong>
                                </div> 
                            </div>
                            <div className="d-flex justify-content-end">
                                <div role="profile">
                                    <img id="profileIcon" className="rounded-circle" src={profileIcon}/>
                                </div>
                                <div role="meu">
                                    <img id="menuIcon" className="rounded-circle" src={menuIcon}/>
                                </div>
                            </div>
                        </div>
                        <div id="navBottom" className="d-flex justify-content-around">
                            <div>
                                <img id="navIcon"  src={homeIcon} />
                            </div>
                            <div>
                                <img id="navIcon"  src={friendIcon} />
                            </div>
                            <div>
                                <img id="navIcon"  src={messageIcon} />
                            </div>
                            <div>
                                <img id="navIcon"  src={notifationIcon} />
                            </div>
                            <div>
                                <img id="navIcon"  src={groupIcon}/>
                            </div>
                            <div>
                                <img id="navIcon"  src={pageIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NavBar;

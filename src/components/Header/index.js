import React from "react";

let Header = () => {
    return (
        <header>
            <nav class="uk-navbar-container">
                <div class="uk-container">
                    <div uk-navbar=''>

                        <div class="uk-navbar-center">

                            <div class="uk-navbar-center-left">
                                <ul class="uk-navbar-nav">
                                    <li><a href="#">Certifications</a></li>
                                </ul>
                            </div>
                            <a class="uk-navbar-item uk-logo" href="#">Jason Lore</a>
                            <div class="uk-navbar-center-right">
                                <ul class="uk-navbar-nav">
                                    <li><a href="#">Resume</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
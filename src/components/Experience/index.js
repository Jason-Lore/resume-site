import React from "react";

let Experience = () => {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <section>
            <div class="uk-margin-medium-top">
                <ul class="uk-flex-center" uk-tab='' uk-switcher=''>
                    <li class="uk-active"><a href="/">Who I am</a></li>
                    <li><a href="/">Technical</a></li>
                    <li><a href="/">Management</a></li>
                    <li><a href="/">Customer Service</a></li>
                </ul>
                <ul class="uk-switcher uk-margin glass-pane">
                    <li>
                        <div class='white-text'>
                            <h2>Jason Lore</h2>
                            <p>I'm a highly motiviated, Technology inspired individual. My goal is to create custom solutions and environments that everyone can thrive in.</p>
                        </div>
                    </li>
                    <li>
                        <div class='white-text'>
                            <p>{year - 2020}+ years of Techncial Experience in React, PowerShell, Python, and more!</p>
                            <p>Escalations Engineer and Technical Advisor for Microsoft</p>
                            <p>Constantly Learning new Technologies and Studying new Certifications</p>
                        </div>
                    </li>
                    <li>I managed for like...2 months before my whole team was laid off</li>
                    <li>Master of blending arts</li>
                </ul>
            </div>
        </section>
    )
}

export default Experience
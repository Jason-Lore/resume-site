import React from "react";

let Experience = () => {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <section>
            <div class="uk-margin-medium-top container">
                <ul class="uk-flex-center visible-text" uk-tab='' uk-switcher=''>
                    <li class="uk-active"><a class="visible-text"href="/">Who I am</a></li>
                    <li><a href="/">Technical</a></li>
                    <li><a class="visible-text"href="/">Management</a></li>
                </ul>
                <ul class="uk-switcher uk-margin glass-pane white-text">
                    <li>
                        <div>
                            <p>My name is Jason Lore,</p>
                            <p>I am a Level 3 Microsoft365 Escalations Engineer working with Microsoft as a Partner.</p>
                            <p>My current studies are targeted towards increasing my knowledge and understanding of modern JavaScript libraries, PowerApps, Azure Services, and Machine Learning Models.</p>
                            <p>I love learning new things and facing challenges head on with creative out of the box solutions.</p>
                            <p>I went to a Coding bootcamp hosted by the University of Arizona that went over MongoDB, Express, React, Node, and Computer Science topics.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>{year - 2020}+ years of Techncial Experience in React, PowerShell, Python, and more!</p>
                            <p>Escalations Engineer and Technical Advisor for Microsoft</p>
                            <p>Constantly Learning new Technologies and Studying new Certifications</p>
                        </div>
                    </li>
                    <li>
                        <p>{year - 2020}+ years of Management experience</p>
                        <p>From managing breaks to managing complicated technical backlogs</p>
                        <p>I've seen and conquered all challenged that have come my way.</p>
                    
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Experience
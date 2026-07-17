import React from "react";

let Experience = () => {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <section>
            <div class="uk-margin-medium-top container">
                <ul class="uk-flex-center visible-text" uk-tab='' uk-switcher=''>
                    <li class="uk-active"><a class="visible-text" href="/">Who I am</a></li>
                    <li class="uk-active"><a href="/">Technical</a></li>
                    <li class="uk-active"><a class="visible-text" href="/">Management</a></li>
                </ul>
                <ul class="uk-switcher uk-margin glass-pane white-text">
                    <li>
                        <div>
                            <p>
                                My name is Jason Lore, and I'm an engineer who enjoys building the bridge between people and technology.
                            </p>

                            <p>
                                My experience spans Microsoft 365, Microsoft Copilot, Azure, automation, software development,
                                and enterprise infrastructure, with a focus on making complex systems easier to manage and more
                                efficient to operate.
                            </p>

                            <p>
                                Throughout my career I've deployed enterprise cloud solutions, developed automation using
                                Microsoft Graph API and PowerShell, and built internal tools that improve engineering workflows
                                and reduce manual effort.
                            </p>

                            <p>
                                I'm passionate about AI, cloud technologies, and building software that has a measurable impact.
                                Whether I'm solving difficult technical problems or creating new automation, I'm always looking
                                for ways to learn, improve, and build something better.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Experience
import React from "react";

const Experience = () => {
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 2020;

    return (
        <section>
            <div className="uk-margin-medium-top container">
                <ul
                    className="uk-flex-center visible-text"
                    uk-tab=""
                    uk-switcher=""
                >
                    <li className="uk-active">
                        <a className="visible-text" href="/">
                            Who I Am
                        </a>
                    </li>

                    <li>
                        <a className="visible-text" href="/">
                            Technical
                        </a>
                    </li>

                    <li>
                        <a className="visible-text" href="/">
                            Management
                        </a>
                    </li>
                </ul>

                <ul className="uk-switcher uk-margin glass-pane white-text">
                    {/* Who I Am */}
                    <li>
                        <div>
                            <p>
                                My name is Jason Lore, and I am an engineer who
                                enjoys building the bridge between people and
                                technology.
                            </p>

                            <p>
                                My experience spans Microsoft 365, Microsoft
                                Copilot, Azure, automation, software
                                development, and enterprise infrastructure. I
                                focus on making complex systems easier to
                                understand, manage, and operate.
                            </p>

                            <p>
                                Throughout my career, I have helped deploy
                                enterprise cloud solutions, created automation
                                that reduces manual work, and built internal
                                tools that improve how engineers troubleshoot
                                and support customers.
                            </p>

                            <p>
                                I am passionate about AI, cloud technologies,
                                networking, and creating solutions that have a
                                measurable impact on both businesses and the
                                people who rely on them.
                            </p>

                            <p>
                                Outside of work, I am constantly developing
                                personal projects involving web applications,
                                AI tools, automation, networking labs, game
                                development, and other emerging technologies.
                            </p>
                        </div>
                    </li>

                    {/* Technical */}
                    <li>
                        <div>
                            <p>
                                I have {yearsOfExperience}+ years of technical
                                experience supporting Microsoft cloud
                                environments, enterprise infrastructure, and
                                customer-facing technology solutions.
                            </p>

                            <p>
                                My Microsoft experience includes Microsoft 365,
                                Microsoft Copilot, Azure, Microsoft Entra ID,
                                Microsoft Teams, Microsoft Purview, Dynamics
                                365, Microsoft Graph API, Power Apps, and Power
                                Automate.
                            </p>

                            <p>
                                I have developed automation and internal tools
                                using PowerShell, JavaScript, React, Node.js,
                                Express, REST APIs, SQL, NoSQL, and other modern
                                development technologies.
                            </p>

                            <p>
                                I have also implemented security and compliance
                                solutions involving Multi-Factor
                                Authentication, Role-Based Access Control, Data
                                Loss Prevention, Zero Trust principles, and
                                HIPAA-aligned configurations.
                            </p>

                            <p>
                                My technical background includes advanced
                                troubleshooting, root-cause analysis, API
                                integrations, cloud administration, fiber-optic
                                networking, technical documentation, and
                                production incident resolution.
                            </p>

                            <p>
                                I am constantly learning new technologies,
                                building personal projects, and expanding my
                                knowledge through certifications and practical
                                hands-on experience.
                            </p>
                        </div>
                    </li>

                    {/* Management */}
                    <li>
                        <div>
                            <p>
                                I have experience leading technical operations,
                                mentoring engineers, and managing complex
                                enterprise support escalations.
                            </p>

                            <p>
                                As an engineering lead, I provided technical
                                coaching, conducted case reviews, supported
                                junior engineers, and helped teams navigate
                                difficult customer and production issues.
                            </p>

                            <p>
                                I have managed technical backlogs, prioritized
                                urgent escalations, coordinated with product
                                engineering teams, and helped establish
                                consistent support and troubleshooting
                                standards.
                            </p>

                            <p>
                                My management style focuses on clear
                                communication, practical guidance,
                                accountability, and giving team members the
                                resources they need to solve problems
                                independently.
                            </p>

                            <p>
                                I also have experience improving engineering
                                workflows, identifying process gaps, creating
                                documentation, and developing automation that
                                allows teams to work more efficiently.
                            </p>

                            <p>
                                Whether I am leading a project, mentoring an
                                engineer, or coordinating a difficult
                                escalation, I approach challenges with
                                patience, organization, and a focus on creating
                                lasting solutions.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
import React, { useState } from "react";

const Experience = () => {
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 2020;

    const [activeTab, setActiveTab] = useState("who");

    const navStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        marginBottom: "24px",
        flexWrap: "wrap",
    };

    const getTabStyle = (active) => ({
        color: "#fff",
        textDecoration: "none",
        fontWeight: active ? 600 : 500,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        textShadow: "0 2px 8px rgba(176, 176, 176, 0.75)",
        padding: "10px 18px",
        borderRadius: "999px",
        background: active
            ? "rgba(229, 228, 228, 0.53)"
            : "rgba(183, 183, 183, 0.28)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "all .2s ease",
        cursor: "pointer",
    });

    return (
        <section>
            <div className="uk-margin-medium-top container">

                <div style={navStyle}>
                    <button
                        type="button"
                        style={getTabStyle(activeTab === "who")}
                        onClick={() => setActiveTab("who")}
                    >
                        Who I Am
                    </button>

                    <button
                        type="button"
                        style={getTabStyle(activeTab === "technical")}
                        onClick={() => setActiveTab("technical")}
                    >
                        Technical
                    </button>

                    <button
                        type="button"
                        style={getTabStyle(activeTab === "management")}
                        onClick={() => setActiveTab("management")}
                    >
                        Management
                    </button>

                    <a
                        href="https://search.jasonlore.com"
                        target="_self"
                        rel="noopener noreferrer"
                        style={getTabStyle(false)}
                    >
                        My Search Engine
                    </a>
                </div>

                <div className="glass-pane white-text"></div>
                                <div className="glass-pane white-text uk-margin">
                    {activeTab === "who" && (
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
                    )}

                    {activeTab === "technical" && (
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
                    )}
                                        {activeTab === "management" && (
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
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
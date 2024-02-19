import React from "react";

import certificationData from './certifications.json'

let Certifications = () => {
    return (
        <section>
            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider='' style={{ color: "black" }}>

<<<<<<< HEAD
                <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                </ul>
=======
                <div className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                    {certificationData.certifications.map((cert, index) => (
                        <div key={index}>
                        <div class="uk-card-header">
                            <div class="uk-grid-small uk-flex-middle" uk-grid=''>
                                <div class="uk-width-auto">
                                    <img class="uk-border-circle" width="50" height="50" src={cert.msftImage} alt="Avatar" />
                                </div>
                                <div class="uk-width-expand">
                                    <h3 class="uk-card-title uk-margin-remove-bottom" style={{color: 'black'}}>{cert.certificationName}</h3>
                                    <p class="uk-text-meta uk-margin-remove-top" style={{color: 'black'}}><time datetime={cert.dateOfCompletion}>{cert.dateOfCompletion}</time></p>
                                </div>
                            </div>
                        </div>
                        <div class="uk-card-body">
                            <p style={{color: 'black'}}>{cert.msftDescription}</p>
                        </div>
                        <div class="uk-card-footer">
                            <a href={cert.linkToOnlineCert} target="_blank" class="uk-button uk-button-text" style={{color: 'black'}}>View Certification</a>
                        </div>
                    </div>
                    ))}
                </div>
>>>>>>> certifications

                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href='/' uk-slidenav-previous='' uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href='/' uk-slidenav-next='' uk-slider-item="next"></a>

            </div>
        </section>
    )
}

export default Certifications
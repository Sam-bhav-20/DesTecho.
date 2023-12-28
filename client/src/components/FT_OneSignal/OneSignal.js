import React from 'react';
import './oneSignal.css';

const CenteredContainer = ({ children }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {children}
    </div>
);

const Onesignal = () => {
    return (

            <div className="framer-1clg3y6" style={{ opacity: 1 }} data-framer-name="Desktop">
                
                <div
                    className="framer-1f2vbjs"
                    data-border="true"
                    data-framer-name="Frame 3114"
                    style={{
                        borderBottomWidth: '1px',
                        borderColor: 'black',
                        borderLeftWidth: '1px',
                        borderRightWidth: '1px',
                        borderTopWidth: '1px)',
                        borderStyle: 'solid',
                        opacity: 1,
                        borderRadius: '16px',
                      }}
                >
                    <div
                        className="framer-1jau9r"
                        style={{
                            outline: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            flexShrink: 0,
                            transform: 'none',
                            opacity: 1,
                            '--extracted-r6o4lv': 'rgb(6, 2, 24)',
                            '--framer-paragraph-spacing': '0px',
                        }}
                        data-framer-component-type="RichTextContainer"
                    >
                        <p
                            style={{
                                fontFamily: '"Manrope", serif',
                                fontSize: '28px',
                                lineHeight: '43px',
                                textAlign: 'left',
                                color: 'var(--extracted-r6o4lv)',
                            }}
                            className="framer-text"
                        >
                            “DesTecho is my go-to for hiring designers.
                            It always provides a wealth of quality candidates and instantly builds my pipeline.”
                        </p>
                    </div>
                    <div className="framer-156j1qu" data-framer-name="Frame 3110" style={{ opacity: 1 }}>
                        <div className="framer-1ehvui6" data-framer-name="Ellipse 56" style={{ opacity: 1, borderRadius: '100%' }}>
                            {/* <div style={{ position: 'absolute', borderRadius: 'inherit', top: 0, right: 0, bottom: 0, left: 0 }} data-framer-background-image-wrapper="true">
                                <img
                                    src="https://framerusercontent.com/images/lSn7CdDjdm73O1nwfrasVIfPI.png"
                                    alt=""
                                    sizes="40px"
                                    style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover', imageRendering: 'auto' }}
                                />
                            </div> */}
                        </div>
                        <div className="framer-xt7i3c" data-framer-name="Frame 3121" style={{ opacity: 1 }}>
                            <div className="framer-1y9l5eq" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none', opacity: 1 }} data-framer-component-type="RichTextContainer">
                                <p style={{ fontFamily: '"Manrope", sans-serif', fontSize: '20px', fontWeight: 600, textAlign: 'left', color: 'var(--extracted-r6o4lv)' }} className="framer-text">
                                    Lee Munroe —
                                </p>
                            </div>
                            <div className="framer-edfjeu" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none', opacity: 1, '--extracted-a0htzi': 'rgba(6, 2, 24, 0.7)' }} data-framer-component-type="RichTextContainer">
                                <p className="framer-text" style={{ fontFamily: '"Manrope", "Manrope Placeholder", sans-serif', fontSize: '20px', textAlign: 'left', color: 'var(--extracted-r6o4lv)' }}>
                                    Head of design, OneSignal
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="framer-7hgjjs" data-framer-name="Rectangle 1440" style={{ background: 'linear-gradient(rgb(59, 143, 221) 0%, rgb(255, 197, 243) 100%)', borderRadius: '16px', opacity: 1 }}>
                    <div className="framer-a31uzt" data-framer-name="Logo" style={{ filter: 'drop-shadow(rgba(0, 0, 0, 0.06) 0px 2px 4px)', transform: 'none', transformOrigin: '50% 50% 0px' }}>
                        <div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: 0 }}>
                            <img
                                src="https://framerusercontent.com/images/0L31RjtpWckX4PrYDzYPMvQRHM.png"
                                alt=""
                                sizes="100px"
                                style={{ display: 'block', width: '100%', height: 'auto', maxWidth: '100px', maxHeight: '100px', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'contain', imageRendering: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default function OneSignalComponent() {
    return (
        <CenteredContainer>
            <Onesignal />
        </CenteredContainer>
    );
}
import React from 'react'
import './last2.css';
// import DiamondTwoToneIcon from '@mui/icons-material/DiamondTwoTone';/
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
const Last2 = () => {
    return (
        <div className='div1-1divinlast2-findtalent'>
            <div className="div2-1divinlast2-findtalent col-4">
                <div className="div1inlast2-findtalent">
                    {/* <DiamondTwoToneIcon/>\ */}
                    <DiamondRoundedIcon fontSize='large'/>
                    <h4 style={{
                            fontWeight: '40px',
                            textAlign: 'left',
                            fontSize: '16px',
                            backgroundColor: '#75C4F2',
                            lineHeight: '1.4em',
                            fontSize: '20px',
                    }}>World-Class Talent</h4>
                    <p style={{
                        // fontWeight:'20px',
                        fontSize: '20px',
                    }}>From graphic design to UX/UI, our community is home to the world’s leading designers and creative agencies.</p>
                </div>
                <div className="div1inlast2-findtalent">
                    {/* <DiamondTwoToneIcon/>\ */}
                    <MonetizationOnSharpIcon fontSize='large'/>
                    <h4 style={{
                            fontWeight: '40px',
                            textAlign: 'left',
                            fontSize: '16px',
                            backgroundColor: '#F275F2',
                            lineHeight: '1.4em',
                            fontSize: '20px',
                    }}>$0 placement fees</h4>
                    <p style={{
                        // fontWeight:'20px',
                        fontSize: '20px',
                    }}>We make the hiring process as seamless and cost-effective as possible, so you can focus on building your business.</p>
                </div>
                <div className="div1inlast2-findtalent">
                    {/* <DiamondTwoToneIcon/>\ */}
                    <LocalPoliceOutlinedIcon fontSize='large'/>
                    <h4 style={{
                            fontWeight: '40px',
                            textAlign: 'left',
                            fontSize: '16px',
                            backgroundColor: '#75F2E9',
                            lineHeight: '1.4em',
                            fontSize: '20px',
                    }}>Global reach</h4>
                    <p style={{
                        // fontWeight:'20px',
                        fontSize: '20px',
                    }}>With a network of designers spanning over 170 countries, we make it easy to find world-class talent, wherever you are in the world.</p>
                </div>
            </div>
            <div className="div3-1divinlast2-findtalent" style={{ marginLeft: '0px' }}>
                <div className="videoindiv3-findtalent">
                    <img
                        src="https://framerusercontent.com/images/0TtfYwyN7iamHhWxGN9PfXLFhE.svg" alt=''
                        style={{
                            width: '107%',
                            height: '100%',
                            borderRadius: '8px',
                            display: 'block',
                            objectFit: 'cover',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            objectPosition: '50% 50%'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Last2
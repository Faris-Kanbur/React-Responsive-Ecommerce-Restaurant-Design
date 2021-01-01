import React from 'react'
import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedinIn, 
    FaYoutube,
    FaTwitter } 
    from 'react-icons/fa';

    import {
        FooterContainer,
        FooterWrap,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIcons,
        SocialIconsLink,
    } from './FooterElements';



const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconsLink href="/" target="_blank"
                            aria-label="FaceBook" rel="noopener noreferner">
                                <FaFacebook /> 
                            </SocialIconsLink>

                            <SocialIconsLink href="/" target="_blank"
                            aria-label="Instagram" rel="noopener noreferner">
                                <FaInstagram /> 
                            </SocialIconsLink>

                            <SocialIconsLink href="/" target="_blank"
                            aria-label="Youtube" rel="noopener noreferner">
                                <FaYoutube /> 
                            </SocialIconsLink>

                            <SocialIconsLink href="/" target="_blank"
                            aria-label="Twitter" rel="noopener noreferner">
                                <FaTwitter /> 
                            </SocialIconsLink>

                            <SocialIconsLink href="/" target="_blank"
                            aria-label="Linkedin" rel="noopener noreferner">
                                <FaLinkedinIn /> 
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer;

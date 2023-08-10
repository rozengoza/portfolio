import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import { GitlabOutlined, WhatsAppOutlined} from "@ant-design/icons"
import FacebookIcon from "@material-ui/icons/Facebook"

import '../styles/Footer.css'


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon onClick={() => { window.location.href = 'https://np.linkedin.com/in/rozen-shrestha-7bbab923b'; } }/>
            <GitHubIcon onClick={() => { window.location.href = 'https://github.com/rozengoza'; } }/>
            <EmailIcon onClick={() => { window.location.href = 'mailto:rozengoza22@gmail.com'; } } />
            <GitlabOutlined onClick={() => { window.location.href = 'https://gitlab.com/rozengoza'; } } />
            <FacebookIcon onClick={() => { window.location.href = 'https://facebook.com/rozengoza22'; } } />
            <WhatsAppOutlined onClick={() => { window.location.href ="//api.whatsapp.com/send?phone=9779861286313&text=Hello! This is Rozen Shrestha. Would you like to approach me for business talks?"} } />
        </div>
        <p> &copy; 2023 Rozen Shrestha</p>
    </div>
  )
}

export default Footer
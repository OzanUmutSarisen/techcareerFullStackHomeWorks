import React from 'react'
import Menu from './PageContentCom/Menu'
import Abaout from './PageContentCom/Abaout'
import ContactSection from './PageContentCom/ContactSection'

function PageContent() {
  return (
    <>
      <div className="w3-content" style={{ maxWidth: 1100 }}>
        {/* About Section */}
        <Abaout/>
        {/* Menu Section */}
        <Menu/>
        {/* Contact Section */}
        <ContactSection/>
      </div>


    </>
  )
}

export default PageContent
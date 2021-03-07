import React, {useState} from 'react'
import Modal from 'react-modal'
import {StaticQuery, graphql} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

function ModalImageComponent({image, alt}) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
    },
  }
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <div>
      <Modal ariaHideApp={false} isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        {image && <GatsbyImage image={image} style={{maxWidth: '75vw', margin: 'none'}} alt={alt} />}
      </Modal>

      {image && (
        <GatsbyImage
          onClick={() => openModal()}
          image={image}
          style={{cursor: 'zoom-in', boxShadow: `1px 1px 10px black`, borderRadius: '5px'}}
          alt={alt}
          aria-label="zoom on screenshot"
        />
      )}
    </div>
  )
}

const ModalImage = (props) => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const imagePath = data.images.edges.find((image) => image.node.relativePath === props.imagePath)
      const image = getImage(imagePath.node.childImageSharp)
      return <ModalImageComponent image={image} {...props} />
    }}
  />
)

export default ModalImage

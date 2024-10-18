import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'

function Card({ title, imageSource, text, url }) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className='overflow'>
                <img src={imageSource} alt='' className='card-img-top' />
            </div>
            <div className='card-body text-light'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>
                    {
                        text ? text : 'Lorem Non duis velit adipisicing sunt cillum tempor sunt qui officia enim nostrud in. Irure enim consectetur est excepteur culpa amet aliquip. Anim esse aliqua tempor Lore                    mollit ipsum est anim id minim cupidatat Lorem.'
                    }
                </p>
                <a href={url} className='btn btn-outline-secondary rounded-0' target='_blank' rel='noreferrer'>
                    Go to this website
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Card
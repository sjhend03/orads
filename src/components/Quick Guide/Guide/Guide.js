import React from 'react'
import './Guide.css'

function Guide({sections, name}) {
    return (
        <div className='guide'>
        {name ? (
        <div className='guide-header'>
            <h3>Guide to {name}</h3>
            <a href='#top' className='to-top-btn'>Back to Top</a>
        </div>
        ) : 'no name'}

        {sections.map(section => {
            return (
                    <div className='section'>
                        {section.description ? (
                        <div className='guide-description'>
                            {section.description.definition ? (
                            <div className='guide-defintion'>
                                <p><b>{section.description.definition.term}</b> {section.description.definition.description}</p>
                            </div>
                            ) : ''}
                            <p style={section.description.style}>{section.description.text}</p>
                        </div>
                        ) : ''}
                        {section.grid ? (
                        <div className='guide-grid' style={{'gridTemplateColumns':  `repeat(${section.columns}, 1fr)`}}>
                            {section.grid.map(cell => {
                                return (
                                    <div className='guide-grid-cell'>
                                        {cell.imgs ? (
                                            cell.imgs.map(img => <img className='grid-image' alt={img.src} src={img.src}/>)
                                        ) : ''}
                                        {cell.text ? (
                                            <p className='grid-text' style={cell.style ? cell.style : {}}>{cell.text}</p>
                                        ) : ''}
                                    </div>
                                )
                            })}
                        
                        </div>
                        ) : ''}
                    </div>
            )
        })}
        </div>
    )
}

export default Guide

/**
 * Each guide has a main header e.g question 1
 * Each guide has a grid component
 * Some guides have additional descriptions
 * Some guides have addtional grids
 * Some descriptions have a bolded component which can be called the header
 * Some descriptions have a non-bolded component which can be called the description
 * 
 * Props given to each guide should include an array called sections which will
 * separate each guide into seperate sections if needed 
 * Each section will contain a description
 * Each section will contain a grid
 * If any of these are null they will not be displayed
 * Definitions have a bolded component and a description component and will
 * be displayed with the bolded component bolded and the description as normal
 * Each description can also have a style component to display as bolded or italics
 */
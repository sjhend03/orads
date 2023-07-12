import React from 'react';
import andrea from '../../images/Andrea.jpg';
import caroline from '../../images/Caroline.jpg';
import isabelle from '../../images/Isabelle.jpg';
import maturen from '../../images/Maturen_Kate.jpg';
import elizabeth from '../../images/Sadowski E image.jpg';

function Authors() {
    return (
        <div className='authors-wrapper'>
            <h1>O-RADS MRI Calculator and Quick Guide Authors</h1>
            <div className='author-card'>
                <img alt='Dr. Elizabeth Sadowski' src={elizabeth} className='author-image' />
                <p>Dr. Elizabeth Sadowski is Professor and Director of Gynecology Imaging, Departments of Radiology and Obsterics and Gynecology, University of Wisconsin-Madison, USA</p>
            </div>
            <div className='author-card'>
                <img alt='Dr. Caroline Reinhold' src={caroline} className='author-image' />
                <p>Dr. Caroline Reinhold is Professor and Associate Chair, Department of Radiology at McGill University, Montreal, Canada</p>
            </div>
            <div className='author-card'>
                <img alt='Dr. Katherine Maturen' src={maturen} className='author-image' />
                <p>Dr. Katherine Maturen is Professor and Director of Abdominal Imaging, Departments of Radiology and Obstetrics and Gynecology, University of Michigan at Ann Arbor, USA</p>
            </div>
            <div className='author-card'>
                <img alt='Dr. Andrea Rockall' src={andrea} className='author-image' />
                <p>Dr. Andrea Rockall is Professor and Clinical Chair, Department of Radiology, Imperial College London, England</p>
            </div>
            <div className='author-card'>
                <img alt='Dr. Isabelle Thomassin-Nagarra' src={isabelle} className='author-image' />
                <p>Dr. Isabelle Thomassin-Nagarra is Professor, Department of Radiology, APHP- Sorbonne Université, Paris, France</p>
            </div>
        </div>
    )
}

export default Authors
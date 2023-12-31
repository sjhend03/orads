import React from 'react';
import andrea from '../../images/Andrea.jpg';
import caroline from '../../images/Caroline.jpg';
import isabelle from '../../images/Isabelle.jpg';
import maturen from '../../images/Maturen_Kate.jpg';
import elizabeth from '../../images/Sadowski E image.jpg';
import Author from '../Author/Author';

// List of Authors 
const AUTHORS = [
    {name: 'Dr. Elizabeth Sadowski', img: {alt: 'Dr. Elizabeth Sadowski', src: elizabeth}, description: 'Dr. Elizabeth Sadowski is Professor and Director of Gynecology Imaging, Departments of Radiology and Obsterics and Gynecology, University of Wisconsin-Madison, USA'},
    {name: 'Dr. Caroline Reinhold', img: {alt: 'Dr. Caroline Reinhold', src: caroline}, description: 'Dr. Caroline Reinhold is Professor and Associate Chair, Department of Radiology at McGill University, Montreal, Canada'},
    {name: 'Dr. Katherine Maturen', img: {alt: 'Dr. Katherine Maturen', src: maturen}, description: 'Dr. Katherine Maturen is Professor and Director of Abdominal Imaging, Departments of Radiology and Obstetrics and Gynecology, University of Michigan at Ann Arbor, USA'},
    {name: 'Dr. Andrea Rockall', img: {alt: 'Dr. Andrea Rockall', src: andrea}, description: 'Dr. Andrea Rockall is Professor and Clinical Chair, Department of Radiology, Imperial College London, England'},
    {name: 'Dr. Isabelle Thomassin-Nagarra', img: {alt: 'Dr. Isabelle Thomassin-Nagarra', src: isabelle}, description: 'Dr. Isabelle Thomassin-Nagarra is Professor, Department of Radiology, APHP- Sorbonne Université, Paris, France'}
]

function Authors() {
    return (
        <div className='authors-wrapper'>
            <h1>O-RADS MRI Calculator and Quick Guide Authors</h1>
            {AUTHORS.map(author => <Author description={author.description} img={author.img}/>)}
        </div>
    )
}

export default Authors
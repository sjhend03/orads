import React from 'react'

function Technical() {
    return (
        <div className='technical-requirements-wrapper'>
            <h3>General MRI protocol: Parameters should be adjusted for optimum image quality based on vendor and scanner type. Field of view should be adjusted to assure complete coverage of the lesion.</h3>
            <table className='technical-requirements-table'>
                <tr>
                    <th>MRI Sequence</th>
                    <th>Comments:</th>
                </tr>
                <tr>
                    <td>Sagittal T2WI without fat sat</td>
                    <td>
                            <li>Slice thickness: 4mm or less</li>
                    </td>
                </tr>
                <tr>
                    <td>Axial T2WI without fat sat</td>
                    <td>
                            <li>Slice thickness: 3mm or less</li>
                    </td>
                </tr>
                <tr>
                    <td>Axial T1WI in- and out-of-phase</td>
                    <td>
                            <li>Slice thickness: 4mm or less</li>
                    </td>
                </tr>
                <tr>
                    <td>Axial diffusion weighted images</td>
                    <td>
                            <li>Same location as T2WI</li>
                            <li>Slice thickness: 4mm or less</li>
                            <li>B-value: 1000-1200 or greater</li>
                    </td>
                </tr>
                <tr>
                    <td>DCE MRI: 3D T1WI with fat sat</td>
                    <td>
                            <li>Begin the scanning and after 1-2 phases are acquired, begin injection</li>
                            <li>Total duration after injection: 4 minutes</li>
                            <li>Slice thickness: 3mm or less</li>
                            <li>Minimal temporal resolution &lt; 15 seconds</li>
                    </td>
                </tr>
                <tr>
                    <td>Non-dynamic 3D T1WI with fat sat</td>
                    <td>
                            <li>Single phase scanned at 30-40 second after the end of the contrast injection</li>
                            <li>Slice thickness: 3mm or less</li>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Technical
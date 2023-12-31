import React from 'react'
import pic1 from '../../images/quick-guide/01 Peritoneal thickening, nodules.png';
import pic2 from '../../images/quick-guide/02 Peritoneal fluid 1.png';
import pic3 from '../../images/quick-guide/02 Peritoneal fluid 2.png';
import pic4 from '../../images/quick-guide/03 Follicle.png';
import pic5 from '../../images/quick-guide/04 Corpus luteum.png';
import pic6 from '../../images/quick-guide/05 Dermoid with thin enhancing septations.png';
import pic7 from '../../images/quick-guide/06 Dermoid with large amount.png';
import pic8 from '../../images/quick-guide/07 Left adnexal lesion that is homogenously.png';
import pic9 from '../../images/quick-guide/08 Papillary projection.png';
import pic10 from '../../images/quick-guide/09 Mural nodule.png';
import pic11 from '../../images/quick-guide/10 Irregular septation.png';
import pic12 from '../../images/quick-guide/11 Larger solid portion.png';
import pic13 from '../../images/quick-guide/12 Low risk curve.png';
import pic14 from '../../images/quick-guide/13 Intermediate risk curve.png';
import pic15 from '../../images/quick-guide/14 High risk curve.png';
import pic16 from '../../images/quick-guide/15 Less than or equal to myometrium.png';
import pic17 from '../../images/quick-guide/16 Greater than myometrium.png';
import pic18 from '../../images/quick-guide/17 Multilocular.png';
import pic19 from '../../images/quick-guide/17 Unilocular.png';
import pic20 from '../../images/quick-guide/18 Simple fluid.png';
import pic21 from '../../images/quick-guide/19 Hemorrhagic fluid.png';
import pic22 from '../../images/quick-guide/20 Endometriotic fluid.png';
import pic23 from '../../images/quick-guide/21 Proteinaceous fluid.png';
import pic24 from '../../images/quick-guide/22 Lipid containing fluid.png';
import Guide from './Guide/Guide'

const GUIDES = [
    {
        name: 'Question 1',
        sections: [
            {
                description: {text: '1. Presence of peritoneal, mesenteric or omental nodularity or irregular thickening, with or without ascites?', style: {'fontWeight': 'bold'}},
            },
            {
                description : {definition: {term: 'Peritoneal thickening', description: 'describes prominence of the peritoneal surfaces, which become discretely visible on MRI and can be smooth or irregular or have focal areas of nodularity. The presence of peritoneal, mesenteric or omental nodularity or irregular thickening can be scored as O-RADS MRI 5.'}}
            },
            {
                description : {definition: {term: 'Ascites', description: 'is defined as abdominal or pelvic fluid outside of the pouch of Douglas (ie. cul-de-sac). When there is a small amount of fluid inside the pouch of Douglas (ie. cul-de-sac), this is physiologic in nature. Ascites without peritoneal, mesenteric or omental nodularity or irregular thickening is not sufficient to score as O-RADS MRI 5.'}}
            },
            {
                grid: [
                    {text: 'Peritoneal thickening, nodules'},
                    {text: `Thickening, smooth: Uniform thickening, without focal nodularity (arrows). \n Thickening, irregularity: Non-uniform thickening or focal areas of nodularity (arrowheads).`},
                    {imgs: [{alt: 'T2', src: pic1 }]},                    
                    {text: 'Peritoneal fluid'},
                    {text: `Physiologic: Small amout of fluid inside the pouch of Douglas or cul-de-sac (arrow). \n Ascites: Fluid outside the pouch of Douglas or cul-de-sac (asterisks).`},
                    {imgs: [{alt: '?', src: pic2}, {alt: '?', src: pic3}]}
                ],
                columns: 3
            }
        ]
    },
    {
        name: 'Question 2',
        sections: [
            {
                description: {text: '2. Is the adnexal finding a follicle, corpus luteum or hemorrhagic cyst < 3 cm in a premenopausal woman?', style: {'fontWeight': 'bold'}}
            },
            {
                description: {text: 'If the patient\'s menopausal status is unknown, assume pre-menopausal if the patient is < 50 years old.', style: {'fontStyle': 'italic'}}
            },
            {
                description: {definition: {term: 'Follicles and corpus luteal cysts', description: 'are transient ovarian structures in pre-menopausal women. The size of an adnexal finding should be measured as the maximum diameter of the lesion in any plane. Follicles and corpus luteal cysts can be scored as O-RADS MRI 1.'}}
            },
            {
                description: {definition: {term: 'Hemorrhagic cysts', description: 'can result from follicles bleeding. Hemorrhagic cysts in pre-menopausal women measuring < 3cm can be scored as O-RADS MRI 1.'}}
            },
            {
                grid: [
                    {text: 'Follicle', style: {'fontWeight': 'bold'}},
                    {text: 'Simple cyst ≤ 3 cm in premenopausal age group. A follicle is hyperintense on T2WI (black asterisk), hypointense on T1WI (white asterisk) and does not enhance on post-contrast T1WI (arrow).'},
                    {imgs: [{alt: 'T2', src: pic4}]},
                    {text: 'Corpus luteum', style: {'fontWeight': 'bold'}},
                    {text: 'Cyst ≤ 3 cm, with an enhancing crenulated wall on subtracted post-contrast T1WI (arrowheads), +/- blood clot or hemorrhagic contents. (E = endometrioma)'},
                    {imgs: [{alt: 'T2', src: pic5}]}
                ],
                columns: 3
            }
        ]
    },
    {
        name: 'Question 3',
        sections: [
            {
                description: {text: '3. Is there fat associated with the lesion? Is there a large amount of solid enhancing tissue?', style: {'fontWeight': 'bold'}}
            },
            {
                description: {text: 'Benign mature teratomas or dermoids are cystic lesions that contain macroscopic fat and can be scored as O-RADS MRI 2. Dermoids can have septations or minimal enhancement of Rokitansky nodules and these findings do not upgrade the lesion to O-RADS MRI 4. However, fatty adnexal lesions that contain a large amount of enhancing soft tissue are classified as O-RADS MRI Score 4 due to risk of immature teratoma or other malignant tissue. An example of cystic lesions containing fat scored as O-RADS MRI 2 versus O-RADS MRI 4 are provided below.'}
            },
            {
                grid: [
                    {text: 'O-RADS MRI 2 Lesion', style: {'fontWeight': 'bold'}},
                    {text: 'Dermoid with thin enhancing septations and a fat-containing enhancing solid nodule in the cyst, compatible with a Rokitansky nodule (arrow).'},
                    {imgs: [{alt: 'pre-T1 fatsat', src: pic6}]},
                    {text: 'O-RADS MRI 4 Lesion', style: {'fontWeight': 'bold'}},
                    {text: 'Dermoid with a large amount of enhancing solid tissue in the wall (arrows).'},
                    {imgs: [{alt: 'pre-T1', src: pic7}]}
                ],
                columns: 3
            }
        ]
    },
    {
        name: 'Question 4',
        sections: [
            {
                description: {text: '4. Is there enhancing solid enhancing tissue in the adnexal lesion?', style: {'fontWeight': 'bold'}}
            },
            {
                description: {text: 'Solid tissue is the solid component of a lesion that exhibits post-contrast enhancement and conforms to one of the following morphologies: papillary projection, mural nodule, irregular septation/wall or a solid lesion. Smooth thin septations are NOT considered solid tissue. When the only solid tissue in the lesion is homogeneously dark signal on T2 and the high B-value diffusion weighted image, the lesion is scored as O-RADS MRI 2. If there is solid tissue within the lesion that is non-dark in signal (eg. intermediate signal), the lesion is scored according to the enhancement characteristics of the solid tissue.'}
            },
            {
                grid: [
                    {text: 'O-RADS MRI 2 Lesion', style: {'fontWeight': 'bold'}},
                    {text: 'Left adnexal lesion that is homogeneously dark on T2 and the high B-value diffusion weighted image (arrows). The normal left ovarian tissue (arrowheads) is seen at the periphery of the ovarian fibroma.'},
                    {imgs: [{alt: 'T2', src: pic8}]}
                ],
                columns: 3
            },
            {
                description: {definition: {term: 'Solid tissue:', description: 'Enhances and conforms to one of the listed morphologies'}}
            },
            {
                grid: [
                    {text: 'Papillary projection: Enhancing solid component arising from the inner/outer wall or septation of an adnexal lesion, with a branching architecture (arrows).'},
                    {imgs: [{alt: '', src: pic9}]},
                    {text: 'Mural nodule: Enhancing solid component measuring > 3mm, arising from the wall or septation of an adnexal lesion, with nodular appearance (arrows).'},
                    {imgs: [{alt: '', src: pic10}]},
                    {text: 'Irregular septation: Enhancing linear strand that runs from one internal surface of the cyst to the contralateral side (arrowheads) with focal areas of thickening.'},
                    {imgs: [{alt: '', src: pic11}]},
                    {text: 'Larger solid portion: Enhancing component (arrows) of an adnexal lesion that does not fit into the categories of papillary projection, mural nodule, or irregular septation/wall.'},
                    {imgs: [{alt: '', src: pic12}]},
                ],
                columns: 2
            },
            {
                description: {text: 'What best describes the enhancement of the solid tissue?', style: {'fontWeight': 'bold'}}
            },
            {
                description: {text: 'Enhancement is assessed on a dynamic contrast enhancement MRI (DCE MRI) acquisition or a non-dynamic contrast MRI acquisition acquired at 30-40 seconds after contrast injection. Enhancement is defined as an increase in signal intensity after intravenous gadolinium-based contrast injection.'}
            },
            {
                description: {text: 'Dynamic contrast enhancement MRI with time intensity curves', style: {'fontWeight': 'bold'}}
            },
            {
                grid: [
                    {text: 'O-RADS MRI 3 Lesion', style: {'fontWeight': 'bold'}},
                    {text: 'Low risk curve: Enhancement of the solid tissue within the adnexal lesion (A) with minimal and gradual increase in signal over time with no well-defined shoulder and no plateau. (M) = myometrium'},
                    {imgs: [{alt: '', src: pic13}]},
                    {text: 'O-RADS MRI 4 Lesion', style: {'fontWeight': 'bold'}},
                    {text: 'Intermediate risk curve: Enhancement of the solid tissue within the adnexal lesion (A) with an initial slope less than the myometrium (M), moderate increase in signal intensity with a plateau.'},
                    {imgs: [{alt: '', src: pic14}]},
                    {text: 'O-RADS MRI 5 Lesion', style: {'fontWeight': 'bold'}},
                    {text: 'High risk curve: Enhancement of the solid tissue within the adnexal lesion (A) with an initial slope greater than the myometrium (M), marked increase in signal intensity with a plateau.'},
                    {imgs: [{alt: '', src: pic15}]}
                ],
                columns: 3
            },
            {
                description: {text: 'Non-dynamic contrast enhancement at 30-40 seconds post-injection', style: {'fontWeight': 'bold'}}
            },
            {
                grid: [
                    {text: 'O-RADS MRI 4', style: {'fontWeight': 'bold'}},
                    {text: 'Less than or equal to the myometrium: Enhancement of the solid tissue within the adnexal lesion (A) is hypoenhancing to the outer myometrium (M) at 30-40 seconds post-contrast injection. (F = fibroid)'},
                    {imgs: [{alt: '', src: pic16}]},
                    {text: 'O-RADS MRI 5', style: {'fontWeight': 'bold'}},
                    {text: 'Greater than the myometrium: Enhancement of the solid tissue within the adnexal lesions (A) is equal to or greater than the outer myometrium (M) at 30-40 seconds post-contrast injection.'},
                    {imgs: [{alt: '', src: pic17}]}
                ],
                columns: 3
            },
            {
                description: {text: 'Pick the cyst type:', style: {'fontWeight': 'bold'}}
            },
            {
                grid: [
                    {text: 'Unilocular: Single locule (asterisk), with or without solid tissue. \n Multilocular: More than one locule (arrowheads); with or without solid tissue.'},
                    {imgs: [{alt: '', src: pic18}]},
                    {imgs: [{alt: '', src: pic19}]},
                ],
                columns: 3
            },
            {
                description: {text: 'Is there wall enhancement?', style: {'fontWeight': 'bold'}}
            },
            {
                description: {text: 'Enhancement is assessed on a dynamic contrast enhanced MRI (DCE MRI) acquisition or on a non-dynamic contrast MRI acquisition acquired at 30-40 seconds after contrast injection. Enhancement is defined as an increase in signal intensity after intravenous gadolinium-based contrast injection.'}
            },
            {
                description: {text: 'Is the fluid content simple or endometriotic?', style: {'fontWeight': 'bold'}}
            },
            {
                description: {text: 'The fluid within a cystic lesion can be either simple or non-simple, based on the observed signal intensity on T1 weighted images and T2 weighted images. Please see the table below for cystic fluid descriptor definitions.'}
            },
            {
                description: {text: 'Cystic lesions with simple or endometriotic fluid can be scored O-RADS MRI 2. Cystic lesions with other types of fluid are scored O-RADS MRI 3.'}
            },
            {
                description: {text: 'Cystic Fluid descriptors', style: {'fontWeight': 'bold'}}
            },
            {
                grid: [
                    {text: 'Simple fluid'},
                    {text: 'Fluid content that follows CSF or urine on all sequences: hyperintense on T2WI (black asterisk) and hypointense on T1WI (white asterisk).'},
                    {imgs: [{alt: '', src: pic20}]},
                    {text: 'Non-simple fluid'},
                    {text: 'Hemorrhagic fluid content can be variable depending on age. Late subacute hemorrhage is hyperintense on T2WI (black asterisk) and hyperintense on T1WI (white asterisk).'},
                    {imgs: [{alt: '', src: pic21}]},
                    {text: ''},
                    {text: 'Endometriotic fluid content is hypointense on T2WI (white asterisk) and hyperintense on T1WI (black asterisk).'},
                    {imgs: [{alt: '', src: pic22}]},
                    {text: ''},
                    {text: 'Proteinaceous fluid content is variable in signal on T2WI (white and black asterisks; left image) and variably hypointense on T1WI (white and black asterisks right image).'},
                    {imgs: [{alt: '', src: pic23}]},
                    {text: ''},
                    {text: 'Fat or lipid containing fluid is hyperintense on T2WI and hyperintense on T1WI (black asterisk), and loses signal on fat saturated images (white asterisk). If there is microscopic fat, there will be signal drop out on out-of-phase images and there may not be any signal loss on fat saturated images.'},
                    {imgs: [{alt: '', src: pic24}]},
                ],
                columns: 3
            },
        ]
    }
]

function Quickguide() {
    return (
        <div className='quick-guide-wrapper' >
            <section className='governing-concepts-wrapper'>
                <h2>O-RADS MRI Governing Concepts:</h2>
                <ol>
                    <li>1. O-RADS MRI assumes an average risk patient with no acute symptoms. Clinical management directed by the treating physician would
supersede management recommendations based on imaging alone.</li>
                    <li>2. Categorize patient as pre- or postmenopausal (defined as ≥ 1 year amenorrhea).</li>
                    <li>3. In case of multiple or bilateral lesions, each lesion should be separately characterized, and management will be driven by lesion with highest
score.</li>
                    <li>4. Benign mature teratomas (dermoids): Characteristic benign mature teratoma (cystic lesions that contain macroscopic fat) may be scored as
O-RADS MRI 2, due to the very low risk of malignancy. Characteristic benign mature teratomas may contain septations or minimal
enhancement of Rokitansky nodules and these findings do not upgrade the lesion to O-RADS MRI Score 4. However, fatty adnexal lesions
that contain a large amount of enhancing soft tissue are classified as O-RADS MRI Score 4 due to risk of immature teratoma or other
malignant tissue.</li>
                    <li>5. Some characteristic lesions can be confidently diagnosed on MRI regardless of the O-RADS MRI Score category. In these cases, the final
radiological diagnosis can be reported (e.g. dysgerminoma, granulosa cell tumor, lymphoma, papillary serous tumors, peritoneal pseudocyst,
etc.).</li>
                    <li>6. Dynamic contrast enhancement (DCE) with perfusion time intensity curves are preferred over non-dynamic DCE postcontrast imaging for risk
assessment. DCE time resolution should be of 15 seconds or less.</li>
                </ol>
            </section>
            <section className='definitions-wrapper'>
                <h2>O-RADS MRI Calculator Definitions:</h2>
                <ol>
                    <li>1. <b>Adnexal: </b>Involving the ovary and/or fallopian tubes.</li>
                    <li>2. <b>Lesion: </b>Portion of the ovary that is not a normal physiologic structure.</li>
                    <li>3. <b>Cystic lesion: </b>Fluid filled structure; may be unilocular or multilocular; may contain solid tissue.</li>
                    <li>4. <b>Types of fluid: </b>Simple and non-simple (hemorrhagic, endometriotic, proteinaceous, or lipid/fat containing).</li>
                    <li>5. <b>Solid tissue: </b>Non-fluid component of the lesion, which enhances on post-contrast images and conforms to one of the following morphologies: papillary projections, mural nodules, irregular septations/walls and larger solid portion. Enhancing smooth septations, non-enhancing debris and fat are not solid tissue.</li>
                    <li>6. <b>Enhancement: </b>Increase in signal intensity on T1-weighted image after contrast injection. It is important to utilize subtracted images to evaluate for enhancement in a lesion that contains any high T1 signal.</li>
                </ol>
            </section>
            <section className='guide-to-questions-wrapper'>
                <h2>Guide to the Quick Questions</h2>
                {GUIDES.map(guide => <Guide sections={guide.sections} name={guide.name} />)}
            </section>
        </div>
    )
}

export default Quickguide;
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
                ]
            }
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
                <Guide sections={GUIDES[0].sections}/>
                <h2>Guide to the Quick Questions</h2>
                <div className='question-guide'>
                    <div className='question-guide-header'>
                        <h3>Guide to Question 1</h3>
                        <a href='#top' className='to-top-btn'>Back to Top</a>
                    </div>
                    <p className='question-guide-question'><b>1. Presence of peritoneal, mesenteric or omental nodularity or irregular thickening, with or without ascites?</b></p>
                    <br />
                    <p><b>Peritoneal thickening</b> describes prominence of the peritoneal surfaces, which become discretely visible on MRI and can be smooth or irregular or have focal areas of nodularity. The presence of peritoneal, mesenteric or omental nodularity or irregular thickening can be scored as O-RADS MRI 5.</p>
                    <br />
                    <p><b>Ascites</b> is defined as abdominal or pelvic fluid outside of the pouch of Douglas (ie. cul-de-sac). When there is a small amount of fluid inside the pouch of Douglas (ie. cul-de-sac), this is physiologic in nature. Ascites without peritoneal, mesenteric or omental nodularity or irregular thickening is not sufficient to score as O-RADS MRI 5.</p>
                    <div className='question-guide-grid'>
                        <div>
                            <p>Peritoneal thickening, nodules</p>
                        </div>
                        <div>
                            <p>Thickening, smooth: Uniform thickening, without focal nodularity (arrows).</p>
                            <p>Thickening, irregularity: Non-uniform thickening or focal areas of nodularity (arrowheads).	</p>
                        </div>
                        <div>
                            <img alt='T2' src={pic1} />
                        </div>
                        <div>
                            Peritoneal fluid
                        </div>
                        <div>
                            <p>Physiologic: Small amout of fluid inside the pouch of Douglas or cul-de-sac (arrow).</p>
                            <p>Ascites: Fluid outside the pouch of Douglas or cul-de-sac (asterisks).</p>
                        </div>
                        <div>
                        <img alt='?' src={pic2} />
                            <img alt='?' src={pic3} />
                        </div>
                    </div>  
                </div>
                <div className='question-guide'>
                    <div className='question-guide-header'>
                        <h3>Guide to Question 2</h3>
                        <a href='#top' className='to-top-btn'>Back to Top</a>
                    </div>
                    <p className='question-guide-question'><b>2. Is the adnexal finding a follicle, corpus luteum or hemorrhagic cyst &lt; 3 cm in a premenopausal woman?</b></p>
                    <br />
                    <p><i>If the patient's menopausal status is unknown, assume pre-menopausal if the patient is &lt; 50 years old.</i></p>
                    <br />
                    <p><b>Follicles and corpus luteal cysts </b>are transient ovarian structures in pre-menopausal women. The size of an adnexal finding should be measured as the maximum diameter of the lesion in any plane. Follicles and corpus luteal cysts can be scored as O-RADS MRI 1.</p>
                    <br />
                    <p><b>Hemorrhagic cysts </b>can result from follicles bleeding. Hemorrhagic cysts in pre-menopausal women measuring &lt; 3cm can be scored as O-RADS MRI 1.</p>
                    <div className='question-guide-grid'>
                        <div>
                            <p><b>Follicle</b></p>
                        </div>
                        <div>
                            <p>Simple cyst &le; 3 cm in premenopausal age group. A follicle is hyperintense on T2WI (black asterisk), hypointense on T1WI (white asterisk) and does not enhance on post-contrast T1WI (arrow).</p>
                        </div>
                        <div>
                            <img alt='T2' src={pic4} />
                        </div>
                        <div>
                            <p><b>Corpus luteum</b></p>
                        </div>
                        <div>
                            <p>Cyst &le; 3 cm, with an enhancing crenulated wall on subtracted post-contrast T1WI (arrowheads), +/- blood clot or hemorrhagic contents. (E = endometrioma)</p>
                        </div>
                        <div>
                            <img alt='T2'  src={pic5} />
                        </div>
                    </div>  
                </div>
                <div className='question-guide'>
                    <div className='question-guide-header'>
                        <h3>Guide to Question 3</h3>
                        <a href='#top' className='to-top-btn'>Back to Top</a>
                    </div>
                    <p className='question-guide-question'><b>3. Is there fat associated with the lesion?  Is there a large amount of solid enhancing tissue?</b></p>
                    <br />
                    <p>Benign mature teratomas or dermoids are cystic lesions that contain macroscopic fat and can be scored as O-RADS MRI 2. Dermoids can have septations or minimal enhancement of Rokitansky nodules and these findings do not upgrade the lesion to O-RADS MRI 4. However, fatty adnexal lesions that contain a large amount of enhancing soft tissue are classified as O-RADS MRI Score 4 due to risk of immature teratoma or other malignant tissue. An example of cystic lesions containing fat scored as O-RADS MRI 2 versus O-RADS MRI 4 are provided below.</p>
                    <div className='question-guide-grid'>
                        <div>
                            <p><b>O-RADS MRI 2 Lesion</b></p>
                        </div>
                        <div>
                            <p>Dermoid with thin enhancing septations and a fat-containing enhancing solid nodule in the cyst, compatible with a Rokitansky nodule (arrow).</p>
                        </div>
                        <div>
                            <img alt='pre-T1 fatsat' src={pic6} />
                        </div>
                        <div>
                            <p><b>O-RADS MRI 4 Lesion</b></p>
                        </div>
                        <div>
                            <p>	Dermoid with a large amount of enhancing solid tissue in the wall (arrows).</p>
                        </div>
                        <div>
                            <img alt='Pre-T1' src={pic7} />
                        </div>
                    </div>  
                </div>
                <div className='question-guide'>
                    <div className='question-guide-header'>
                        <h3>Guide to Question 4</h3>
                        <a href='#top' className='to-top-btn'>Back to Top</a>
                    </div>
                    <p className='question-guide-question'></p>
                    <p><b>4. Is there enhancing solid enhancing tissue in the adnexal lesion?</b></p>
                    <br />
                    <p>Solid tissue is the solid component of a lesion that exhibits post-contrast enhancement and conforms to one of the following morphologies: papillary projection, mural nodule, irregular septation/wall or a solid lesion. Smooth thin septations are NOT considered solid tissue. When the only solid tissue in the lesion is homogeneously dark signal on T2 and the high B-value diffusion weighted image, the lesion is scored as O-RADS MRI 2. If there is solid tissue within the lesion that is non-dark in signal (eg. intermediate signal), the lesion is scored according to the enhancement characteristics of the solid tissue.</p>
                    <div className='question-guide-grid'>
                        <div>
                            <p><b>O-RADS MRI 2 Lesion</b></p>
                        </div>
                        <div>
                            <p>Left adnexal lesion that is homogeneously dark on T2 and the high B-value diffusion weighted image (arrows). The normal left ovarian tissue (arrowheads) is seen at the periphery of the ovarian fibroma.</p>
                        </div>
                        <div>
                            <img alt='T2' src={pic8} />
                        </div>
                    </div>  
                    <p><b>Solid tissue:</b> Enhances and conforms to one of the listed morphologies</p>
                    <div className='sub-question-guide-grid'>
                        <div>
                            <p>Papillary projection: Enhancing solid component arising from the inner/outer wall or septation of an adnexal lesion, with a branching architecture (arrows).</p>
                        </div>
                        <div>
                            <img alt='' src={pic9} />
                        </div>
                        <div>
                            <p>Mural nodule: Enhancing solid component measuring > 3mm, arising from the wall or septation of an adnexal lesion, with nodular appearance (arrows).</p>
                        </div>
                        <div>
                            <img alt='' src={pic10} />
                        </div>
                        <div>
                            <p>Irregular septation: Enhancing linear strand that runs from one internal surface of the cyst to the contralateral side (arrowheads) with focal areas of thickening.</p>
                        </div>
                        <div>
                            <img alt='' src={pic11} />
                        </div>
                        <div>
                            <p>Larger solid portion: Enhancing component (arrows) of an adnexal lesion that does not fit into the categories of papillary projection, mural nodule, or irregular septation/wall.</p>
                        </div>
                        <div>
                            <img alt='' src={pic12} />
                        </div>
                    </div>
                    <p><b>What best describes the enhancement of the solid tissue?</b></p>
                    <br />
                    <p>Enhancement is assessed on a dynamic contrast enhancement MRI (DCE MRI) acquisition or a non-dynamic contrast MRI acquisition acquired at 30-40 seconds after contrast injection. Enhancement is defined as an increase in signal intensity after intravenous gadolinium-based contrast injection.</p>
                    <br />
                    <p><b>Dynamic contrast enhancement MRI with time intensity curves</b></p>
                    <div className='question-guide-grid'>
                        <div>
                            <p><b>O-RADS MRI 3</b></p>
                        </div>
                        <div>
                            <p>Low risk curve: Enhancement of the solid tissue within the adnexal lesion (A) with minimal and gradual increase in signal over time with no well-defined shoulder and no plateau. (M) = myometrium</p>
                        </div>
                        <div>
                            <img alt='MA' src={pic13} />

                        </div>
                        <div>
                            <p><b>O-RADS MRI 4</b></p>
                        </div>
                        <div>
                            <p>Intermediate risk curve: Enhancement of the solid tissue within the adnexal lesion (A) with an initial slope less than the myometrium (M), moderate increase in signal intensity with a plateau.</p>
                        </div>
                        <div>
                            <img alt='MA' src={pic14} />
                        </div>
                        <div>
                            <p><b>O-RADS MRI 5</b></p>
                        </div>
                        <div>
                            <p>High risk curve: Enhancement of the solid tissue within the adnexal lesion (A) with an initial slope greater than the myometrium (M), marked increase in signal intensity with a plateau.</p>
                        </div>
                        <div>
                            <img alt='M' src={pic15} />
                        </div>
                    </div>  
                    <p><b>Non-dynamic contrast enhancement at 30-40 seconds post-injection</b></p>  
                    <div className='question-guide-grid'> 
                        <div>
                            <p><b>O-RADS MRI 4</b></p>
                        </div>
                        <div>
                            <p>Less than or equal to the myometrium: Enhancement of the solid tissue within the adnexal lesion (A) is hypoenhancing to the outer myometrium (M) at 30-40 seconds post-contrast injection. (F = fibroid)</p>
                        </div>
                        <div>
                            <img alt='MFAA' src={pic16} />
                        </div>
                        <div>
                            <p><b>O-RADS MRI 5</b></p>
                        </div>
                        <div>
                            <p>Greater than the myometrium: Enhancement of the solid tissue within the adnexal lesions (A) is equal to or greater than the outer myometrium (M) at 30-40 seconds post-contrast injection.</p>
                        </div>
                        <div>
                            <img alt='MFA' src={pic17} />
                        </div>
                    </div>
                    <p><b>Pick the cyst type:</b></p>  
                    <div className='question-guide-grid'> 
                        <div>
                            <p>Unilocular: Single locule (asterisk), with or without solid tissue.</p>
                            <p>Multilocular: More than one locule (arrowheads); with or without solid tissue.</p>
                        </div>
                        <div>
                            <img alt='MFAA' src={pic18} />
                        </div>
                        <div>
                            <img alt='MFAA' src={pic19} />
                        </div>
                    </div>
                    <p><b>Is there wall enhancement?</b></p>
                    <br />
                    <p>Enhancement is assessed on a dynamic contrast enhanced MRI (DCE MRI) acquisition or on a non-dynamic contrast MRI acquisition acquired at 30-40 seconds after contrast injection. Enhancement is defined as an increase in signal intensity after intravenous gadolinium-based contrast injection.</p>
                    <br />
                    <p><b>Is the fluid content simple or endometriotic?</b></p>
                    <br />
                    <p>The fluid within a cystic lesion can be either simple or non-simple, based on the observed signal intensity on T1 weighted images and T2 weighted images. Please see the table below for cystic fluid descriptor definitions.</p>
                    <br />
                    <p>Cystic lesions with simple or endometriotic fluid can be scored O-RADS MRI 2. Cystic lesions with other types of fluid are scored O-RADS MRI 3.</p>
                    <br />
                    <h3><b>Cystic Fluid descriptors</b></h3>
                    <div className='question-guide-grid'> 
                        <div>
                            <p>Simple fluid</p>
                        </div>
                        <div>
                            <p>Fluid content that follows CSF or urine on all sequences: hyperintense on T2WI (black asterisk) and hypointense on T1WI (white asterisk).</p>
                        </div>
                        <div>
                            <img alt='T2' src={pic20} />
                        </div>
                        <div>
                            <p>Non-simple fluid</p>
                        </div>
                        <div>
                            <p>Hemorrhagic fluid content can be variable depending on age. Late subacute hemorrhage is hyperintense on T2WI (black asterisk) and hyperintense on T1WI (white asterisk).</p>
                        </div>
                        <div>
                            <img alt='T2' src={pic21} />
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div>
                            <p>	Endometriotic fluid content is hypointense on T2WI (white asterisk) and hyperintense on T1WI (black asterisk).</p>
                        </div>
                        <div>
                            <img alt='T2' src={pic22} />
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div>
                            <p>Proteinaceous fluid content is variable in signal on T2WI (white and black asterisks; left image) and variably hypointense on T1WI (white and black asterisks right image).</p>
                        </div>
                        <div>
                            <img alt='T2' src={pic23} />
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div>
                            <p>Fat or lipid containing fluid is hyperintense on T2WI and hyperintense on T1WI (black asterisk), and loses signal on fat saturated images (white asterisk). If there is microscopic fat, there will be signal drop out on out-of-phase images and there may not be any signal loss on fat saturated images.</p>
                        </div>
                        <div>
                            <img alt='T2' src={pic24} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Quickguide;
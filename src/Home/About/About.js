import React from 'react';
import {Link} from 'react-router-dom';
import useTitle from '../../hook/useTitle';

const About = () => {
    useTitle('about');
    return (



        <div>
            <div className="container ">
                <div className='border rounded mb-5 bg-sky-200'>                   


                    <div className="all-question">
                        <div className="q-01 px-12  mx-8  ">
                            <div className='text-2xl p-2 font-semibold'>1. Introduction</div>


                            <p className='text-2xl'></p> The Website Owner, including subsidiaries and affiliates ("Website" or "Website Owner" or "we" or "us" or "our") provides the information contained on this website or any of the pages comprising the website ("website") to visitors ("visitors") (cumulatively referred to as "you" or "your" hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of this website.
                        </div>


                        <div className="q-02 px-12 mx-8">
                            <div className="text-2xl p-2 font-semibold">
                                2. Information on the Website
                            </div>

                            <p className='text-2xl'></p>
                            Whilst every effort is made to update the information contained on this website, neither the Website Owner nor any third party or data or content provider make any representations or warranties, whether express, implied in law or residual, as to the sequence, accuracy, completeness or reliability of information, opinions, any share price information, research information, data and/or content contained on the website (including but not limited to any information which may be provided by any third party or data or content providers) ("information") and shall not be bound in any manner by any information contained on the website. the Website Owner reserves the right at any time to change or discontinue without notice, any aspect or feature of this website. No information shall be construed as advice and information is offered for information purposes only and is not intended for trading purposes. You and your company rely on the information contained on this website at your own risk. If you find an error or omission at this site, please let us know.

                        </div>




                        <div className="q-03 px-12 mx-8">
                            <div className="text-2xl p-2 font-semibold">
                            3. Trade Marks
                            </div>
                            <p className='text-2xl'></p>
                            The trade marks, names, logos and service marks (collectively "trade marks") displayed on this website are registered and unregistered trade marks of the Website Owner. Nothing contained on this website should be construed as granting any licence or right to use any trade mark without the prior written permission of the Website Owner.


                        </div>

                        <div className="q-04 px-12 mx-8">
                            <div className="text-2xl p-2 font-semibold">
                            4. External Links
                            </div>
                            <p className='text-2xl'></p>
                            External links may be provided for your convenience, but they are beyond the control of the Website Owner and no representation is made as to their content. Use or reliance on any external links and the content thereon provided is at your own risk. When visiting external links you must refer to that external websites terms and conditions of use. No hypertext links shall be created from any website controlled by you or otherwise to this website without the express prior written permission of the Website Owner. Please contact us if you would like to link to this website or would like to request a link to your website.
                        </div>

                        <div className="q-04 px-12 mx-8">
                            <div className="text-2xl p-2 font-semibold">
                            6. Specific Use
                            </div>
                            <p className='text-2xl'></p>
                            You further agree not to use the website to send or post any message or material that is unlawful, harassing, defamatory, abusive, indecent, threatening, harmful, vulgar, obscene, sexually orientated, racially offensive, profane, pornographic or violates any applicable law and you hereby indemnify the Website Owner against any loss, liability, damage or expense of whatever nature which the Website Owner or any third party may suffer which is caused by or attributable to, whether directly or indirectly, your use of the website to send or post any such message or material.
                        </div>

                        <div className="q-04 px-12 mx-8">
                            <div className="text-2xl p-2 font-semibold">
                            7. Warranties
                            </div>
                            <p className='text-2xl'></p>
                            The Website Owner makes no warranties, representations, statements or guarantees (whether express, implied in law or residual) regarding the website, the information contained on the website, your or your company's personal information or material and information transmitted over our system.
                        </div>
                        <div className="q-04 px-12 mx-8">
                            <div className="text-2xl p-2 font-semibold">
                            8. Disclaimer of Liability
                            </div>
                            <p className='text-2xl'></p>
                            The Website Owner shall not be responsible for and disclaims all liability for any loss, liability, damage (whether direct, indirect or consequential), personal injury or expense of any nature whatsoever which may be suffered by you or any third party (including your company), as a result of or which may be attributable, directly or indirectly, to your access and use of the website, any information contained on the website, your or your company's personal information or material and information transmitted over our system. In particular, neither the Website Owner nor any third party or data or content provider shall be liable in any way to you or to any other person, firm or corporation whatsoever for any loss, liability, damage (whether direct or consequential), personal injury or expense of any nature whatsoever arising from any delays, inaccuracies, errors in, or omission of any share price information or the transmission thereof, or for any actions taken in reliance thereon or occasioned thereby or by reason of non-performance or interruption, or termination thereof.
                        </div>
                    </div>


                    <div className='text-center mb-5'>
                        <Link to='/'><button className="btn btn-outline btn-secondary">Go To Home</button></Link>
                    </div>
                </div>

            </div>
        </div>




    );
};

export default About;
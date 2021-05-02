import React, { Component } from 'react';
import classes from './about.module.css';
import logo from '../assus/Karen.jpg'
import HeaderCv from './HeaderCv';

class Home extends Component {




    render() {
        return (
            <div className='container my-3 border border-secondary pt-3'>
                <header className={classes.aboutSection} >
                    <div className={classes.headerCv}>
                        <div className="row">
                            <div className="col-sm-3 mt-3">
                                <div className={classes.photo}>
                                    <img src={logo} alt='' className={classes.responsive} />
                                </div>
                            </div>
                            <div className="col-sm jstfine-content-start">
                                <div>
                                    <h1 className={classes.text}>
                                        Karen Martirosyan
                                     </h1>
                                    <h6 className={classes.text}>
                                    Front End Developer
                                      </h6>
                                    <HeaderCv />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className={classes.resume}>
                    <div className="row">
                        <div className="col-sm-8 mt-3">
                            <div className={classes.colume}>
                                <div className={classes.treeFourth} >
                                    <div className={classes.objective}>
                                        <h2>Profile </h2>
                                        <p>I have nine month experience as a Front End Developer in Preezma.
                                        My professional  experience includes bringing the wireframes of the UX designer
                                        to life through  JavaScript, ES6, HTML5 and CSS3, as well as collaborating with
                                        Back End Developers  to create a stellar finished product.
                                </p>
                                    </div>
                                    <div className={classes.objective}>
                                        <h2>Employment History  </h2>
                                        <h6 className='mt-4'>Front End Developer (Junior), Preezma, Yerevan </h6>
                                        <span className={classes.spandate}>J U LY 2 0 2 0 </span>
                                        <p>• Crafting various website features using HTML5 CSS3 and JavaScript/ES6,
                                 <br />  • Developing and Implementing project scope and timelines based on the  design-develop-deploy process,
                                <br />   • Developing and Implementing project scope and timelines based on the  design-develop-deploy process,
                                <br />   • Collaborating with UX designers and Back End Developers and ensured  coherence between all parties,
                                <br />   • Testing feature prototypes for bugs and user experience.

                                </p>
                                    </div>
                                    <h6 className='mt-4'>Front End Developer (Intern), Preezma, Yerevan  </h6>
                                    <span className={classes.spandate}>F E B R U A R Y 2 0 2 0 — J U LY 2 0 2 0  </span>
                                    <h6 className='mt-4'>Accountant, Architon, Yerevan   </h6>
                                    <span className={classes.spandate}>M A R C H 2 0 1 4 — J U N E 2 0 2 0  </span>
                                    <p>• Accounts Receivable, received and applied payments, processed bank deposits,  and researched reconciliation of account balances,
                                    • Accounts Payable, processed invoices and payments, reconciled credit card  accounts and petty cash, management of daily cash flow requirements and  transactions, generated yearly,
                                    • Purchasing generations of purchase orders, maintained vendor relationships, • Preparation of daily, quarterly and annual reports to Tax Authority (Income  Tax, VAT, Corporate Income Tax and Property Tax reports etc) according to Tax  Codes,
                                    • Preparation of daily, quarterly and annual financial reports for Managers, • Handled an employee wages calculation and managed employee expense  reimbursements and handled banks loan documentation for the company, • Participated on the process of changing the company's policies and procedures.
                                    </p>
                                    <h2>Education  </h2>
                                    <h6 className='mt-4'> Bit School-Software Engineering School </h6>
                                    <h6 className='mt-4'>Master, Armenian National Agrarian University</h6>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-4 mt-4">
                            <div className={classes.ridthBox}>
                                <h1>Links </h1>
                                <ul>
                                    <li>
                                        <a href="https://km.martirosyankaren@gmail.com">km.martirosyankaren@gmail.com </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/kmartirosyan" >github.com/kmartirosyann  </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/k-martirosyan">www.linkedin.com/in/k-martirosyan/  </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/karen.martiosyan">www.facebook.com/karen.martiosyan  </a>
                                    </li>
                                </ul>
                                <h1>Skills  </h1>
                                <ul>
                                    <li>
                                    JavaScript/ES6 
                                    </li>
                                    <li>
                                    ReactJs/Redux 
                                    </li>
                                    <li>
                                    HTML/CSS 
                                    </li>
                                </ul>

                                <h1>Languages   </h1>
                                <ul>
                                    <li>
                                    Armenian 
                                    </li>
                                    <li>
                                    Russian 
                                    </li>
                                    <li>
                                    English
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}


export default Home
import React from 'react'
import { Helmet } from 'react-helmet'
import s from 'styled-components'
import NavBar from '../../../../components/2019/year-in-review/Nav'
import MultiMedia from '../../../../components/2019/year-in-review/Multimedia'
import HeaderSection from '../../../../components/2019/year-in-review/HeaderSection'

import { SectionHeader, SubSectionHeader } from '../../../../components/2019/year-in-review/Typograph'

import { OPEN_SANS_REGULAR, OPEN_SANS_BOLD, DM_SERIF_DISPLAY_REGULAR } from '../../../../utils/font'

const Wrapper = s.div`
    .more-stories .opinion {
        color:#131313;
        font-weight: bold;
        margin-bottom: 20px;
    }

    /* use h3 */
    .main-header {
        color: white;
        margin-top: 16px;
        ${DM_SERIF_DISPLAY_REGULAR}
    }

    .section-inverse .main-header {
        color: #131313;
    }

    /* use h4 */
    .primary-story {
        color: white;
        ${DM_SERIF_DISPLAY_REGULAR}
        font-size: 22px;
    }

    .primary-story:hover {
        color: #dbdbdb;
    }

    .section-inverse .primary-story {
        color: #131313;
    }

    .section-inverse .primary-story:hover {
        color: #4a4a4a;
    }

    .primary-section {
        padding-top: 28px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        padding-bottom: 28px;
    }

    .primary-story-line {
        background-color: rgba(255, 255, 255, 0.3);
        margin: 28px 0px;
    }

    .section-inverse .primary-story-line {
        background-color: rgba(0, 0, 0, 0.3);
    }

    /* use h5 */
    .secondary-story{
        color: white;
        ${DM_SERIF_DISPLAY_REGULAR}
        font-size: 18px;
    }

    .secondary-story:hover {
        color: #DBDBDB;
    }

    .section-inverse .secondary-story:hover {
        color: #4a4a4a;
    }

    section.opinion h5:hover{
        color: #505050;
    }

    .section-inverse section.opinion h5:hover {
        color: #4a4a4a;
    }

    section.opinion {
        background-color: #F1F5FF;
        padding: 120px 0px;
    }

    section.opinion .section-header {
        color: #131313;
        font-family: 'DM Serif Display', serif;
        font-size: 52px;
        font-style: italic;
        text-align: center;
        margin-bottom: 40px;
    }

    .column-title {
        color: #E7525F;
        ${OPEN_SANS_BOLD}
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 12px;
    }

    .opinion-title {
        color:#131313;
        ${DM_SERIF_DISPLAY_REGULAR}
        font-size: 28px;
        margin-bottom: 12px;
    }

    .photo-gallery {
        margin-bottom: 20px;
    }

    a:hover {
        text-decoration: none;
    }

    .opinion-title:hover{
        color: #505050;
    }

    .author-opinion-img {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .author-opinion-img p {
        margin-bottom: 0px;
        margin-left: 16px;
        color: #8E929F;
        font-weight: bold;
        font-size: 14px;
    }

    .author-opinion-img p:hover {
        color: #ABAFBA;
    }

    .opinion-img {
        height: 54px;
        width: 54px;
        background-color: #f9f9f9;
        float: left;
        border-radius: 50%;
        background-size: cover;
        background-position: top;
        flex-shrink: 0;
    }

    .opinion-card {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 60px;
        padding-bottom: 30px;
        padding-right: 20px;
        ${OPEN_SANS_REGULAR}
    }

    .opinion-card-img {
        margin-bottom: 20px;
        width: auto;
    }

    .author {
        color: #8E929F;
        font-weight: bold;
        font-size: 14px;
    }

    .more-columns p {
        color: #8E929F;
        font-weight: bold;
        font-size: 14px;
        margin-top: 20px;
    }

    .section-description {
        ${OPEN_SANS_REGULAR}
        max-width: 60%;
        margin: 16px auto 64px;
        text-align: center;
    }

    .more-stories {
        margin-top: 20px;
        padding-top: 24px;
    }

    .section-inverse .secondary-story {
        color: #131313;
    }

    section.opinion .secondary-story {
        color: #131313;
    }

    .story-link {
        color: inherit;
    }

    .story-link:hover {
        text-decoration: none;
        color: inherit;
    }

    .section {
        background-color: #131313;
        padding: 120px 0px;
    }

    .section-inverse {
        background-color: white;
        padding: 80px 0px;
    }

    .more-stories .section-inverse {
        background-color: #f9f9f9;
    }

    .section-inverse .section-main-header {
        color: #131313;
    }

    .section-main-text {
        ${OPEN_SANS_REGULAR}
        color: #f7f7f7;
        margin-top: 15px;
        line-height: 1.6;
    }

    .section-inverse .section-main-text {
        color: #131313;
    }

    .date {
        ${OPEN_SANS_REGULAR}
        color: #CFD3DD;
    }

    .section-inverse .date {
        color: #6C6F78;
    }

    section.opinion .date {
        color: #6C6F78;
    }

    .more-stories {
        margin-top: 20px;
        padding-top: 20px;
    }

    .street-card {
        margin-bottom: 60px;
        padding-bottom: 60px;
        height: 260px;
        background: #E7525F;
    }

    .street-card:hover {
        background: #D23C49;
    }

    .street-header {
        color: white;
        font-size: 40px;
        font-family: 'DM Serif Display', serif;
        margin-left: 28px;
        margin-right: 28px;
        position: absolute;
        bottom: 72px;
    }


    /* Util classes */
    .right-border {
        border-right: 1px solid rgba(255, 255, 255, 0.3);
    }

    .section-inverse .right-border {
        border-right: 1px solid rgba(0, 0, 0, 0.3);
    }

    section.opinion .right-border {
        border-right: 1px solid rgba(0, 0, 0, 0.3);
    }

    .top-border {
        border-top: 1px solid rgba(255, 255, 255, 0.3);
    }

    .section-inverse .top-border {
        border-top: 1px solid rgba(0, 0, 0, 0.3);
    }

    section.opinion .top-border {
        border-top: 1px solid rgba(0, 0, 0, 0.3);
    }

    .narrow-col-right {
        padding-right: 24px;
    }

    .narrow-col-left {
        padding-left: 24px;
    }
`

const Footer = s.div`
    ${OPEN_SANS_REGULAR}
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
`

const Index = () => (
  <>
    <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Year In Review 2019 | The Daily Pennsylvanian</title>

        <meta property="og:title" content="Year in Review 2019 | The Daily Pennsylvanian" />
        <meta property="og:image" content="https://s3.amazonaws.com/snwceomedia/dpn/c9f5bdfc-5a9d-450e-9a90-4e8ad3b04186.sized-1000x1000.jpg" />
        <meta property="og:description" content="Take a look back on 2019's most memorable moments with The Daily Pennsylvanian's Year in Review." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://projects.thedp.com/2019/12/year-in-review/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Year in Review 2019 | The Daily Pennsylvanian" />
        <meta name="twitter:image" content="https://s3.amazonaws.com/snwceomedia/dpn/c9f5bdfc-5a9d-450e-9a90-4e8ad3b04186.sized-1000x1000.jpg/" />
        <meta name="twitter:description" content="Take a look back on 2019's most memorable moments with The Daily Pennsylvanian's Year in Review." />
        <meta name="twitter:url" content="https://projects.thedp.com/2019/12/year-in-review/" />
        <meta name="twitter:site" content="@dailypenn" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
    </Helmet>
    <Wrapper>
    <HeaderSection/>
    <NavBar/>

    {/* NEWS */}
    <section class="section" id="news">
      <div class="container">
        <SubSectionHeader>PENN ADMISSIONS SCANDAL</SubSectionHeader>
        <div class="row">
            <div class="col-md-6 right-border narrow-col-right">
                <img class="img-fluid" src="https://s3.amazonaws.com/snwceomedia/dpn/f880ab9e-bc8a-4f3d-a44b-541a31e6c13c.sized-1000x1000.jpg" />
                <h3 class="main-header">College admissions scandal hits Penn men’s basketball</h3>
                <p class="section-main-text">Former Penn men’s basketball coach Jerome Allen has remained a key witness for the investigation into the college admissions bribery scandal that came to light in March 2019. He plead guilty in October 2018 to accepting bribes in exchange for recruitment of a player. In March, Allen testified in a federal trial that Philip Esformes paid him to facilitate his son’s recruitment in 2015. Although the national scandal that broke days after Allen's testimony did not name Penn, Dean of Admissions Eric Furda said Penn would consider revising its recruitment process. During Esformes' trial, news broke that he had also sent more than $400,000 to the consultant at the center of the national scandal after contacting him about his son’s recruitment. Esformes’ trial ended in April when he was found guilty on 20 charges, including bribery. In July, a judge sentenced Allen to four years probation, community service, and a fine, avoiding jail time. The next day, Penn Athletics removed Allen from its Hall of Fame.</p>
            </div>
            <div class="col-md-6 narrow-col-left">
                <div class="row">
                    <div class="col-md-6">
                        <a href="https://www.thedp.com/article/2019/03/upenn-admissions-bribery-eric-furda-jerome-allen-college"><h4 class="primary-story"> Furda says Penn will revisit admissions procedures in light of national bribery scandal </h4></a>
                            <p class="date"> Mar. 14 </p>
                    </div>
                    <div class="col-md-6">
                        <img class="img-fluid"
                            src="https://snworksceo.imgix.net/dpn/e5056ee4-a56c-4e68-9a6c-03306604ee29.sized-1000x1000.png?w=1000" />
                    </div>
                </div>
                <hr class="primary-story-line"/>
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://www.thedp.com/article/2019/03/admissions-scandal-upenn-singer-esformes-basketball-bribery"><h4 class="primary-story"> Penn parent sent more than $400,000 to consultant at center of national admissions scandal </h4></a>
                                <p class="date"> Mar. 18 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/b5b78f08-7bf1-425b-8b18-8b222d87c8f7.sized-1000x1000.jpg?w=1000" />
                        </div>
                    </div>
                <hr class="primary-story-line"/>
                <div class="row">
                    <div class="col-md-6">
                        <a href="https://s3.amazonaws.com/snwceomedia/dpn/5b04fe03-405b-4e40-af6f-8e1bd930a4c7.sized-1000x1000.jpg"><h4 class="primary-story"> Penn parent found guilty in case involving bribery of Jerome Allen for college admission </h4></a>
                            <p class="date"> Apr. 5 </p>
                    </div>
                    <div class="col-md-6">
                        <img class="img-fluid"
                            src="https://snworksceo.imgix.net/dpn/b5b78f08-7bf1-425b-8b18-8b222d87c8f7.sized-1000x1000.jpg?w=1000" />
                    </div>
                </div>
                <hr class="primary-story-line"/>
                <div class="row">
                    <div class="col-md-6">
                        <a href="https://www.thedp.com/article/2019/07/penn-athletics-jerome-allen-removed-hall-of-fame-trial-bribery-esformes-mens-basketball"><h4 class="primary-story"> Penn Athletics removes Jerome Allen from its Hall of Fame after federal conviction </h4></a>
                            <p class="date"> July 2 </p>
                    </div>
                    <div class="col-md-6">
                        <img class="img-fluid"
                        src="https://snworksceo.imgix.net/dpn/a9f9468c-3601-4dbc-b59b-13f9abd1d03e.sized-1000x1000.jpg?w=1000" />
                    </div>
                </div>
            </div>
        </div>
        <div class="top-border more-stories">
            <SubSectionHeader color={"white"}>MORE STORIES</SubSectionHeader>
            <div class="row">
                <div class="col-md-3 right-border">
                    <a href="https://www.thedp.com/article/2019/03/penn-athletics-jerome-allen-philip-esformes-trial-update-bribery-basketball-morris" class="story-link">
                        <h6 class="secondary-story"> Updated: Former Penn coach Jerome Allen testifies, implicating former assistant </h6>
                    </a>
                    <p class="date"> Mar. 10 </p>
                </div>
                <div class="col-md-3 right-border narrow-col-left">
                    <a href="https://www.thedp.com/article/2019/03/ivy-league-college-admissions-bribery-justice-department-jerome-allen" class="story-link">
                        <h5 class="secondary-story"> Penn not among schools named in nationwide college admissions scandal </h5>
                    </a>
                    <p class="date"> Mar. 12 </p>
                </div>
                <div class="col-md-3 right-border narrow-col-left">
                    <a href="https://www.thedp.com/article/2019/03/bribery-esformes-scandal-william-singer-college-admissions" class="story-link">
                        <h5 class="secondary-story"> Parent who bribed former Penn coach contacted consultant at center of admissions scandal </h5>
                    </a>
                    <p class="date"> Mar. 16 </p>
                </div>
                <div class="col-md-3 narrow-col-left">
                    <a href="https://www.thedp.com/article/2019/07/jerome-allen-probation-accepting-bribes-penn-mens-basketball-college-admissions-scandal-esformes" class="story-link">
                        <h5 class="secondary-story"> Former Penn coach Jerome Allen avoids jail time in admissions bribery scandal </h5>
                    </a>
                    <p class="date"> July 2 </p>
                </div>
            </div>
        </div>
      </div>
    </section>

    <section class="section-inverse">
        <div class="container">
            <SubSectionHeader>SCHOOL RENAMINGS</SubSectionHeader>
            <div class="row">
                <div class="col-md-6 right-border narrow-col-right">
                    <img class="img-fluid"
                        src="https://s3.amazonaws.com/snwceomedia/dpn/e96e9108-c45b-468e-94c6-dde38d382089.sized-1000x1000.jpg" />
                    <h3 class="main-header">Penn Design and Penn Law renamed after large donations</h3>
                    <p class="section-main-text">Penn renamed two of their twelve schools this year after receiving large donations. In February, Penn’s School of Design was renamed the University of Pennsylvania Stuart Weitzman School of Design after the fashion icon and 1963 Wharton alumnus. Students voiced anger over the renaming, arguing that Weitzman’s career as a designer has no relation to any academic program at Penn. Students added administrators should have considered student input before the decision. In November, the University renamed Penn Law School to the University of Pennsylvania Carey Law School after the largest donation to any law school. A petition demanding the school change its short-form name from “Carey Law” back to “Penn Law” garnered over 500 signatures from students and alumni within two days of the announcement. Ten days after the initial announcement of the name change, Penn Law Dean Ted Ruger announced the school will change its short-form name back to “Penn Law” after widespread backlash from students and alumni.</p>
                </div>
                <div class="col-md-6 narrow-col-left">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://www.thedp.com/article/2019/10/stuart-weitzman-school-of-design-penn-wharton"><h4 class="primary-story"> ‘We were completely blindsided': PennDesign students frustrated by the school’s renaming </h4></a>
                                <p class="date"> Oct. 2 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/d1ada725-0263-4c46-8371-8a5a252d8e90.sized-1000x1000.jpg?w=1000" />
                        </div>
                    </div>
                    <hr class="primary-story-line"/>
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://www.thedp.com/article/2019/11/penn-carey-law-school-ruger-donation-renaming"><h4 class="primary-story"> Hundreds sign petition calling to change new 'Carey Law' name back to 'Penn Law' </h4></a>
                                <p class="date"> Nov. 10 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/5310ad2b-76cb-425a-9d77-fe407f8d0161.sized-1000x1000.jpg?w=1000" />
                        </div>
                    </div>
                    <hr class="primary-story-line"/>
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://www.thedp.com/article/2019/11/penn-carey-law-twitter-parody-accounts"><h4 class="primary-story"> A student took over the @PennLaw Twitter. Now, the school has shut down the parody account. </h4></a>
                                <p class="date"> Nov. 18 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/7cc33872-8190-43f4-815b-779365b9c883.sized-1000x1000.png?w=1000" />
                        </div>
                    </div>
                    <hr class="primary-story-line"/>
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://www.thedp.com/article/2019/11/penn-law-carey-renaming-change"><h4 class="primary-story"> ‘Carey Law’ changes its shortened name back to ‘Penn Law’ after extensive backlash </h4></a>
                                <p class="date"> Nov. 18 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/0d4576c9-3211-4213-b1c9-20068b954eeb.sized-1000x1000.jpg?w=1000" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="top-border more-stories">
                <SubSectionHeader color={"#131313"}>MORE STORIES</SubSectionHeader>
                <div class="row">
                    <div class="col-md-3 right-border">
                        <a href="https://www.thedp.com/article/2019/02/penn-design-stuart-weitzman-donation-fashion-philadelphia" class="story-link">
                            <h6 class="secondary-story"> PennDesign renamed after fashion icon Stuart Weitzman — relieving financial uncertainty </h6>
                        </a>
                        <p class="date"> Feb. 26 </p>
                    </div>
                    <div class="col-md-3 right-border narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/11/penn-law-carey-foundation-donation-renaming" class="story-link">
                            <h5 class="secondary-story"> Penn Law renamed ‘Carey Law School’ following record $125 million donation </h5>
                        </a>
                        <p class="date"> Nov. 8 </p>
                    </div>
                    <div class="col-md-3 right-border narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/11/penn-carey-law-ruger-rename-backlash-student-alumni" class="story-link">
                            <h5 class="secondary-story"> 'A complete nightmare': Penn Law students and alums reflect on name-change process </h5>
                        </a>
                        <p class="date"> Nov. 19 </p>
                    </div>
                    <div class="col-md-3 narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/11/penn-law-carey-ruger-rename-town-hall" class="story-link">
                            <h5 class="secondary-story"> Admin considers changing 'Carey Law' back to 'Penn Law' after student backlash </h5>
                        </a>
                        <p class="date"> Nov. 12 </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* NEWS 3 */}
    <section class="section">
        <div class="container">
            <SubSectionHeader>AMY WAX BACKLASH</SubSectionHeader>
            <div class="row">
                <div class="col-md-6 right-border narrow-col-right">
                    <img class="img-fluid"
                        src="https://s3.amazonaws.com/snwceomedia/dpn/ba12e558-4276-446d-b046-7a8442a60a54.sized-1000x1000.jpg" />
                    <h3 class="main-header">Students demand University to reprimand Wax for “racist” statements</h3>
                    <p class="section-main-text">Penn Law professor Amy Wax sparked controversy again this summer after claiming that the United States would be “better off with more whites and fewer nonwhites.” Her comments prompted student activism through marching protests and petitions calling for the University to relieve her of all teaching duties. In October, the Undergraduate Assembly passed a resolution demanding the administration fire Wax. Wax previously caused controversy in 2017 when she claimed that white, Anglo-Saxon cultural norms are superior, and that she had never seen a black Penn Law student graduate in the top quarter of their class.</p>
                </div>
                <div class="col-md-6 narrow-col-left">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://www.thedp.com/article/2019/07/amy-wax-penn-law-dean-immigration"><h4 class="primary-story"> Penn Law Dean Ted Ruger on Amy Wax’s remarks: 'bigoted' at best, 'racist' at worst </h4></a>
                                <p class="date"> July 23 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/bd14c6b0-77e5-4843-ad76-a8fe201f868a.sized-1000x1000.jpg?w=1000" />
                        </div>
                    </div>
                    <hr class="primary-story-line"/>
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://www.thedp.com/article/2019/07/amy-wax-penn-petition-racism-immigration-conservativism-conference"><h4 class="primary-story"> Thousands petition for Amy Wax to be reprimanded by Penn over racist remarks </h4></a>
                                <p class="date"> July 24 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/a01cd39a-1ab7-4452-aef7-f85b8708aaea.sized-1000x1000.PNG?w=1000" />
                        </div>
                    </div>
                    <hr class="primary-story-line"/>
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://www.thedp.com/article/2019/10/penn-amy-wax-protest-law-philadelphia"><h4 class="primary-story"> Marching together, Penn Law students call on University to fire Amy Wax </h4></a>
                                <p class="date"> Oct. 14 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/8b5c32c9-9b2e-487d-b69c-947a4030c5e4.sized-1000x1000.jpg?w=1000" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="top-border more-stories">
                <SubSectionHeader color={"white"}>MORE STORIES</SubSectionHeader>
                <div class="row">
                    <div class="col-md-3 right-border">
                        <a href="https://www.thedp.com/article/2019/07/penn-amy-wax-national-conservatism-conference-immigration-racism" class="story-link">
                            <h6 class="secondary-story"> Penn Law prof Amy Wax claims America is 'better off with more whites and fewer nonwhites' </h6>
                        </a>
                        <p class="date"> July 18 </p>
                    </div>
                    <div class="col-md-3 right-border narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/10/amy-wax-tenure-undergraduate-assembly-resolution" class="story-link">
                            <h5 class="secondary-story"> Undergraduate Assembly demands that Penn fire Amy Wax for violating University policy </h5>
                        </a>
                        <p class="date"> Oct. 7 </p>
                    </div>
                    <div class="col-md-3 narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/11/amy-wax-resolution-undergraduate-assembly-penn-law-update" class="story-link">
                            <h5 class="secondary-story"> NEC amends UA resolution to demand Penn bar Amy Wax from teaching instead of firing her </h5>
                        </a>
                        <p class="date"> Nov. 14 </p>
                    </div>
                    <div class="col-md-3 narrow-col-left">
                        <a href="#" class="story-link">
                            <h5 class="secondary-story"></h5>
                        </a>
                        <p class="date"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- NEWS 4--> */}
    <section class="section-inverse">
            <div class="container">
                <SubSectionHeader color={""}>STUDENTS PUSH FOR CLIMATE CHANGE</SubSectionHeader>
                <div class="row">
                    <div class="col-md-6 right-border narrow-col-right">
                        <img class="img-fluid"
                            src="https://s3.amazonaws.com/snwceomedia/dpn/fdc1e3a4-09e6-42fa-a884-6c7a229fb3c2.sized-1000x1000.jpg" />
                        <h3 class="main-header">Students pressure University to address the climate crisis</h3>
                        <p class="section-main-text">Pressure mounted this semester from students opposing Penn’s investment in the fossil fuel industry. In light of Penn's Board of Trustees' refusal to review Fossil Free Penn’s most recent divestment proposal last year, leaders said the club had no choice but to rethink its strategy and engage in direct action. FFP began holding weekly sit-ins outside of Penn President Amy Gutmann’s office in September. Weeks after the first sit-in, the University announced a Climate Action Plan 3.0, outlining more incremental steps to reduce Penn’s carbon emissions. Some student climate activists criticized the plan for its vagueness and potential harm to disadvantaged Philadelphia communities. In November, FFP protested at Penn’s annual Board of Trustees meeting, ultimately shutting the meeting down. Student protesters aim to pressure Penn to host a climate town hall, with Chief Investment Officer Peter Ammon, Chair of the Board of Trustees David Cohen, and Gutmann all in attendance.</p>
                    </div>
                    <div class="col-md-6 narrow-col-left">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/09/penn-fossil-free-fridays-sit-ins-climate-change"><h4 class="primary-story"> Weekly Fossil Free Penn sit-ins demand a public town hall on University's investments </h4></a>
                                    <p class="date"> Sep. 29 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/e2a1bb84-33af-4a53-9a52-f7c31e2567e3.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <hr class="primary-story-line"/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/10/climate-sustainability-action-plan-3-0-environment-upenn"><h4 class="primary-story"> Penn's third climate action plan incorporates sustainability and student outreach </h4></a>
                                    <p class="date"> Oct. 16 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/d7db5dbe-f2b2-498b-9a05-d56affc3322b.sized-1000x1000.JPG?w=1000" />
                            </div>
                        </div>
                        <hr class="primary-story-line"/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/11/penn-board-of-trustees-meeting-fossil-free-protest"><h4 class="primary-story"> About 100 Fossil Free Penn members shut down Board of Trustees meeting </h4></a>
                                    <p class="date"> Nov. 8 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/31817325-b341-4be7-adec-315ab261772e.sized-1000x1000.JPG?w=1000" />
                            </div>
                        </div>
                    </div>
                </div>

            <div class="top-border more-stories">
                <SubSectionHeader color={"#131313"}>MORE STORIES</SubSectionHeader>
                <div class="row">
                    <div class="col-md-3 right-border">
                        <a href="https://www.thedp.com/article/2019/09/climate-strike-philadelphia-fossil-free-penn" class="story-link">
                            <h6 class="secondary-story"> Students and faculty march in 'Philly Climate Strike' to demand action on climate change </h6>
                        </a>
                        <p class="date"> Sep. 21 </p>
                    </div>
                    <div class="col-md-3 right-border narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/11/fossil-free-penn-fossil-fuels-ivy-league-upenn-philadelphia" class="story-link">
                            <h5 class="secondary-story"> Guest Column by seven Penn faculty members | We support student climate change action </h5>
                        </a>
                        <p class="date"> Nov. 11 </p>
                    </div>
                    <div class="col-md-3 narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/12/penn-environmental-innovations-initiative-amy-gutmann-pritchett" class="story-link">
                            <h5 class="secondary-story"> Penn announces new 'Environmental Innovations Initiative' for climate change research </h5>
                        </a>
                        <p class="date">Dec. 4</p>
                    </div>
                    <div class="col-md-3 narrow-col-left">
                        <a href="#" class="story-link">
                            <h5 class="secondary-story"></h5>
                        </a>
                        <p class="date"></p>
                    </div>
                </div>
            </div>
            <div class="top-border more-stories">
                <SubSectionHeader color={"#131313"}>PHOTO GALLERIES</SubSectionHeader>
                <div class="row">
                    <div class="col-md-6">
                        <a href="https://www.thedp.com/article/2019/09/climate-change-strike-philadelphia-philly-penn-protest-march-photo-gallery">
                            <img class="img-fluid photo-gallery" src="https://snworksceo.imgix.net/dpn/708b89e3-630c-477b-bc3a-5d05932b1427.original.jpg" />
                            <h4 class="primary-story">Highlights from the 2019 Philadelphia Climate Strike</h4>
                        </a>
                    </div>
                    <div class="col-md-6">
                        <a href="https://www.thedp.com/article/2019/11/photo-essay-fossil-free-penn-board-of-trustees-meeting">
                            <img class="img-fluid photo-gallery" src="https://snworksceo.imgix.net/dpn/0c0aae5d-a26c-4fbb-8693-c2abc211ab2b.original.jpg" />
                            <h4 class="primary-story">The Fossil Free Penn protest that shut down Board of Trustees meeting</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- NEWS 5--> */}
    <section class="section">
            <div class="container">
                <SubSectionHeader>2020 PRESIDENTIAL CAMPAIGNS</SubSectionHeader>
                <div class="row">
                    <div class="col-md-6 right-border narrow-col-right">
                        <img class="img-fluid"
                            src="https://s3.amazonaws.com/snwceomedia/dpn/d530ada1-ab07-4ca3-90cf-582389d5273a.sized-1000x1000.jpg" />
                        <h3 class="main-header">Two former Penn professors launch presidential campaigns</h3>
                        <p class="section-main-text">Two of the front-runners for the Democratic presidential nomination have served as Penn professors – former United States Vice President Joe Biden and current U.S. Senator Elizabeth Warren (D-Mass.). The two candidates launched their campaigns earlier this year, aiming to win in 2020 against incumbent President Donald Trump in 2020 — a 1968 Wharton graduate. Penn President Amy Gutmann announced on Feb. 7, 2017 that Biden would serve as a Benjamin Franklin Presidential Practice Professor and lead the Penn Biden Center for Diplomacy and Global Engagement. Warren taught contract and bankruptcy law at the University of Pennsylvania Carey Law School from 1987 to 1995, when she left to teach at Harvard Law School.</p>
                    </div>
                    <div class="col-md-6 narrow-col-left">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/01/elizabeth-warren-president-penn-law-professor-students"><h4 class="primary-story"> 'Whip-smart' and 'well-liked': Elizabeth Warren's Penn Law students remember their professor </h4></a>
                                    <p class="date"> Jan. 22 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/a83270c2-27b4-40e0-a32c-b9a2febe7a1f.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <hr class="primary-story-line"/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/04/joe-biden-president-2020-penn-center-democrat"><h4 class="primary-story"> Joe's leaving Penn for now. But the Biden Center isn't going anywhere. </h4></a>
                                    <p class="date"> Apr. 28 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/f6beec97-98e5-46b8-92d2-fa0d6c69eaf0.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                    </div>
                </div>    

            <div class="top-border more-stories">
                <SubSectionHeader color={"white"}>MORE STORIES</SubSectionHeader>
                <div class="row">
                    <div class="col-md-3 right-border">
                        <a href="https://www.thedp.com/article/2019/02/michael-cohen-testimony-donald-trump-wharton-penn-college-grades" class="story-link">
                            <h6 class="secondary-story"> Michael Cohen testifies that he threatened Penn not to release Trump's grades </h6>
                        </a>
                        <p class="date"> Feb. 27 </p>
                    </div>
                    <div class="col-md-3 right-border narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/08/penn-for-joe-biden-president-2020-democrat-campaign" class="story-link">
                            <h5 class="secondary-story"> Meet Penn for Biden: the group backing the former vice president’s bid for the White House </h5>
                        </a>
                        <p class="date"> Aug. 22 </p>
                    </div>
                    <div class="col-md-3 narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/02/elizabeth-warren-presidential-campaign-2020-launch-penn-law" class="story-link">
                            <h5 class="secondary-story"> Former Penn prof. Elizabeth Warren officially launches 2020 presidential bid </h5>
                        </a>
                        <p class="date"> Feb. 9 </p>
                    </div>
                    <div class="col-md-3 narrow-col-left">
                        <a href="#" class="story-link">
                            <h5 class="secondary-story"></h5>
                        </a>
                        <p class="date"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- NEWS 6--> */}
    <section class="section-inverse">
            <div class="container">
                <SubSectionHeader>NEW BUILDINGS</SubSectionHeader>
                <div class="row">
                    <div class="col-md-6 right-border narrow-col-right">
                        <img class="img-fluid"
                            src="https://s3.amazonaws.com/snwceomedia/dpn/291c3ee4-a6d6-4a05-955a-b6444e51837c.sized-1000x1000.jpg" />
                        <h3 class="main-header">Campus construction noise prompts student criticism</h3>
                        <p class="section-main-text">Penn announced plans to create a slate of new buildings this year and continued constructing its record-breaking $163 million dorm New College House West, shaping up major changes to campus. Additionally, Penn continued construction of the Pavilion at the Hospital of the University of Pennsylvania, Tangen Hall, and the Wharton Academic Research Building. Residents living near construction zones criticized the noise, claiming they were frequently woken up by construction early in the morning. Students said they felt their concerns were largely unaddressed by administrators. Penn's construction of NCHW will provide more room to house students once sophomores will be required to live on campus in 2021. Students who criticized the sophomore housing policy voiced concerns about the costs of on-campus housing and its impact on Greek Life.</p>
                    </div>
                    <div class="col-md-6 narrow-col-left">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/08/penn-new-college-house-west-construction-noise"><h4 class="primary-story"> Students protest 'ridiculous' New College House West construction noise </h4></a>
                                    <p class="date"> Oct. 27 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/10a66465-25bf-4d15-8d21-b42787a52618.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <hr class="primary-story-line"/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/09/penn-new-college-house-west-construction"><h4 class="primary-story"> Dining porch, courtyard, meditation rooms: Penn reveals NCHW details </h4></a>
                                    <p class="date"> Sep. 20 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/c04fb1c8-8cab-49ba-8d30-fab7c7190f81.sized-1000x1000.JPG?w=1000" />
                            </div>
                        </div>
                        <hr class="primary-story-line"/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/11/quad-residents-wharton-building-noise-construction-penn"><h4 class="primary-story"> Quad residents upset with noisy construction of the Wharton Academic Research Building </h4></a>
                                    <p class="date"> Nov. 25 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/5ea7cd52-1b49-4228-9500-fc2607b87008.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                    </div>
                </div>

            <div class="top-border more-stories">
                <SubSectionHeader color={"#131313"}>MORE STORIES</SubSectionHeader>
                <div class="row">
                    <div class="col-md-3 right-border">
                        <a href="https://www.thedp.com/article/2019/01/new-college-house-west-construction-penn-january-update" class="story-link">
                            <h6 class="secondary-story"> New College House West construction on schedule for fall 2021 opening </h6>
                        </a>
                        <p class="date"> Jan. 15 </p>
                    </div>
                    <div class="col-md-3 right-border narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/02/pavilion-upenn-hospital-university-of-pennsylvania-2021-floorplan-design" class="story-link">
                            <h5 class="secondary-story"> Penn Medicine changes design for $1.5 billion Pavilion to optimize patient room layouts </h5>
                        </a>
                        <p class="date"> Feb. 12 </p>
                    </div>
                    <div class="col-md-3 narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/03/penn-wharton-tangen-hall-student-entrepreneurship-amy-gutmann" class="story-link">
                            <h5 class="secondary-story"> Construction for Tangen Hall, $46 million student entrepreneurial hub, will finish by 2020 </h5>
                        </a>
                        <p class="date"> Feb. 28 </p>
                    </div>
                    <div class="col-md-3 narrow-col-left">
                        <a href="#" class="story-link">
                            <h5 class="secondary-story"></h5>
                        </a>
                        <p class="date"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="opinion" id="opinion">
        <div class="container">
            <div class="section-top">
                <SectionHeader>Opinion</SectionHeader>
            </div>
            <div class="section-description">
                <p>This year, our columnists reacted to some of the most pressing issues affecting Penn students and the
                    Philadelphia area. Here are some of the year’s strongest pieces.</p>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="opinion-card">
                            <img class="opinion-card-img img-fluid" src="https://snworksceo.imgix.net/dpn/19aff961-4141-4811-bb5b-86d4e8910a9b.sized-1000x1000.jpg?w=1000"/>
                        <p class="column-title">UROOBA UNPLUGGED</p>
                        <a href="https://www.thedp.com/article/2019/02/public-school-ivy-league-children-alumni-urooba-abid-upenn-philadelphia"><h4 class="opinion-title">All Penn alumni should send their kids to public schools</h4></a>
                        <p>Penn graduates sending their kids to private schools is an inherently selfish decision</p>
                        <div class="author-opinion-img">
                            <div class="opinion-img"
                                style={{backgroundImage: "url(https://snworksceo.imgix.net/dpn/416973f1-cfe6-4915-ad58-a2f69c16a950.sized-1000x1000.jpg?w=1000)"}}>
                            </div>
                            <a href="https://www.thedp.com/staff/urooba-abid">
                                <p class>UROOBA ABID</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="opinion-card">
                            <img class="opinion-card-img img-fluid" src="https://snworksceo.imgix.net/dpn/6a305591-bdf8-4a0c-9e5e-7e3eb1c9cf30.sized-1000x1000.jpg?w=1000"/>
                        <p class="column-title">THE OXFORD C'MON</p>
                        <a href="https://www.thedp.com/article/2019/01/gillette-ad-metoo-masculinity-sophia-durose-upenn-philadelphia"><h4 class="opinion-title">Toxic masculinity runs deeper than the Gillette ad</h4></a>
                        <p>What Penn can learn from the Gillette ad</p>
                        <div class="author-opinion-img">
                            <div class="opinion-img"
                                style={{backgroundImage: "url(https://snworksceo.imgix.net/dpn/debec73b-b048-4d5c-90fa-1892021d2c37.sized-1000x1000.png?w=1000)"}}>
                            </div>
                            <a href="https://www.thedp.com/staff/sophia-durose">
                                <p class>SOPHIA DUROSE</p>
                            </a>    
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="opinion-card">
                            <img class="opinion-card-img img-fluid" src="https://snworksceo.imgix.net/dpn/9f96ee6f-0004-4bd9-9999-7e9e4e7994da.sized-1000x1000.png?w=1000"/>
                        <p class="column-title">EDITORIAL</p>
                        <a href="https://www.thedp.com/article/2019/12/mckinsey-upenn-consulting-editorial-human-rights-immigration-ivy-league-philadelphia"><h4 class="opinion-title">Penn students must boycott McKinsey in light of its work with ICE</h4></a>
                        <p></p>
                        <div class="author-opinion-img">
                            <div class="opinion-img" 
                                style={{backgroundImage: "url(https://pbs.twimg.com/profile_images/913471917004222464/nfI7Z1AG_400x400.jpg)"}}>
                            </div>
                            <a href="https://www.thedp.com/staff/the-daily-pennsylvanian">
                                <p class>THE DAILY PENNSYLVANIAN EDTIORIAL BOARD</p>
                            </a>   
                        </div>
                    </div>
                </div>
                
            <div class="top-border more-stories">
                <h5 class="opinion more-columns">MORE COLUMNS</h5>
                <div class="row">
                    <div class="col-md-3 right-border">
                        <a href="https://www.thedp.com/article/2019/10/penn-sexual-assault-survey-administration-gutmann-ivy-league-editorial" class="story-link">
                            <h5 class="secondary-story">It's not enough to be 'troubled.' Penn must step up to address sexual assault.</h5>
                        </a>
                        <p class="author">THE DAILY PENNSYLVANIAN EDTIORIAL BOARD</p>
                    </div>
                    <div class="col-md-3 right-border narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/03/admissions-bribery-jerome-allen-basketball-ivy-league-upenn-philadelphia" class="story-link">
                            <h5 class="secondary-story">Jerome Allen must be removed from the Penn Athletics Hall of Fame</h5>
                        </a>
                        <p class="author">THE DAILY PENNSYLVANIAN EDTIORIAL BOARD</p>
                    </div>
                    <div class="col-md-3 right-border narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/10/philadelphia-gentrification-penn-bubble-ivy-league-upenn-philadelphia" class="story-link">
                            <h5 class="secondary-story"> Our relationship with Philadelphia is broken. Here’s how we fix it. </h5>
                        </a>
                        <p class="author">ALFREDO PRATICÒ</p>
                    </div>
                    <div class="col-md-3 narrow-col-left">
                        <a href="https://www.thedp.com/article/2019/01/admissions-ivy-league-harvard-duke-christy-qiu-upenn-philadelphia" class="story-link">
                            <h5 class="secondary-story"> I looked at my Penn admissions file, and you should too </h5>
                        </a>
                        <p class="author"> CHRISTY QIU </p>
                    </div>
                </div>
            </div>
                
            </div>
        </div>
    </section>
    {/* <OpinionSec/> */}

{/* <!-- SPORTS --> */}
    {/* <!-- SPORTS 1--> */}
    <section class="section" id="sports">
            <div class="container">
                <SubSectionHeader>VOLLEYBALL</SubSectionHeader>
                <div class="row">
                    <div class="col-md-6 right-border narrow-col-right">
                        <img class="img-fluid"
                            src="https://s3.amazonaws.com/snwceomedia/dpn/b1fbebf6-e8bf-47d5-9101-8dec2939a32e.sized-1000x1000.jpg" />
                        <h3 class="main-header">Volleyball in Turmoil</h3>
                        <p class="section-main-text">Penn volleyball’s first season under the direction of coach Iain Braddak was a tumultuous one. Despite several players having reservations about Braddak during the hiring process, Penn Athletics gave him the job in 2018. In addition to being the worst season in program history, eight players filed formal grievances with Penn Athletics against their coach for his conduct during the year. The administration responded to the situation by setting up a team-wide mediation session called restorative justice, in which a third-party firm administered a three-hour meeting attended by all 20 players on the team, Braddak, and Associate Athletic Director Matt Valenti. Braddak returned for the 2019 season with the hope of focusing on the future of the program. However, a different type of setback occurred near the end of the season when Penn Athletics announced that the remaining two games of the team’s season would be canceled following the administration’s discovery of “vulgar, offensive, and disrespectful posters” in the team’s locker room. Multiple athletes on the team did not respond to requests for comment, while Penn Athletics stated that the cancellation had nothing to do with last season’s grievances.</p>
                    </div>
                    <div class="col-md-6 narrow-col-left">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/04/penn-volleyball-iain-braddak-athletics-mistreatment-mental-health-upenn-coach"><h4 class="primary-story"> 'No one is listening': Under new coach, players lose hope amid alleged mistreatment </h4></a>
                                    <p class="date"> Apr. 18 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://s3.amazonaws.com/snwceomedia/dpn/b1fbebf6-e8bf-47d5-9101-8dec2939a32e.sized-1000x1000.jpg" />
                            </div>
                        </div>
                        <hr class="primary-story-line"/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/05/penn-volleyball-coach-iain-braddak-mistreatment-upenn-hiring-rudy-fuller-valenti"><h4 class="primary-story"> Amid volleyball controversy, Penn Athletics stands with coach despite players' concerns </h4></a>
                                <p class="date"> May 5 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://s3.amazonaws.com/snwceomedia/dpn/be1d6df5-19a0-4adf-80ff-6b4cd9c0af89.sized-1000x1000.jpg" />
                            </div>
                        </div>
                        <hr class="primary-story-line"/>
                        <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/10/penn-volleyball-post-allegations-focus-margaret-planek-autumn-leak-iain-braddak"><h4 class="primary-story"> After last spring's mediation efforts, Penn volleyball says its focus is on the future </h4></a>
                                    <p class="date"> Oct. 2 </p>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/361e7d67-dacf-4498-9650-783291133c0f.sized-1000x1000.jpg?w=1000" />
                                </div>
                            </div>
                            <hr class="primary-story-line"/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/11/penn-volleyball-season-canceled-2019-posters"><h4 class="primary-story"> Remainder of Penn volleyball's season canceled, Penn Athletics announces </h4></a>
                                <p class="date"> Nov. 13 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid" src="https://snworksceo.imgix.net/dpn/1dc3a81b-b82f-453e-91dc-a38410bb110c.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    {/* <!-- SPORTS 2--> */}
        <section class="section-inverse">
            <div class="container">
                <SubSectionHeader>FRANKLIN FIELD</SubSectionHeader>
                <div class="row">
                    <div class="col-md-6 right-border narrow-col-right">
                        <img class="img-fluid" src="https://s3.amazonaws.com/snwceomedia/dpn/183bc931-cf87-45eb-bde8-2c315e521412.sized-1000x1000.jpg" />
                        <h3 class="main-header">Franklin Field Turns 125</h3>
                        <p class="section-main-text">Penn’s own Franklin Field turned 125 years old in 2019, and the party lasted all year long. From the Philadelphia Eagles to the service academies to the Red and Blue’s own squads, the Frank has been home to scores of teams across its history. But nowadays the stadium is arguably most full for the annual Penn Relays in late April, where thousands from around the world come to see the world’s best athletes compete in track and field. Penn football ushered in the historic milestone with commemorative all-red throwback uniforms, which they wore for select home games this season. Whether for football, sprint football, lacrosse, or track, Franklin Field will remain one of the nation’s most sacred venues for years to come.</p>
                    </div>
                    <div class="col-md-6 narrow-col-left">
                        <div class="row">
                            <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/01/penn-football-125-years-franklin-field-celebration-campaign"><h4 class="primary-story"> Yearlong celebration announced for Penn's Franklin Field </h4></a>
                                    <p class="date"> Jan. 17 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/285580a4-2ee5-4715-bd17-b0f1b0018d6e.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <hr class="primary-story-line"/>
                        <div class="row">
                            <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/04/penn-relays-track-125-history-owens-bannister-batdorf-haines"><h4 class="primary-story"> 125 years strong: A look back at some of the biggest moments in Penn Relays history </h4></a>
                                    <p class="date"> Apr. 24 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/5e5f7877-e726-4ca4-bb62-356f9716c9dd.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <hr class="primary-story-line"/>
                        <div class="row">
                            <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/08/125-years-franklin-field-anniversary-penn-football-ivy-league-ncaa-george-h-woodruff-ray-priore"><h4 class="primary-story"> 125 years of Franklin Field: The home of Penn football </h4></a>
                                    <p class="date"> Aug. 8 </p>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/0b49deee-8069-446d-83ae-a04e26ae1de5.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <div class="top-border more-stories">
                            <SubSectionHeader color={"#131313"}>MORE STORIES</SubSectionHeader>
                            <a href="https://www.thedp.com/article/2019/08/125-years-franklin-field-anniversary-penn-track-and-field-penn-relays-jesse-owens-john-haines" class="story-link">
                                    <h6 class="secondary-story"> 125 years of Franklin Field: The birthplace of Penn Relays </h6>
                                </a>
                            <p class="date"> Aug. 16 </p>
                            <a href="https://www.thedp.com/article/2019/09/penn-football-throwback-uniforms-red-blue-franklin-field-125-anniversary" class="story-link">
                                    <h6 class="secondary-story"> Penn football unveils throwback uniforms for 125th anniversary of Franklin Field </h6>
                                </a>
                        <p class="date"> Sep. 25 </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    {/* <!-- SPORTS 3--> */}
    <section class="section">
        <div class="container">
            <SubSectionHeader>JEROME ALLEN</SubSectionHeader>
            <div class="row">
                <div class="col-md-6 right-border narrow-col-right">
                    <img class="img-fluid"
                        src="https://s3.amazonaws.com/snwceomedia/dpn/3bdda7fa-b81f-4a72-9c12-f97b554f0373.sized-1000x1000.jpg" />
                    <h3 class="main-header">Jerome Allen scandal continues</h3>
                    <p class="section-main-text">While news of the scandal first broke in July of 2018, the Jerome Allen bribery scandal remains unresolved nearly a year and a half later. In March, Allen testified against Penn parent Philip Esformes in federal court, saying that Esformes bribed him in order to secure admission for his son, Morris, who graduated from Wharton in May. Allen’s testimony resulted in Esformes’ conviction, the implication of former Penn men’s basketball assistant coach Ira Bowman, Allen’s removal from the Penn Athletics Hall of Fame, and the avoidance of jail time for the charges against him. Allen, who was forced to pay over $200,000 in fines and forfeitures, pleaded guilty. Penn Athletics has not commented on Allen or its pending investigation into his conduct since July.</p>
                </div>
                <div class="col-md-6 narrow-col-left">
                    <div class="row">
                        <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/03/penn-athletics-jerome-allen-philip-esformes-trial-update-bribery-basketball-morris"><h4 class="primary-story"> Updated: Former Penn coach Jerome Allen testifies, implicating former assistant </h4></a>
                                <p class="date"> Mar. 10 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/fc33bfcb-c2b5-4247-b482-fee5946add6e.sized-1000x1000.jpg?w=1000" />
                        </div>
                    </div>
                    <hr class="primary-story-line"/>
                    <div class="row">
                        <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/03/penn-jerome-allen-esformes-ira-bowman-smrt-investigation-bribery-scandal-ncaa-admission"><h4 class="primary-story"> Penn Athletics declines to further comment on Jerome Allen investigation </h4></a>
                                <p class="date"> Mar. 14 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/3aa540e0-9f7c-4858-b6a9-6ab2f91e3dbc.sized-1000x1000.jpg?w=1000" />
                        </div>
                    </div>
                <div class="top-border more-stories">
                    <SubSectionHeader color={"#131313"}>MORE STORIES</SubSectionHeader>
                    <a href="https://www.thedp.com/article/2019/07/jerome-allen-probation-accepting-bribes-penn-mens-basketball-college-admissions-scandal-esformes" class="story-link">
                            <h6 class="secondary-story"> Former Penn coach Jerome Allen avoids jail time in admissions bribery scandal </h6>
                        </a>
                    <p class="date"> July 2 </p>
                    <a href="https://www.thedp.com/article/2019/07/penn-athletics-jerome-allen-removed-hall-of-fame-trial-bribery-esformes-mens-basketball" class="story-link">
                            <h6 class="secondary-story"> Penn Athletics removes Jerome Allen from its Hall of Fame after federal conviction </h6>
                        </a>
                    <p class="date"> July 2 </p>
                    <a href="https://www.thedp.com/article/2019/07/penn-athletics-jerome-allen-admissions-bribery-scandal-varsity-blues-ncaa-ivy-league-mens-basketball" class="story-link">
                        <h6 class="secondary-story"> A year after the scandal broke, Penn Athletics remains quiet on Jerome Allen </h6>
                    </a>
                <p class="date"> July 20 </p>
                </div>
            </div>
            </div>
        </div>
    </section>


    {/* <!-- SPORTS 4--> */}
    <section class="section-inverse">
        <div class="container">
            <SubSectionHeader>BASKETBALL</SubSectionHeader>
            <div class="row">
                <div class="col-md-6 right-border narrow-col-right">
                    <img class="img-fluid"
                        src="https://s3.amazonaws.com/snwceomedia/dpn/ccf77784-1ddd-400d-879f-a48367e7475f.sized-1000x1000.jpg" />
                    <h3 class="main-header">Basketball has historic year</h3>
                    <p class="section-main-text">Penn men’s basketball started 2019 with a major milestone, winning its first Big 5 title since 2002 with a final win over Saint Joseph’s in January. Despite that success, however, the Quakers struggled in Ivy League play, clinching a spot in the Ivy Tournament on the final day of the regular season with a 7-7 record. The Red and Blue then lost to Harvard in the Tournament semifinal. Penn women’s basketball won a title of its own, sharing the Ivy League regular season championship with Princeton. However, the Quakers lost to the Tigers in the Ivy Tournament final, leaving them a game short of March Madness.</p>
                </div>
                <div class="col-md-6 narrow-col-left">
                    <div class="row">
                        <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/01/penn-mens-basketball-saint-josephs-big-5-washington-three-point-shooting-charlie-brown"><h4 class="primary-story"> Penn men's basketball completes sweep of Big 5 opponents by beating Saint Joseph's, 78-70 </h4></a>
                                <p class="date"> Jan. 26 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/03db02a2-838b-4e0d-a3c6-e49aa8536999.sized-1000x1000.jpg?w=1000" />
                        </div>
                    </div>
                    <hr class="primary-story-line"/>
                    <div class="row">
                        <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/03/penn-mens-basketball-brown-recap-ivy-league-tournament-goodman-brodeur"><h4 class="primary-story"> Penn men's basketball clinches Ivy Tournament berth with win over Brown </h4></a>
                                <p class="date"> Mar. 9 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/4bcf5f6e-896e-439a-a390-00304e0ccd83.sized-1000x1000.jpg?w=1000" />
                        </div>
                    </div>
                    <hr class="primary-story-line"/>
                    <div class="row">
                        <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/03/penn-womens-basketball-recap-brown-ivy-league-champions-parker-sterba"><h4 class="primary-story"> Penn women's basketball overpowers last-place Brown to win share of Ivy League title </h4></a>
                                <p class="date"> Mar. 9 </p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/999b53a1-7e52-420c-9ec4-aaf30a5ffb54.sized-1000x1000.jpg?w=1000" />
                        </div>
                    </div>
                <div class="top-border more-stories">
                    <SubSectionHeader color={"#131313"}>MORE STORIES</SubSectionHeader>
                    <a href="https://www.thedp.com/article/2019/03/penn-mens-basketball-ivy-league-tournament-madness-semifinal-recap-harvard" class="story-link">
                            <h6 class="secondary-story"> Penn men's basketball falls to Harvard, 66-58, in Ivy Tournament semifinals </h6>
                        </a>
                    <p class="date"> Mar. 16 </p>
                    <a href="https://www.thedp.com/article/2019/03/penn-womens-basketball-princeton-recap-ivy-league-championship-ncaa" class="story-link">
                            <h6 class="secondary-story"> Penn women's basketball falls to Princeton in Ivy Tournament final, 65-54 </h6>
                        </a>
                    <p class="date"> Mar. 17 </p>
                </div>
            </div>
            </div>
        </div>
    </section>

    {/* <!--34th Street--> */}
    <section class="opinion" id="street">
            <div class="container">
                <div class="section-top">
                    <SectionHeader>34th Street</SectionHeader>
                </div>
                <div class="section-description">
                    <p>2019 is nearly over. And with the new decade comes reflection, retrospection, and some top picks. This decade gave us an onslaught of pop culture, and now Street has endeavored to choose the best of all of it — best movies, best albums, and best television shows from this year, based on staff’s picks.</p>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="street-card">
                            <a href ="https://www.34st.com/article/2019/12/best-movies-decade-2010s-moonlight-carol-mad-max-get-out-grand-budapest-hotel-inside-llewyn-davis-lady-bird">
                                <h3 class="street-header">Best Movies</h3>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="street-card">
                            <a href="https://www.34st.com/article/2019/12/album-music-decade-2010s-roundup-beyonce-taylor-swift-kanye-west">
                                <h3 class="street-header">Best Albums</h3>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="street-card">
                            <a href="https://www.34st.com/article/2019/12/best-tv-shows-of-the-decade-fleabag-succession-30-rock-breaking-bad-game-of-thrones">
                                <h3 class="street-header">Best TV Shows</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <MultiMedia/>
        <Footer>
            Made with 🎉 by The Daily Pennsylvanian, © 2018. All rights reversed.
        </Footer>
    </Wrapper>
  </>
)

export default Index
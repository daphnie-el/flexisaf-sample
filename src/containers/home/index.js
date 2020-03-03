import React from 'react';
import {Layout, Box, Cage, HomeWrapper, theme, themeColor, Button, DarkWrapper, Grid, Nav} from '../../components';
import Image from '../../assets/image.svg';
import Admin from '../../assets/Admin.svg';
import Book from '../../assets/boook.svg';
import hands from '../../assets/hands.svg';
import LogoB from '../../assets/logoB.svg';
import LogoA from '../../assets/logoA.svg';


export const Home = () => {
    return (
        <Layout theme={theme}>
            {/* NAVIGATION */}
            <Cage>
                <Nav height="80" >
                    
                    <img src={LogoB} alt="" width='' />
                    
                    <span>
                        <span>Home</span>
                        <span>Solutions</span>
                        <span>Company</span>
                        <span>Support</span>
                        <span>Contact Us</span>
                    </span>
                </Nav>
            </Cage>
            {/* HEROS PAGE */}
            <HomeWrapper>
                <Cage>
                <Box height="600">                      
                    <Grid default='2fr 3fr' >
                        <Box textAlign='left' >
                             <h1>We are on a mission</h1>
                            <p>Our mission is to take Education in Nigeria 
                                where no one has gone before.</p>
                            <p>Our Solutions are guaranteed to save you time,
                                reduce expenses and boost efficiency.
                            </p>
                            <Button>Learn more</Button>
                        </Box> 
                        <Box align='flex-end'>
                          <img src={Image} alt='students' width='600px'/>
                        </Box>    
                    </Grid>                   
                </Box>
                <Box height='600'>
                    <h3 style={{color: '#fff'}}>
                        you need us if you
                    </h3>
                        <Grid default='repeat(3, 1fr)' height='400px' >
                        <Box bg={theme.secColor} height='400' grid>
                            <h3>own this</h3>
                            <img src={Admin} alt="logo"/>
                            <h3>School</h3>
                                <p className='soln'>Use innovative technology in administering and management of schools in a 
                                    comprehensive way to achieve higher standards.
                                </p>                            
                        </Box>
                        <Box bg={theme.secColor} height='400' grid>
                            <h3>run this</h3>
                            <img src={hands} alt="logo"/>
                            <h3>government agencies</h3>
                                <p className='soln'>Let’s partner to support learning & teaching in a
                                     holistic and realistic manner for our educational environment.
                                </p>
                        </Box>
                        <Box bg={theme.secColor} height='400' grid>
                            <h3>do this</h3>
                            <img src={Book} alt="logo"/>
                            <h3>educational bodies</h3>
                                <p className='soln'>Having deployed several adaptive educational software , our model 
                                    is strategically aligned  to meet your education vision
                                </p>
                        </Box>
                    </Grid>
                </Box>
                </Cage>
            </HomeWrapper>
            {/* FEATURED SOLUTIONS */}
            <Cage>
                <Box height="600">
                    <h3>featured solutions</h3>
                    <p className='soln'>Having understood the very core of your needs, our solutions 
                        are tailored specifically for you. <br/>Make an investment in solutions
                         that evolve with requirements, needs, policies and trends                        
                    </p>
                    <Grid default='repeat(3, 1fr)' height='360px'>
                        <Box grid align='center'>
                            <img src="https://flexisaf.com/wp-content/uploads/2015/10/skools-logo-1.png" width='250' alt="skools-logo" />
                            <Box height='30' />
                            <p className="soln">
                                Streamlined Applications, Admission & Enrolment to Build Stronger Relationships.
                            </p>
                            <Box height='35'/>
                            <Button>Learn More</Button>
                        </Box>
                        <Box grid align='center'>
                            <img src="https://flexisaf.com/wp-content/uploads/2015/10/srms-final-logo-02.svg" width='250' alt="srms-logo"/>
                            <Box height='30' />
                            <p className="soln">
                                Monitor your  institution and have control over its day to day activities.
                            </p>
                            <Box height='35'/>
                            <Button>Learn More</Button>
                        </Box>
                        <Box grid align='center'>
                            <img src="https://flexisaf.com/wp-content/uploads/2015/10/safsms-logo-colored.svg" width='250' alt="safsms-logo"/>
                            <Box height='30' />
                            <p className="soln">
                                Simple, Affordable and Flexible School Management Software that empowers you to stay ahead.
                            </p>
                            <Box height='35' />
                            <Button>Learn More</Button>
                        </Box>
                    </Grid>   
                </Box>
            </Cage>
            <DarkWrapper >
                <Cage>
                    <Box height="150" bg={themeColor} row>
                        <p>
                            Our clients are part of the FlexiSAF family. We stick with you and
                             evolve together providing solutions that are tailored specifically for you.
                             </p>
                        <p>
                            With over 8 years of experience, our technical expertise has 
                            been emboldened by our resolve to help you conquer barriers.
                        </p>
                        <p>With us, the possibilities are endless because we understand the very core
                             of your needs. As your needs broaden, so does our solutions.
                        </p>
                    </Box >
                </Cage>
                </DarkWrapper>
                {/*FOOTER */}
            <Cage>
                {/* <Box height='30' /> */}
                <Nav height="250" >                    
                    <Box align='flex-start'>
                        <img src={LogoA} alt="logo" width='200'/>
                        <p>Copyright 2020 -FlexiSAF Edusoft Limited. No. 3 Egbedi Close,
                            off Samuel Ladoke Akintola Boulevard, Garki 2, Abuja, Nigeria.
                        </p>
                    </Box>
                    <Grid default='repeat(3, 1fr)'>                        
                        <Box align='flex-start' textAlign='left' height= '200'>
                            <h3>Company</h3>                            
                            <p>About Us</p>
                            <p>History</p>
                            <p>Contact Us</p>
                        </Box>
                        <Box align='flex-start' textAlign='left' height='200'>
                            <h3>solutions</h3>
                            <p>SAFSMS</p>
                            <p>Skools.ng</p>
                            <p>SRMS</p>
                        </Box>
                        <Box align='flex-start' textAlign='left' height='200'>
                            <h3>connect</h3>                            
                            <p>Blogs</p>
                            <p>Support</p>
                            <p>Careers</p>     
                        </Box>
                    </Grid>
                </Nav>
            </Cage>            
        </Layout>
    )
}

import React from 'react';
import styled from 'styled-components';
import { Box, Button, Cage, Grid, GridWrapper, Layout, Nav, theme, themeColor } from '../../components';
import Image from '../../assets/image.svg';
import Admin from '../../assets/Admin.svg';
import Book from '../../assets/boook.svg';
import hands from '../../assets/hands.svg';
import LogoB from '../../assets/logoB.svg';
import Logo from '../../assets/Logo.svg';
import  "../../components/fonts/fontello/css/flex.css";

const HomeWrapper = styled.div`
    height: 100%;
    margin: 0;
    overflow: hidden;
    width: 100%;
    position: relative;
    &::before {
        background-color: ${themeColor};
        content: "";
        border-radius: 15px;
        position: absolute;
        height: 60%;
        width: 100%;
        bottom: -8%;
        right: 8%;            
        transform: rotate(5deg)
    }        
`
const DarkWrapper = styled.div`
    background: ${themeColor};
    line-height: 20px;

    & p {
        padding: 20px;
        color: #fff;
    }
`

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
                            <Box height='30' />
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
                       
                        <Grid height='400px'>  <GridWrapper default='repeat(3, 1fr)'>                          
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
                        </GridWrapper></Grid>
                    
                </Box>
                </Cage>
            </HomeWrapper>
            {/* FEATURED SOLUTIONS */}
            <Cage>
                <Box height="550">
                    <h3>featured solutions</h3>
                    <p className='soln'>Having understood the very core of your needs, our solutions 
                        are tailored specifically for you. <br/>Make an investment in solutions
                         that evolve with requirements, needs, policies and trends                        
                    </p>
                    <Box height='30'></Box>
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
                    <Grid default='repeat(3, 1fr)' bg={themeColor} >
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
                    </Grid >
                </Cage>
                </DarkWrapper>
                {/*FOOTER */}
            <Cage>
                <Box height="250" > 
                    <Grid default='repeat(5, 1fr)'>                     
                        <Box align='flex-start'>
                            <img src={Logo} alt="logo" width='150'/>                            
                     </Box>
                        <Box />               
                        <Box align='flex-start' textAlign='left' height= '150'>
                            <h3>Company</h3>                            
                            <p>About Us</p>
                            <p>History</p>
                            <p>Contact Us</p>
                        </Box>
                        <Box align='flex-start' textAlign='left' height='150'>
                            <h3>solutions</h3>
                            <p>SAFSMS</p>
                            <p>Skools.ng</p>
                            <p>SRMS</p>
                        </Box>
                        <Box align='flex-start' textAlign='left' height='150'>
                            <h3>connect</h3>                            
                            <p>Blogs</p>
                            <p>Support</p>
                            <p>Careers</p>     
                        </Box>
                    </Grid>
                    <Grid default='2fr 1fr 3fr'>
                        <Box textAlign='left'>
                            <p className=''>FlexiSAF Edusoft Limited © 2020. All Rights reserved
                            </p>
                        </Box>
                        <Box/>
                        <Box row align='flex-end'>
                            {/* <span > */}
                                <i class="icon-instagram"></i>
                                <i class="icon-facebook"></i> 
                                <i class="icon-twitter"></i>
                                <i class="icon-linkedin"></i>
                                <i class="icon-youtube-play"></i>
                                <i class="icon-gplus"></i>
                            {/* </span> */}
                        </Box>
                    </Grid>
                </Box>
            </Cage>            
        </Layout>
    )
}

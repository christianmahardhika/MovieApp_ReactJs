import { Card, Container, Grid, Header, Image } from "semantic-ui-react";
import { PbClassCardComingSoon } from "./component/PbClassCardComingSoon";
import { PbHeader } from "./component/pbheader";
import { PbHeaderBgContainer } from "./component/pbheaderbgcontainer";

export default function Home() {
    return (
        <div>
            <PbHeaderBgContainer headerimageurl = 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'>
                <Container style = {{ paddingTop: '30px' }}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column textAlign = "left" mobile = {3} tablet = {3} computer = {1}>
                                <Image src = 'https://www.freepngimg.com/download/camera/70747-minion-kevin-stuart-bob-the-minions.png'/>
                            </Grid.Column>
                            <Grid.Column mobile = {13} tablet = {13} computer = {15}>
                                <PbHeader textAlign = "right" color = 'white'>
                                    Login
                                </PbHeader>
                            </Grid.Column>
                        </Grid.Row> 
                        <Grid.Row style = {{ marginTop: '120px' }} only = 'computer'>
                            <Grid.Column mobile = {10} tablet = {10} computer = {6}>
                                <PbHeader as = 'h1' color = 'white'>
                                    Selamat Datang di
                                </PbHeader>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style = {{ marginTop: '80px' }} only = 'tablet mobile'>
                            <Grid.Column mobile = {10} tablet = {10} computer = {6}>
                                <PbHeader as = 'h1' color = 'white'>
                                    Selamat Datang di
                                </PbHeader>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style = {{ paddingTop: '0px', paddingBottom: '0px' }}>
                            <Grid.Column mobile = {14} tablet = {14} computer = {8} >
                                <PbHeader as = 'h1' color = 'white'>
                                    Bioskop tempatnya cari film
                                </PbHeader>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style = {{ marginTop: '20px' }}>
                            <Grid.Column mobile = {8} tablet = {8} computer = {7}>
                                <PbHeader as = 'h3' color = 'white'>
                                    Platform tempat nyari hiburan
                                </PbHeader>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </PbHeaderBgContainer>
            <Container style = {{ marginTop: '60px' }}>
                <Grid.Column mobile = {11} tablet = {11} computer = {6}>
                    <PbHeader as = 'h1'>Mulai Nonton Sekarang</PbHeader>
                </Grid.Column>
            </Container>
            <Container style = {{ marginTop : '40px' }}>
                <Grid>
                    <Grid.Row style = {{ padding : '0px' }} only = 'computer tablet'>
                        <Grid.Column width = '4'>
                            <Card style = {{ height: '300px' }}>
                                <Image src='https://images.unsplash.com/photo-1546795729-f3a5d42087f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header style = {{ marginTop: '8px' }}>Matlab</Card.Header>
                                    <Card.Meta style = {{ marginTop: '8px' }}>
                                        <span className='date'>Lorem ipsum lena color sit amet amet, consectetur adipiscing elit. Risus donec dolor lectus.</span>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width = '4'>
                            <PbClassCardComingSoon message = 'Coming soon'/>
                        </Grid.Column>
                        <Grid.Column width = '4'>
                            <PbClassCardComingSoon message = 'Coming soon'/>
                        </Grid.Column>
                        <Grid.Column width = '4'>
                            <PbClassCardComingSoon message = 'Coming soon'/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style = {{ padding : '0px' }} only = 'mobile'>
                        <Grid.Column width = '16'>
                            <Card style = {{ height: '300px', width: '100%' }}>
                                <Image 
                                    src = 'https://images.unsplash.com/photo-1546795729-f3a5d42087f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80' 
                                    style = {{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Content>
                                    <Card.Header style = {{ marginTop: '8px' }}>Matlab</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Lorem ipsum lena color sit amet amet, consectetur adipiscing elit. Risus donec dolor lectus.</span>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style = {{ padding : '0px' }} only = 'mobile'>
                        <Grid.Column width = '16'>
                            <Card style = {{ height: '300px', width: '100%' }}>
                                <Image 
                                    src = 'https://images.unsplash.com/photo-1546795729-f3a5d42087f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80' 
                                    style = {{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Content>
                                    <Card.Header style = {{ marginTop: '8px' }}>Matlab</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Lorem ipsum lena color sit amet amet, consectetur adipiscing elit. Risus donec dolor lectus.</span>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style = {{ padding : '0px' }} only = 'mobile'>
                        <Grid.Column width = '16'>
                            <Card style = {{ height: '300px', width: '100%' }}>
                                <Image 
                                    src = 'https://images.unsplash.com/photo-1546795729-f3a5d42087f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80' 
                                    style = {{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Content>
                                    <Card.Header style = {{ marginTop: '8px' }}>Matlab</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Lorem ipsum lena color sit amet amet, consectetur adipiscing elit. Risus donec dolor lectus.</span>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style = {{ padding : '0px' }} only = 'mobile'>
                        <Grid.Column width = '16'>
                            <Card style = {{ height: '300px', width: '100%' }}>
                                <Image 
                                    src = 'https://images.unsplash.com/photo-1546795729-f3a5d42087f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80' 
                                    style = {{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Content>
                                    <Card.Header style = {{ marginTop: '8px' }}>Matlab</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Lorem ipsum lena color sit amet amet, consectetur adipiscing elit. Risus donec dolor lectus.</span>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style = {{ padding : '0px' }} only = 'mobile'>
                        <Grid.Column width = '16'>
                            <Card style = {{ height: '300px', width: '100%' }}>
                                <Image 
                                    src = 'https://images.unsplash.com/photo-1546795729-f3a5d42087f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80' 
                                    style = {{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Content>
                                    <Card.Header style = {{ marginTop: '8px' }}>Matlab</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Lorem ipsum lena color sit amet amet, consectetur adipiscing elit. Risus donec dolor lectus.</span>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style = {{ padding : '0px' }} only = 'mobile'>
                        <Grid.Column width = '16'>
                            <Card style = {{ height: '300px', width: '100%' }}>
                                <Image 
                                    src = 'https://images.unsplash.com/photo-1546795729-f3a5d42087f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80' 
                                    style = {{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Content>
                                    <Card.Header style = {{ marginTop: '8px' }}>Matlab</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Lorem ipsum lena color sit amet amet, consectetur adipiscing elit. Risus donec dolor lectus.</span>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style = {{ padding : '0px' }} only = 'mobile'>
                        <Grid.Column width = '16'>
                            <Card style = {{ height: '300px', width: '100%' }}>
                                <Image 
                                    src = 'https://images.unsplash.com/photo-1546795729-f3a5d42087f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80' 
                                    style = {{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Content>
                                    <Card.Header style = {{ marginTop: '8px' }}>Matlab</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Lorem ipsum lena color sit amet amet, consectetur adipiscing elit. Risus donec dolor lectus.</span>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}
import { Card } from "semantic-ui-react";
import styled from 'styled-components';
import { PbHeader } from './pbheader';

interface PbClassCardComingSoonProps {
    message: String
}

export const PbClassCardComingSoon = ({  message } : PbClassCardComingSoonProps) => {
    return (
        <Card style = {{ height: '300px', width: '100%' }}>
            <PbComingSoonContainer>
                <PbHeader color = 'white' style = {{ lineHeight: '300px' }}>
                    { message }
                </PbHeader>
            </PbComingSoonContainer>
        </Card> 
    );
}

export const PbComingSoonContainer = styled.div ` && {
    width: 100%;
    height: 100%;
    text-align: center;
    background-size: cover;
    background-position: center center; 
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("https://assets.tvo.org/prod/s3fs-public/styles/full_width_1280/public/article-thumbnails/kids%20in%20classroom.JPG?KgEyQTBORydSiHj.xIj8ROjMdJvgPW4r");
}`
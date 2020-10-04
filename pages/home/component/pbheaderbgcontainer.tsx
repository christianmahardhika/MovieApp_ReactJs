import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

export const PbHeaderBgContainer = styled(Container)`
    && {
        width: 100%;
        margin: 0px !important;
        height: 460px;
        background-size: cover;
        background-position: center center;
        background-image: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.5) 0%, 
            rgba(0, 0, 0, 0) 100%), 
            url(${ props => props.headerimageurl }
        );
    }
`
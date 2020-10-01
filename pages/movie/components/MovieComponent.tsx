import { Card, Image } from 'semantic-ui-react'
import styled from 'styled-components';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieComponent = ({ title, poster_path, overview, vote_average }) => {
    return <div>
        <CardMargin>
            <Card>
                <Image src={IMG_API + poster_path} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Description>
                        {overview}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <RatingContainer>
                        <div>
                            <h1>Rating</h1>
                        </div>
                        <div>{vote_average}</div>
                    </RatingContainer>
                </Card.Content>
            </Card>
        </CardMargin>
    </div>
}

export default MovieComponent

const CardMargin = styled.div`
  margin: 10px;
`;
const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
`;
